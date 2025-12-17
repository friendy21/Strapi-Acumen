#!/bin/bash
# ============================================================================
# DigitalOcean Droplet Setup Script
# Run this once on your DigitalOcean droplet to prepare for deployment
# ============================================================================

set -e

echo "============================================================================"
echo "  DigitalOcean Droplet Setup for Acumen Strapi"
echo "============================================================================"
echo ""

# Update system
echo "[1/8] Updating system packages..."
apt-get update && apt-get upgrade -y

# Install Docker
echo "[2/8] Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    systemctl enable docker
    systemctl start docker
    echo "✓ Docker installed"
else
    echo "✓ Docker already installed"
fi

# Install Docker Compose
echo "[3/8] Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d\" -f4)
    curl -L "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo "✓ Docker Compose installed"
else
    echo "✓ Docker Compose already installed"
fi

# Create application directory
echo "[4/8] Creating application directory..."
mkdir -p /opt/acumen-strapi
cd /opt/acumen-strapi

# Download production files
echo "[5/8] Setting up deployment files..."
cat > docker-compose.yml << 'COMPOSE_EOF'
# Production Docker Compose will be deployed via CI/CD
# This is a placeholder - will be replaced by GitHub Actions
COMPOSE_EOF

# Create environment file template
echo "[6/8] Creating environment file..."
cat > .env << 'ENV_EOF'
# DigitalOcean Production Environment
# IMPORTANT: Update these values!

# DockerHub
DOCKERHUB_USERNAME=your-dockerhub-username

# Database
DATABASE_NAME=acumen_blog
DATABASE_USERNAME=strapi_user
DATABASE_PASSWORD=CHANGE_THIS_STRONG_PASSWORD

# Strapi Security Keys (generate with: openssl rand -base64 32)
APP_KEYS=CHANGE_THIS_KEY1,CHANGE_THIS_KEY2,CHANGE_THIS_KEY3,CHANGE_THIS_KEY4
API_TOKEN_SALT=CHANGE_THIS_SALT
ADMIN_JWT_SECRET=CHANGE_THIS_SECRET
TRANSFER_TOKEN_SALT=CHANGE_THIS_SALT
JWT_SECRET=CHANGE_THIS_SECRET

# URLs
STRAPI_URL=https://api.yourdomain.com
FRONTEND_URL=https://yourdomain.com
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Database SSL
DATABASE_SSL=false
ENV_EOF

echo "✓ Environment file created at /opt/acumen-strapi/.env"

# Set up UFW firewall
echo "[7/8] Configuring firewall..."
ufw --force enable
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 1337/tcp  # Strapi (optional - use nginx instead)
echo "✓ Firewall configured"

# Install Nginx (optional - for SSL)
echo "[8/8] Installing Nginx..."
apt-get install -y nginx
systemctl enable nginx
echo "✓ Nginx installed"

echo ""
echo "============================================================================"
echo "  Setup Complete!"
echo "============================================================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Edit environment file:"
echo "   nano /opt/acumen-strapi/.env"
echo ""
echo "2. Generate secrets:"
echo "   openssl rand -base64 32  # Run 7 times for all secrets"
echo ""
echo "3. Add GitHub Actions secrets in your repository:"
echo "   - DOCKERHUB_USERNAME"
echo "   - DOCKERHUB_TOKEN"
echo "   - DIGITALOCEAN_ACCESS_TOKEN"
echo "   - DROPLET_IP (this server's IP)"
echo "   - SSH_PRIVATE_KEY (for deployment)"
echo ""
echo "4. Copy deployment files from GitHub:"
echo "   cd /opt/acumen-strapi"
echo "   # Files will be deployed via CI/CD"
echo ""
echo "5. Setup SSL with Certbot (recommended):"
echo "   apt-get install -y certbot python3-certbot-nginx"
echo "   certbot --nginx -d api.yourdomain.com"
echo ""
echo "============================================================================"
