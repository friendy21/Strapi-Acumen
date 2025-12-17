@echo off
REM =============================================================================
REM Quick Start Deployment Script
REM Automates the initial setup and deployment of Strapi backend
REM =============================================================================

echo ==================================================================
echo        Acumen Blog - Strapi Backend Quick Start
echo ==================================================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker is not installed or not in PATH
    echo Please install Docker Desktop: https://www.docker.com/products/docker-desktop/
    pause
    exit /b 1
)

echo [1/6] Checking Docker installation...
echo    Docker: OK
echo.

REM Check if docker-compose is available
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] docker-compose is not available
    echo Please ensure Docker Compose is installed
    pause
    exit /b 1
)

echo [2/6] Checking docker-compose...
echo    Docker Compose: OK
echo.

REM Check if .env file exists in backend directory
if not exist "backend\.env" (
    echo [3/6] Environment file not found. Creating from example...
    
    if not exist "backend\.env.example" (
        echo [ERROR] backend\.env.example not found
        echo Please create backend\.env manually with required secrets
        pause
        exit /b 1
    )
    
    copy "backend\.env.example" "backend\.env" >nul
    echo    Created backend\.env from example
    echo.
    echo    [ACTION REQUIRED] Please edit backend\.env and update:
    echo      - APP_KEYS (run: deployments\generate-secrets.bat)
    echo      - API_TOKEN_SALT
    echo      - ADMIN_JWT_SECRET  
    echo      - TRANSFER_TOKEN_SALT
    echo      - JWT_SECRET
    echo      - DATABASE_PASSWORD
    echo.
    echo    Press any key after updating backend\.env...
    pause >nul
) else (
    echo [3/6] Environment file found...
    echo    backend\.env: OK
    echo.
)

REM Stop existing containers if running
echo [4/6] Stopping existing containers (if any)...
docker-compose down >nul 2>&1
echo    Cleanup complete
echo.

REM Build and start services
echo [5/6] Building and starting services...
echo    This may take 5-10 minutes on first run...
echo.

docker-compose up --build -d

if errorlevel 1 (
    echo.
    echo [ERROR] Failed to start Docker services
    echo Check logs with: docker-compose logs strapi
    pause
    exit /b 1
)

echo.
echo [6/6] Waiting for services to be healthy...
timeout /t 10 /nobreak >nul

REM Check if containers are running
docker-compose ps | findstr "Up" >nul
if errorlevel 1 (
    echo.
    echo [WARNING] Services may not be running properly
    echo Check status with: docker-compose ps
    echo Check logs with: docker-compose logs -f strapi
    pause
) else (
    echo    All services started successfully!
)

echo.
echo ==================================================================
echo                    DEPLOYMENT SUCCESSFUL!
echo ==================================================================
echo.
echo Next Steps:
echo.
echo 1. Create Admin User:
echo    Open: http://localhost:1337/admin
echo    Follow the setup wizard
echo.
echo 2. Configure API Permissions:
echo    Admin Panel -^> Settings -^> Users ^& Permissions -^> Public role
echo    Enable: find, findOne for all content types
echo.
echo 3. Generate API Token:
echo    Admin Panel -^> Settings -^> API Tokens -^> Create new token
echo    Type: Read-only, Duration: Unlimited
echo    Copy token to frontend .env.local as STRAPI_API_TOKEN
echo.
echo 4. Test API:
echo    curl http://localhost:1337/api/articles
echo.
echo 5. Start Frontend:
echo    cd ..\Acumen-blog-main
echo    npm run dev
echo    Open: http://localhost:3000
echo.
echo ==================================================================
echo Useful Commands:
echo ==================================================================
echo.
echo View logs:        docker-compose logs -f strapi
echo Stop services:    docker-compose down
echo Restart:          docker-compose restart strapi
echo Fresh start:      docker-compose down -v ^&^& docker-compose up --build
echo.
echo Run benchmarks:   node deployments\benchmark.js
echo Apply indexes:    docker-compose exec postgres psql -U strapi_user -d acumen_blog -f /docker-entrypoint-initdb.d/optimize.sql
echo.
echo Documentation:    documentation\SETUP.md
echo ==================================================================
echo.

pause
