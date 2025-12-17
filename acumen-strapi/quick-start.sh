#!/bin/bash
# =============================================================================
# Quick Start Deployment Script for Linux/Mac
# Automates the initial setup and deployment of Strapi backend
# =============================================================================

set -e  # Exit on error

echo "=================================================================="
echo "        Acumen Blog - Strapi Backend Quick Start"
echo "=================================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is installed
echo "[1/6] Checking Docker installation..."
if ! command -v docker &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} Docker is not installed"
    echo "Please install Docker: https://docs.docker.com/get-docker/"
    exit 1
fi
echo -e "   ${GREEN}✓${NC} Docker: OK"
echo ""

# Check if docker-compose is available
echo "[2/6] Checking docker-compose..."
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} docker-compose is not available"
    echo "Please install Docker Compose"
    exit 1
fi
echo -e "   ${GREEN}✓${NC} Docker Compose: OK"
echo ""

# Check if .env file exists
echo "[3/6] Checking environment configuration..."
if [ ! -f "backend/.env" ]; then
    echo -e "   ${YELLOW}[WARNING]${NC} backend/.env not found"
    
    if [ ! -f "backend/.env.example" ]; then
        echo -e "${RED}[ERROR]${NC} backend/.env.example not found"
        echo "Please create backend/.env manually with required secrets"
        exit 1
    fi
    
    cp backend/.env.example backend/.env
    echo -e "   ${GREEN}✓${NC} Created backend/.env from example"
    echo ""
    echo -e "   ${YELLOW}[ACTION REQUIRED]${NC} Please edit backend/.env and update:"
    echo "     - APP_KEYS (run: ./deployments/generate-secrets.sh)"
    echo "     - API_TOKEN_SALT"
    echo "     - ADMIN_JWT_SECRET"
    echo "     - TRANSFER_TOKEN_SALT"
    echo "     - JWT_SECRET"
    echo "     - DATABASE_PASSWORD"
    echo ""
    read -p "   Press Enter after updating backend/.env..."
else
    echo -e "   ${GREEN}✓${NC} backend/.env: OK"
    echo ""
fi

# Stop existing containers
echo "[4/6] Stopping existing containers (if any)..."
docker-compose down &> /dev/null || true
echo -e "   ${GREEN}✓${NC} Cleanup complete"
echo ""

# Build and start services
echo "[5/6] Building and starting services..."
echo "   This may take 5-10 minutes on first run..."
echo ""

if docker-compose up --build -d; then
    echo -e "   ${GREEN}✓${NC} Services started successfully"
else
    echo -e "${RED}[ERROR]${NC} Failed to start Docker services"
    echo "Check logs with: docker-compose logs strapi"
    exit 1
fi

# Wait for services
echo ""
echo "[6/6] Waiting for services to be healthy..."
sleep 10

# Check container status
if docker-compose ps | grep -q "Up"; then
    echo -e "   ${GREEN}✓${NC} All services running"
else
    echo -e "   ${YELLOW}[WARNING]${NC} Services may not be running properly"
    echo "Check status with: docker-compose ps"
fi

# Success message
echo ""
echo "=================================================================="
echo "                    DEPLOYMENT SUCCESSFUL!"
echo "=================================================================="
echo ""
echo "Next Steps:"
echo ""
echo "1. Create Admin User:"
echo "   Open: http://localhost:1337/admin"
echo "   Follow the setup wizard"
echo ""
echo "2. Configure API Permissions:"
echo "   Admin Panel -> Settings -> Users & Permissions -> Public role"
echo "   Enable: find, findOne for all content types"
echo ""
echo "3. Generate API Token:"
echo "   Admin Panel -> Settings -> API Tokens -> Create new token"
echo "   Type: Read-only, Duration: Unlimited"
echo "   Copy token to frontend .env.local as STRAPI_API_TOKEN"
echo ""
echo "4. Test API:"
echo "   curl http://localhost:1337/api/articles"
echo ""
echo "5. Start Frontend:"
echo "   cd ../Acumen-blog-main"
echo "   npm run dev"
echo "   Open: http://localhost:3000"
echo ""
echo "=================================================================="
echo "Useful Commands:"
echo "=================================================================="
echo ""
echo "View logs:        docker-compose logs -f strapi"
echo "Stop services:    docker-compose down"
echo "Restart:          docker-compose restart strapi"
echo "Fresh start:      docker-compose down -v && docker-compose up --build"
echo ""
echo "Run benchmarks:   node deployments/benchmark.js"
echo "Apply indexes:    docker-compose exec postgres psql -U strapi_user -d acumen_blog -f /docker-entrypoint-initdb.d/optimize.sql"
echo ""
echo "Documentation:    documentation/SETUP.md"
echo "=================================================================="
echo ""
