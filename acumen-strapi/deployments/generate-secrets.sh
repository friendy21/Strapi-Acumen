#!/bin/bash
# =============================================================================
# Secret Keys Generation Script
# Generates secure random keys for Strapi v5
# =============================================================================

echo "==================================================================="
echo "Strapi v5 Secret Keys Generation"
echo "==================================================================="
echo ""

# Generate random 32-character base64 strings
generate_key() {
    node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
}

echo "Generated Secrets (save these securely!):"
echo "-------------------------------------------------------------------"
echo ""

echo "APP_KEYS=$(generate_key),$(generate_key),$(generate_key),$(generate_key)"
echo "API_TOKEN_SALT=$(generate_key)"
echo "ADMIN_JWT_SECRET=$(generate_key)"
echo "TRANSFER_TOKEN_SALT=$(generate_key)"
echo "JWT_SECRET=$(generate_key)"
echo "DATABASE_PASSWORD=$(generate_key | tr -d '=/' | cut -c1-32)"
echo "STRAPI_WEBHOOK_SECRET=$(generate_key)"
echo ""
echo "-------------------------------------------------------------------"
echo "Copy these values to your .env file"
echo "NEVER commit .env files to version control!"
echo "==================================================================="
