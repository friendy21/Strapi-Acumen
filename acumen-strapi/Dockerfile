# Multi-stage Dockerfile for Strapi v5

# Stage 1: Dependencies

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /opt/app

# Copy package files from backend directory
COPY backend/package*.json ./

# Install dependencies
RUN npm install --omit=dev --ignore-scripts


# Stage 2: Builder

FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /opt/app

# Copy package files from backend and install ALL dependencies (for build)
COPY backend/package*.json ./
RUN npm install --ignore-scripts

# Copy backend application code
COPY backend/ ./

# Create public directory if it doesn't exist
RUN mkdir -p public

# Build Strapi admin
ENV NODE_ENV=production
RUN npm run build


# Stage 3: Production Runner

FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat mariadb-client

# Create non-root user for security
RUN addgroup --system --gid 1001 strapi
RUN adduser --system --uid 1001 strapi

WORKDIR /opt/app

# Set environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

# Copy built application
COPY --from=builder --chown=strapi:strapi /opt/app/node_modules ./node_modules
COPY --from=builder --chown=strapi:strapi /opt/app/dist ./dist
COPY --from=builder --chown=strapi:strapi /opt/app/public ./public
COPY --from=builder --chown=strapi:strapi /opt/app/package.json ./
COPY --from=builder --chown=strapi:strapi /opt/app/config ./config
COPY --from=builder --chown=strapi:strapi /opt/app/src ./src

# Create directories for uploads and cache
RUN mkdir -p public/uploads .cache .tmp
RUN chown -R strapi:strapi public .cache .tmp

# Switch to non-root user
USER strapi

# Expose port
EXPOSE 1337

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:1337/_health || exit 1

# Start Strapi
CMD ["npm", "run", "start"]
