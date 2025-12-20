/**
 * Tenant Context Middleware
 * =============================================================================
 * Automatically injects tenant_id into request context for multi-tenant isolation.
 * 
 * Priority order for tenant ID:
 * 1. X-Tenant-ID header (for API calls)
 * 2. tenant_id query parameter (for testing)
 * 3. TENANT_ID environment variable (for deployment)
 * 4. 'default' fallback
 */

module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        // Get tenant ID from priority sources
        const tenantId =
            ctx.request.header['x-tenant-id'] ||    // Header (highest priority)
            ctx.query.tenant_id ||                   // Query param (for testing)
            process.env.TENANT_ID ||                 // Environment (for deployment)
            'default';                               // Fallback

        // Validate tenant ID format (alphanumeric, underscores, hyphens only)
        // Prevents SQL injection and ensures consistent tenant IDs
        if (!/^[a-zA-Z0-9_-]+$/.test(tenantId)) {
            ctx.throw(400, 'Invalid tenant ID format. Only alphanumeric characters, underscores, and hyphens are allowed.');
        }

        // Store in request context for lifecycle hooks and services
        ctx.state.tenantId = tenantId;

        // Debug logging in development
        if (process.env.NODE_ENV === 'development') {
            strapi.log.debug(`[Tenant Middleware] Request for tenant: ${tenantId}`);
        }

        await next();
    };
};
