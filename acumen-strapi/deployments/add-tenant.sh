#!/bin/bash
# =============================================================================
# Add New Tenant Script for Hub-and-Spoke Architecture
# Run this on the DATABASE SERVER (134.209.107.38)
# =============================================================================
# Usage: ./add-tenant.sh <TENANT_IP> <TENANT_NAME> [PASSWORD]
# Example: ./add-tenant.sh 192.168.1.100 tenant_client_xyz
# =============================================================================

set -e

# Configuration
DB_NAME="acumen_multitenant"
DB_USER="strapi_user"

# Parse arguments
TENANT_IP="$1"
TENANT_NAME="$2"
TENANT_PASSWORD="$3"

# Validate inputs
if [ -z "$TENANT_IP" ] || [ -z "$TENANT_NAME" ]; then
    echo "=============================================="
    echo "  Add New Tenant - Hub-and-Spoke Architecture"
    echo "=============================================="
    echo ""
    echo "Usage: $0 <TENANT_IP> <TENANT_NAME> [PASSWORD]"
    echo ""
    echo "Arguments:"
    echo "  TENANT_IP    - IP address of the new app server"
    echo "  TENANT_NAME  - Unique tenant identifier (e.g., tenant_client_xyz)"
    echo "  PASSWORD     - Optional: MySQL password (auto-generated if not provided)"
    echo ""
    echo "Example:"
    echo "  $0 192.168.1.100 tenant_client_xyz"
    echo ""
    exit 1
fi

# Validate IP format
if ! [[ $TENANT_IP =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "❌ Error: Invalid IP address format: $TENANT_IP"
    exit 1
fi

# Validate tenant name format (alphanumeric, underscores, hyphens)
if ! [[ $TENANT_NAME =~ ^[a-zA-Z0-9_-]+$ ]]; then
    echo "❌ Error: Invalid tenant name format. Use only alphanumeric, underscores, hyphens."
    exit 1
fi

# Generate password if not provided
if [ -z "$TENANT_PASSWORD" ]; then
    TENANT_PASSWORD=$(openssl rand -base64 32 | tr -d '/+=' | cut -c1-32)
    echo "📝 Generated password for tenant (SAVE THIS!):"
    echo "   $TENANT_PASSWORD"
    echo ""
fi

echo "=============================================="
echo "  Adding New Tenant: $TENANT_NAME"
echo "=============================================="
echo ""

# Step 1: Add UFW firewall rule
echo "[1/3] Adding firewall rule for $TENANT_IP..."
if ufw status | grep -q "$TENANT_IP"; then
    echo "     ⚠️  Firewall rule already exists for $TENANT_IP"
else
    ufw allow from "$TENANT_IP" to any port 3306 proto tcp comment "$TENANT_NAME"
    echo "     ✅ Firewall rule added"
fi

# Step 2: Create MySQL user
echo "[2/3] Creating MySQL user for $TENANT_IP..."
mysql -u root << MYSQL_SCRIPT
-- Create user restricted to specific IP
CREATE USER IF NOT EXISTS '$DB_USER'@'$TENANT_IP'
    IDENTIFIED BY '$TENANT_PASSWORD';

-- Grant privileges on the multi-tenant database
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER,
      CREATE TEMPORARY TABLES, LOCK TABLES, REFERENCES
ON $DB_NAME.*
TO '$DB_USER'@'$TENANT_IP';

FLUSH PRIVILEGES;
MYSQL_SCRIPT
echo "     ✅ MySQL user created"

# Step 3: Verify setup
echo "[3/3] Verifying setup..."
echo ""

echo "✅ Firewall rules for port 3306:"
ufw status numbered | grep 3306 | tail -5

echo ""
echo "✅ MySQL user created:"
mysql -u root -e "SELECT User, Host FROM mysql.user WHERE User='$DB_USER' AND Host='$TENANT_IP';"

echo ""
echo "=============================================="
echo "  TENANT ADDED SUCCESSFULLY!"
echo "=============================================="
echo ""
echo "Tenant Details:"
echo "  Name:     $TENANT_NAME"
echo "  IP:       $TENANT_IP"
echo "  Database: $DB_NAME"
echo "  Username: $DB_USER"
echo "  Password: $TENANT_PASSWORD"
echo ""
echo "Next Steps for App Server ($TENANT_IP):"
echo ""
echo "1. Add these GitHub Secrets:"
echo "   TENANT_ID              = $TENANT_NAME"
echo "   DATABASE_HOST          = $(hostname -I | awk '{print $1}')"
echo "   STRAPI_DATABASE_PASSWORD = $TENANT_PASSWORD"
echo ""
echo "2. Or set in .env file on the app server:"
echo "   TENANT_ID=$TENANT_NAME"
echo "   DATABASE_HOST=$(hostname -I | awk '{print $1}')"
echo "   DATABASE_PASSWORD=$TENANT_PASSWORD"
echo ""
echo "3. Test connectivity from app server:"
echo "   nc -zv $(hostname -I | awk '{print $1}') 3306"
echo ""
echo "=============================================="
