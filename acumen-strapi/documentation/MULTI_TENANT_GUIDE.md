# Multi-Tenant Hub-and-Spoke Architecture Guide

A comprehensive guide for deploying and managing the multi-tenant Strapi CMS.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                  DATABASE HUB (134.209.107.38)              │
│   ┌─────────────────────────────────────────────────────┐   │
│   │           MariaDB (Shared Database)                 │   │
│   │   ┌─────────┬─────────┬─────────┬─────────┐        │   │
│   │   │articles │ authors │ tags    │  ...    │        │   │
│   │   │tenant_id│tenant_id│tenant_id│tenant_id│        │   │
│   │   └─────────┴─────────┴─────────┴─────────┘        │   │
│   └─────────────────────────────────────────────────────┘   │
│                          │  UFW: IP Whitelist               │
└──────────────────────────┼──────────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
   ┌───────────┐     ┌───────────┐     ┌───────────┐
   │ TENANT A  │     │ TENANT B  │     │ TENANT C  │
   │ Strapi    │     │ Strapi    │     │ Strapi    │
   │ TENANT_ID │     │ TENANT_ID │     │ TENANT_ID │
   │=tenant_a  │     │=tenant_b  │     │=tenant_c  │
   └───────────┘     └───────────┘     └───────────┘
```

## How Tenant Isolation Works

1. **TENANT_ID Environment Variable** - Each app server has a unique `TENANT_ID`
2. **Tenant Middleware** - Extracts tenant context from request or environment
3. **Lifecycle Hooks** - Automatically filter all queries by `tenant_id`

### Data Flow

```
Request → Middleware (sets ctx.state.tenantId)
                ↓
        Lifecycle Hook (beforeFind)
                ↓
        Injects: WHERE tenant_id = 'current_tenant'
                ↓
        Database Query (filtered results)
```

---

## Adding a New Tenant

### Step 1: On Database Hub (134.209.107.38)

```bash
ssh root@134.209.107.38
cd /root
./add-tenant.sh <NEW_APP_IP> <TENANT_NAME>

# Example:
./add-tenant.sh 192.168.1.50 tenant_client_abc
```

### Step 2: Add GitHub Secrets

| Secret | Value |
|--------|-------|
| `TENANT_ID` | `tenant_client_abc` |
| `DATABASE_HOST` | `134.209.107.38` |
| `STRAPI_DATABASE_PASSWORD` | (from script output) |

### Step 3: Deploy

Push to trigger CI/CD or manually run:

```bash
ssh root@<NEW_APP_IP>
cd /opt/acumen-strapi
docker compose up -d
```

---

## Security Layers

| Layer | Protection |
|-------|------------|
| **UFW Firewall** | Only whitelisted IPs can reach port 3306 |
| **MySQL User@IP** | User only works from specific IP |
| **Lifecycle Hooks** | All queries filtered by tenant_id |
| **private: true** | tenant_id never exposed in API responses |

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `TENANT_ID` | Unique tenant identifier | `tenant_acumen_main` |
| `DATABASE_HOST` | Database Hub IP | `134.209.107.38` |
| `DATABASE_PASSWORD` | MySQL password | (secret) |

---

## Troubleshooting

### Cannot connect to database

```bash
# Test from app server
nc -zv 134.209.107.38 3306

# On DB Hub - check firewall
ufw status | grep <APP_IP>

# On DB Hub - check user
mysql -e "SELECT User, Host FROM mysql.user WHERE User='strapi_user';"
```

### Data from wrong tenant appearing

1. Check `TENANT_ID` in `.env` on app server
2. Verify lifecycle hooks are loaded (check Strapi logs)
3. Check `tenant_id` column values in database

### Lifecycle hooks not triggering

Verify files exist:
```
src/api/article/content-types/article/lifecycles.js
src/api/author/content-types/author/lifecycles.js
src/api/category/content-types/category/lifecycles.js
src/api/tag/content-types/tag/lifecycles.js
src/api/site-setting/content-types/site-setting/lifecycles.js
```

---

## Files Modified

| File | Purpose |
|------|---------|
| `src/utils/tenant-utils.js` | Shared tenant utilities |
| `src/api/*/lifecycles.js` | Tenant filtering hooks |
| `.env.example` | TENANT_ID variable |
| `docker-compose.prod.yml` | TENANT_ID in Docker |
| `deploy-strapi.yml` | TENANT_ID in CI/CD |
| `deployments/add-tenant.sh` | New tenant provisioning |
