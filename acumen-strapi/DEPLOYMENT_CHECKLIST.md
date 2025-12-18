# Strapi Deployment Guide

## Hub-and-Spoke Database Architecture

Deploy Strapi to DigitalOcean with a dedicated MariaDB database server.

```
┌─────────────────────────┐     ┌─────────────────────────┐
│   App Server            │     │   Database Hub          │
│   167.172.66.204        │────▶│   134.209.107.38        │
│   - Strapi CMS          │3306 │   - MariaDB             │
│   - Redis               │     │   - UFW Whitelist       │
└─────────────────────────┘     └─────────────────────────┘
```

---

## ⚡ Quick Setup

### Step 1: Configure Database Server (134.209.107.38)

SSH into the database server and run the setup:

```bash
ssh root@134.209.107.38

# Download and run setup script
curl -sSL https://raw.githubusercontent.com/friendy21/Strapi-Acumen/main/acumen-strapi/deployments/setup-mariadb.sh | bash
```

Or manually:

```bash
# Install MariaDB
apt update && apt install -y mariadb-server mariadb-client
mysql_secure_installation

# Configure for remote connections
sed -i 's/bind-address.*=.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf
systemctl restart mariadb

# Setup firewall (ONLY allow app server)
ufw allow 22/tcp
ufw allow from 167.172.66.204 to any port 3306 proto tcp
ufw --force enable

# Create database and user
mysql -u root -p << 'SQL'
CREATE DATABASE acumen_blog CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'strapi_user'@'167.172.66.204' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
GRANT ALL PRIVILEGES ON acumen_blog.* TO 'strapi_user'@'167.172.66.204';
FLUSH PRIVILEGES;
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

## � Troubleshooting

### "Cannot reach MariaDB"

On DB server, verify:
```bash
# Check MariaDB running
systemctl status mariadb

# Check bind address
grep bind-address /etc/mysql/mariadb.conf.d/50-server.cnf

# Check firewall
ufw status
```

### "Access denied for user"

On DB server:
```bash
mysql -u root -p -e "SELECT User, Host FROM mysql.user WHERE User='strapi_user';"
# Should show: strapi_user | 167.172.66.204
```

### View Logs

```bash
ssh root@167.172.66.204
cd /opt/acumen-strapi
docker compose logs -f strapi
```

---

## � Architecture Benefits

| Feature | Benefit |
|---------|---------|
| Separate DB Server | Better security isolation |
| UFW Whitelist | Only app server can access DB |
| Scalable | Add more app servers easily |
| Centralized Backup | Single DB to backup |

---

## ✅ Done!

Your Strapi is now running with:
- ✅ Dedicated MariaDB server
- ✅ Strict firewall whitelist
- ✅ Auto-deploy on git push
- ✅ Database connectivity check
