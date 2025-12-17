# Strapi v5 Production Deployment - Complete Setup Guide

## Table of Contents
1. [Quick Start (Development)](#quick-start-development)
2. [Prerequisites](#prerequisites)
3. [Environment Setup](#environment-setup)
4. [First-Time Setup](#first-time-setup)
5. [Running the Application](#running-the-application)
6. [Admin Panel Setup](#admin-panel-setup)
7. [API Access](#api-access)
8. [Frontend Integration](#frontend-integration)
9. [Production Deployment](#production-deployment)
10. [Troubleshooting](#troubleshooting)

---

## Quick Start (Development)

```bash
# 1. Navigate to the project directory
cd c:\Users\HP\Downloads\Acumen-blog-main - Copy\acumen-strapi

# 2. Generate secrets (required first time only)
cd deployments
generate-secrets.bat  # Windows
# Copy the output to backend/.env (replace placeholder values)

# 3. Start all services with Docker
cd ..
docker-compose up --build

# 4. Access admin panel
# Open http://localhost:1337/admin
# Create your first admin user

# 5. Configure API permissions (see Admin Panel Setup section)
```

**That's it! Your Strapi backend is now running and ready to integrate with the frontend.**

---

## Prerequisites

### Required Software
- **Node.js**: v18.x or v20.x LTS ([Download](https://nodejs.org/))
- **Docker** & **Docker Compose** ([Download](https://www.docker.com/products/docker-desktop/))
- **Git**: For version control
- **Code Editor**: VSCode recommended

### System Requirements
- **RAM**: Minimum 4GB, Recommended 8GB+
- **Disk Space**: Minimum 2GB free
- **OS**: Windows 10/11, Ubuntu 22.04+, macOS 12+

---

## Environment Setup

### 1. Generate Secure Secret Keys

**On Windows:**
```bash
cd deployments
generate-secrets.bat
```

**On Linux/Mac:**
```bash
cd deployments
chmod +x generate-secrets.sh
./generate-secrets.sh
```

### 2. Configure Environment Variables

Copy the generated secrets and update `backend/.env`:

```env
# Security Keys (REPLACE WITH GENERATED VALUES!)
APP_KEYS=<generated-key-1>,<generated-key-2>,<generated-key-3>,<generated-key-4>
API_TOKEN_SALT=<generated-salt>
ADMIN_JWT_SECRET=<generated-secret>
TRANSFER_TOKEN_SALT=<generated-salt>
JWT_SECRET=<generated-secret>

# Database Configuration
DATABASE_PASSWORD=<generated-password>

# Webhook Secret (for frontend cache invalidation)
STRAPI_WEBHOOK_SECRET=<generated-webhook-secret>
```

> [!WARNING]
> **Never commit .env files to version control!**  
> The `.env` file contains sensitive credentials and should remain local only.

---

## First-Time Setup

### Step 1: Start Docker Services

```bash
# From the acumen-strapi directory
docker-compose up --build
```

This will:
- Start PostgreSQL with required extensions
- Create the Strapi container
- Initialize the database
- Start Redis for caching

**Wait for the output:**
```
acumen-strapi  | [INFO] ⏳ Starting Strapi...
acumen-strapi  | [INFO] ✨ Server running on http://0.0.0.0:1337
```

### Step 2: Create Admin User

1. Open browser: **http://localhost:1337/admin**
2. Fill in admin user details:
   - **First name**: Your name
   - **Last name**: Your surname
   - **Email**: admin@example.com (use real email)
   - **Password**: Strong password (16+ characters)
3. Click **"Let's start"**

---

## Admin Panel Setup

### Configure API Permissions

By default, all content is private. You need to enable public read access:

1. Go to **Settings** → **Users & Permissions** → **Roles**
2. Click **Public** role
3. Expand each content type and check:
   - **Article**: find, findOne
   - **Author**: find, findOne
   - **Category**: find, findOne
   - **Tag**: find, findOne
   - **Site-Setting**: find
4. Click **Save**

### Generate API Token

For frontend integration, create an API token:

1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. **Name**: "Frontend Production"
4. **Token duration**: Unlimited
5. **Token type**: Read-only
6. Click **Save** and copy the token

> [!IMPORTANT]
> **Save this token immediately!** It's only shown once.  
> Add it to your frontend `.env.local` as `STRAPI_API_TOKEN`

---

## Running the Application

### Development Mode

```bash
# Start all services
docker-compose up

# View logs
docker-compose logs -f strapi

# Stop services
docker-compose down

# Stop and remove volumes (fresh start)
docker-compose down -v
```

### Without Docker (Local Development)

```bash
cd backend
npm install
npm run develop  # Development with hot reload
```

---

## API Access

### Test API Endpoints

```bash
# Get all articles
curl http://localhost:1337/api/articles?populate=*

# Get single article by slug
curl http://localhost:1337/api/articles?filters[slug][$eq]=sample-article&populate=deep

# Get all categories
curl http://localhost:1337/api/categories

# Get site settings
curl http://localhost:1337/api/site-setting?populate=*
```

### GraphQL Playground

Access GraphQL at: **http://localhost:1337/graphql**

Example query:
```graphql
query {
  articles {
    data {
      id
      attributes {
        title
        slug
        excerpt
        coverImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
```

---

## Frontend Integration

### Update Frontend Environment Variables

In `Acumen-blog-main/.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-generated-token-here
STRAPI_WEBHOOK_SECRET=your-webhook-secret-here
```

### Start Frontend

```bash
cd c:\Users\HP\Downloads\Acumen-blog-main - Copy\Acumen-blog-main
npm install
npm run dev
```

Visit **http://localhost:3000** to see your blog with Strapi content!

### Configure Webhooks

To enable automatic cache invalidation:

1. In Strapi Admin: **Settings** → **Webhooks**
2. Click **Add new webhook**
3. **Name**: "Frontend Cache Invalidation"  
4. **URL**: `http://host.docker.internal:3000/api/webhook/strapi`  
   *(Use your frontend domain in production)*
5. **Events**: Select all `entry.*` events
6. **Headers**: Add custom header:
   - **Key**: `strapi-signature`
   - **Value**: Your `STRAPI_WEBHOOK_SECRET`
7. **Save**

---

## Production Deployment

> [!NOTE]
> See [DEPLOYMENT.md](deployment/DEPLOYMENT.md) for detailed production deployment guide.

### Quick Production Checklist

- [ ] Generate production secrets (never reuse development keys!)
- [ ] Use PostgreSQL with SSL enabled
- [ ] Set `NODE_ENV=production`
- [ ] Configure S3 or Cloudinary for media uploads
- [ ] Setup Nginx reverse proxy with SSL/TLS
- [ ] Enable rate limiting and security headers
- [ ] Configure automated backups
- [ ] Setup monitoring (CPU, memory, disk, database)
- [ ] Test disaster recovery procedures

---

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs strapi

# Common fix: Remove volumes and rebuild
docker-compose down -v
docker-compose up --build
```

### Database connection errors

- Verify PostgreSQL is running: `docker-compose ps`
- Check credentials in `backend/.env`
- Ensure `DATABASE_HOST=postgres` (not localhost)

### Port already in use

```bash
# Find process using port 1337
netstat -ano | findstr :1337  # Windows
lsof -i :1337                 # Linux/Mac

# Kill the process or change port in .env
```

### Admin panel not accessible

- Check Strapi logs: `docker-compose logs strapi`
- Verify container is healthy: `docker ps`
- Clear browser cache
- Try incognito/private window

### API returns 403 Forbidden

- Check **Settings** → **Users & Permissions** → **Public** role
- Ensure required permissions are checked
- Verify API token if using authenticated requests

### Content not appearing in frontend

1. Verify content is **Published** in Strapi admin
2. Check API response in browser DevTools Network tab
3. Verify `NEXT_PUBLIC_STRAPI_URL` in frontend `.env.local`
4. Check populate parameters in API queries

---

## Next Steps

1. **Create Content**: Add articles, authors, and categories in admin panel
2. **Customize**: Modify content types to match your needs
3. **Deploy**: Follow production deployment guide
4. **Monitor**: Setup logging and monitoring solutions

For more help, see:
- [API Documentation](./API.md)
- [Content Management Guide](./CONTENT_MANAGEMENT.md)
- [Deployment Guide](./DEPLOYMENT.md)
