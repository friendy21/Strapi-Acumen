# Multi-stage Dockerfile for Strapi v5

# Stage 1: Dependencies

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /opt/app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts


# Stage 2: Builder

FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /opt/app

# Copy dependencies from deps stage
COPY --from=deps /opt/app/node_modules ./node_modules
COPY . .

# Build Strapi admin
ENV NODE_ENV=production
RUN npm run build


# Stage 3: Production Runner

FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat

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
