# Quick Deployment Checklist

Use this checklist to deploy Strapi to DigitalOcean.

## Pre-Deployment (15 minutes)

### DockerHub Setup
- [ ] Create account: https://hub.docker.com
- [ ] Create repository: `acumen-strapi`
- [ ] Generate access token (Account → Security)
- [ ] Save token

### DigitalOcean Setup
- [ ] Create Ubuntu 22.04 droplet ($6/month)
- [ ] Add your SSH key
- [ ] Save droplet IP: `_______________`

### GitHub Secrets
Go to: **Settings → Secrets and variables → Actions**

Add these secrets:
- [ ] `DOCKERHUB_USERNAME` = your DockerHub username
- [ ] `DOCKERHUB_TOKEN` = token from DockerHub
- [ ] `DIGITALOCEAN_ACCESS_TOKEN` = from DO → API → Tokens
- [ ] `DROPLET_IP` = your droplet IP
- [ ] `SSH_PRIVATE_KEY` = generate with `ssh-keygen`

---

## Droplet Configuration (10 minutes)

SSH into droplet:
```bash
ssh root@YOUR_DROPLET_IP
```

Run setup:
```bash
curl -fsSL YOUR_GITHUB_RAW_URL/deployments/setup-digitalocean.sh | bash
```

Generate secrets (run 9 times):
```bash
openssl rand -base64 32
```

Edit environment:
```bash
nano /opt/acumen-strapi/.env
```

Update these values:
```
DOCKERHUB_USERNAME=_______________
DATABASE_PASSWORD=_______________
APP_KEYS=_______________,_______________,_______________,_______________
API_TOKEN_SALT=_______________
ADMIN_JWT_SECRET=_______________
TRANSFER_TOKEN_SALT=_______________
JWT_SECRET=_______________
STRAPI_URL=http://YOUR_IP:1337
FRONTEND_URL=https://yourdomain.com
```

Save: `Ctrl+X`, `Y`, `Enter`

---

## Deploy (2 minutes)

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

Watch in: **GitHub → Actions** tab

Wait for ✅ green checkmark (~5-10 minutes)

---

## Verify (5 minutes)

### Check Deployment
```bash
ssh root@YOUR_DROPLET_IP
cd /opt/acumen-strapi
docker-compose ps  # All should be "Up"
```

### Access Admin
1. Open: `http://YOUR_IP:1337/admin`
2. Create admin user
3. Save credentials

### Configure Permissions
1. Settings → Users & Permissions → Public
2. Enable for each content type:
   - [x] find
   - [x] findOne
3. Save

### Generate API Token
1. Settings → API Tokens
2. Create new token
3. Name: "Frontend"
4. Type: Read-only
5. Duration: Unlimited
6. Copy token

### Update Frontend
```env
# Acumen-blog-main/.env.local
NEXT_PUBLIC_STRAPI_URL=http://YOUR_IP:1337
STRAPI_API_TOKEN=paste-token-here
```

---

## SSL Setup (Optional, 15 minutes)

### Point Domain
In domain registrar:
- A record: `api.yourdomain.com` → `YOUR_IP`

### Install Certificate
```bash
ssh root@YOUR_DROPLET_IP

# Install Certbot
apt-get install -y certbot python3-certbot-nginx

# Setup Nginx
cp /path/to/nginx/strapi.conf /etc/nginx/sites-available/strapi
ln -s /etc/nginx/sites-available/strapi /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# Get SSL
certbot --nginx -d api.yourdomain.com
```

### Update Config
```bash
nano /opt/acumen-strapi/.env
# Change: STRAPI_URL=https://api.yourdomain.com
docker-compose restart strapi
```

---

## Common Commands

```bash
# View logs
ssh root@YOUR_IP
docker-compose logs -f strapi

# Restart
docker-compose restart strapi

# Check status
docker-compose ps

# Full restart
docker-compose down && docker-compose up -d
```

---

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs
- Verify all secrets are correct
- Ensure SSH key is added to droplet

### Can't access admin
- Check firewall: `ufw status`
- Check logs: `docker-compose logs strapi`
- Restart: `docker-compose restart strapi`

### Database errors
- Check PostgreSQL: `docker-compose exec postgres psql -U strapi_user -d acumen_blog`
- Check init.sql ran: `docker-compose logs postgres | grep "Strapi"`

---

## ✅ Done!

Once complete:
- ✅ Strapi running on DigitalOcean
- ✅ Auto-deploys on every `git push`
- ✅ Admin panel accessible
- ✅ API endpoints working
- ✅ Frontend can connect

**Total time:** 30-45 minutes  
**Monthly cost:** $6-7
