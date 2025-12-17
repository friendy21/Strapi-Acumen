# Acumen Blog - Strapi v5 Backend

Production-ready **Strapi v5** headless CMS backend for the Acumen Blog platform.

## ✨ Features

- 🚀 Strapi v5 with TypeScript
- 🐘 PostgreSQL 16 database
- 📦 Redis caching
- 🐳 Docker ready
- 🔐 Production-grade security

## 🚀 Quick Start

**Windows:**
```bash
quick-start.bat
```

**Linux/Mac:**
```bash
chmod +x quick-start.sh && ./quick-start.sh
```

**Manual Start:**
```bash
# 1. Generate secrets
cd deployments && generate-secrets.bat

# 2. Update backend/.env with generated secrets

# 3. Start services
cd .. && docker-compose up --build

# 4. Open http://localhost:1337/admin and create admin user

# 5. Configure permissions: Settings → Users & Permissions → Public
#    Enable: find, findOne for all content types
```

## 📚 Documentation

- [SETUP.md](./documentation/SETUP.md) - Complete setup guide

## 🔌 API Endpoints

```bash
GET /api/articles?populate=*
GET /api/articles?filters[slug][$eq]=my-article
GET /api/categories
GET /api/site-setting?populate=*
```

GraphQL: **http://localhost:1337/graphql**

## 🤝 Frontend Integration

Update frontend `.env.local`:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=<your-token>
STRAPI_WEBHOOK_SECRET=<your-secret>
```

---

**Need help?** See [SETUP.md](./documentation/SETUP.md)
