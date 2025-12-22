# Strapi Deployment Guide

## Hub-and-Spoke Database Architecture

Deploy Strapi to DigitalOcean with a dedicated PostgreSQL database server.

```
┌─────────────────────────┐     ┌─────────────────────────┐
│   App Server            │     │   Database Hub          │
│   167.172.66.204        │────▶│   134.209.107.38        │
│   - Strapi CMS          │5432 │   - PostgreSQL          │
│   - Redis               │     │   - UFW Whitelist       │
└─────────────────────────┘     └─────────────────────────┘
```

---

## ⚡ Quick Setup

### Step 1: Configure Database Server (134.209.107.38)

SSH into the database server and run the setup:

```bash
ssh root@134.209.107.38
```

Then configure PostgreSQL:

```bash
# Install PostgreSQL
apt update && apt install -y postgresql postgresql-contrib

# Configure for remote connections
sed -i "s/^#listen_addresses =.*/listen_addresses = '*'/" /etc/postgresql/*/main/postgresql.conf
echo "host    acumen_blog    strapi_user    167.172.66.204/32    scram-sha-256" >> /etc/postgresql/*/main/pg_hba.conf
systemctl restart postgresql

# Setup firewall (ONLY allow app server)
ufw allow 22/tcp
ufw allow from 167.172.66.204 to any port 5432 proto tcp
ufw --force enable

# Create database and user
sudo -u postgres psql << 'SQL'
CREATE USER strapi_user WITH PASSWORD 'YOUR_PASSWORD_HERE';
CREATE DATABASE acumen_blog OWNER strapi_user;
GRANT ALL PRIVILEGES ON DATABASE acumen_blog TO strapi_user;
SQL
```

> ⚠️ Replace `YOUR_PASSWORD_HERE` with a secure password: `openssl rand -base64 32`

---

### Step 2: Add GitHub Secrets

Go to **GitHub → Settings → Secrets and variables → Actions**

| Secret | Value |
|--------|-------|
| `DROPLET_IP` | `167.172.66.204` |
| `DROPLET_SSH_KEY` | Your SSH private key |
| `DATABASE_HOST` | `134.209.107.38` |
| `STRAPI_DATABASE_PASSWORD` | Password from Step 1 |
| `STRAPI_APP_KEYS` | 4 comma-separated keys |
| `STRAPI_API_TOKEN_SALT` | Random base64 |
| `STRAPI_ADMIN_JWT_SECRET` | Random base64 |
| `METRICS_API_KEY` | Secret for Prometheus `/metrics` endpoint |
| `STRAPI_TRANSFER_TOKEN_SALT` | Random base64 |
| `STRAPI_JWT_SECRET` | Random base64 |

Generate keys with: `openssl rand -base64 32`

---

### Step 3: Deploy

```bash
git add .
git commit -m "Deploy with Hub-and-Spoke architecture"
git push origin main
```

---

## 🎉 Access Your Strapi

After deployment:
- **Admin:** http://167.172.66.204:1337/admin
- **API:** http://167.172.66.204:1337/api

---

## 📊 Metrics Endpoint

The Prometheus metrics exporter is available at:

- **Metrics:** http://167.172.66.204:1337/metrics

Secure the endpoint by setting `METRICS_API_KEY` and sending it as either:

- `Authorization: Bearer <METRICS_API_KEY>`
- `X-API-Key: <METRICS_API_KEY>`

Ensure your firewall/ingress rules only allow your Prometheus server to reach `/metrics`.

---

## � Troubleshooting

### "Cannot reach PostgreSQL"

On DB server, verify:
```bash
# Check PostgreSQL running
systemctl status postgresql

# Check listen address
grep listen_addresses /etc/postgresql/*/main/postgresql.conf

# Check firewall
ufw status
```

### "Access denied for user"

On DB server:
```bash
sudo -u postgres psql -c "SELECT usename FROM pg_user WHERE usename = 'strapi_user';"
# Should show: strapi_user
```

### View Logs

```bash
ssh root@167.172.66.204
cd /opt/acumen-strapi
docker compose logs -f strapi
```

---

## ✅ Done!

Your Strapi is now running with:
- ✅ Dedicated PostgreSQL server
- ✅ Strict firewall whitelist
- ✅ Auto-deploy on git push
- ✅ Database connectivity check
