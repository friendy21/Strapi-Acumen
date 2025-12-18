#!/bin/bash
# =============================================================================
# MariaDB Setup Script for Hub-and-Spoke Architecture
# Run this on the DATABASE SERVER (134.209.107.38)
# =============================================================================

set -e

# Configuration
APP_SERVER_IP="167.172.66.204"
DB_NAME="acumen_blog"
DB_USER="strapi_user"

echo "=============================================="
echo "  MariaDB Setup for Strapi Hub-and-Spoke"
echo "=============================================="
echo ""

# Generate password if not provided
if [ -z "$DB_PASSWORD" ]; then
    DB_PASSWORD=$(openssl rand -base64 32 | tr -d '/+=' | cut -c1-32)
    echo "📝 Generated database password (SAVE THIS!):"
    echo "   $DB_PASSWORD"
    echo ""
fi

# Update system
echo "[1/6] Updating system packages..."
apt-get update -qq
apt-get upgrade -y -qq

# Install MariaDB
echo "[2/6] Installing MariaDB..."
apt-get install -y -qq mariadb-server mariadb-client

# Start and enable MariaDB
systemctl start mariadb
systemctl enable mariadb

# Configure for remote connections
echo "[3/6] Configuring remote connections..."
sed -i 's/^bind-address.*=.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf
systemctl restart mariadb

# Setup UFW firewall
echo "[4/6] Configuring firewall (UFW)..."
ufw --force enable
ufw allow 22/tcp comment "SSH"
ufw allow from $APP_SERVER_IP to any port 3306 proto tcp comment "Strapi App Server"
ufw reload

# Create database and user
echo "[5/6] Creating database and user..."
mysql -u root << MYSQL_SCRIPT
-- Create database
CREATE DATABASE IF NOT EXISTS $DB_NAME
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Create user (ONLY from app server IP)
CREATE USER IF NOT EXISTS '$DB_USER'@'$APP_SERVER_IP'
    IDENTIFIED BY '$DB_PASSWORD';

-- Grant privileges
GRANT ALL PRIVILEGES ON $DB_NAME.*
    TO '$DB_USER'@'$APP_SERVER_IP';

FLUSH PRIVILEGES;
MYSQL_SCRIPT

# Verify setup
echo "[6/6] Verifying setup..."
echo ""

# Check MariaDB listening
echo "✅ MariaDB listening on:"
ss -tlnp | grep 3306

# Check UFW rules
echo ""
echo "✅ Firewall rules:"
ufw status numbered | grep -E "(22|3306)"

# Check user
echo ""
echo "✅ Database user:"
mysql -u root -e "SELECT User, Host FROM mysql.user WHERE User='$DB_USER';"

echo ""
echo "=============================================="
echo "  SETUP COMPLETE!"
echo "=============================================="
echo ""
echo "Database: $DB_NAME"
echo "Username: $DB_USER"
echo "Password: $DB_PASSWORD"
echo "Host:     $(hostname -I | awk '{print $1}')"
echo "Port:     3306"
echo ""
echo "Add this to GitHub Secrets:"
echo "  DATABASE_HOST = $(hostname -I | awk '{print $1}')"
echo "  STRAPI_DATABASE_PASSWORD = $DB_PASSWORD"
echo ""
echo "=============================================="
