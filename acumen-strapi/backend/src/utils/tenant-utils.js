/**
 * Tenant Utilities Module
 * =============================================================================
 * Shared utilities for multi-tenant operations across all content types.
 * Provides centralized tenant ID extraction and validation functions.
 */

'use strict';

/**
 * Get the current tenant ID from request context or environment.
 * Priority: Request context > Environment variable > 'default'
 * 
 * @param {Object} strapi - Strapi instance
 * @returns {string} Tenant ID
 */
const getTenantId = (strapi) => {
    const ctx = strapi.requestContext.get();
    return ctx?.state?.tenantId || process.env.TENANT_ID || 'default';
};

/**
 * Validate that a record belongs to the current tenant.
 * Used before update/delete operations to prevent cross-tenant access.
 * 
 * @param {Object} strapi - Strapi instance
 * @param {string} uid - Content type UID (e.g., 'api::article.article')
 * @param {number|string} id - Record ID to validate
 * @param {string} tenantId - Current tenant ID
 * @throws {Error} If record doesn't exist or belongs to different tenant
 */
const validateTenantAccess = async (strapi, uid, id, tenantId) => {
    if (!id || !tenantId) return;

    const existing = await strapi.db.query(uid).findOne({
        where: { id },
        select: ['id', 'tenant_id'],
    });

    if (!existing) {
        throw new Error(`Record not found: ${uid}#${id}`);
    }

    if (existing.tenant_id && existing.tenant_id !== tenantId) {
        strapi.log.warn(
            `[Tenant] Access denied: tenant '${tenantId}' tried to access record owned by '${existing.tenant_id}'`
        );
        throw new Error('Access denied: Record belongs to different tenant');
    }
};

/**
 * Inject tenant_id filter into query params.
 * Used in beforeFind hooks to ensure tenant isolation.
 * 
 * @param {Object} event - Lifecycle event object
 * @param {string} tenantId - Current tenant ID
 */
const injectTenantFilter = (event, tenantId) => {
    if (!tenantId) return;

    event.params.filters = {
        ...event.params.filters,
        tenant_id: tenantId,
    };
};

/**
 * Create lifecycle hooks for a content type.
 * Returns a complete set of hooks for tenant isolation.
 * 
 * @param {string} uid - Content type UID (e.g., 'api::article.article')
 * @returns {Object} Lifecycle hooks object
 */
const createTenantLifecycles = (uid) => ({
    // Inject tenant_id before creating new records
    async beforeCreate(event) {
        const tenantId = getTenantId(strapi);
        if (!tenantId || tenantId === 'default') {
            strapi.log.warn(`[Tenant] Creating record without tenant_id for ${uid}`);
        }
        event.params.data.tenant_id = tenantId;
    },

    // Filter by tenant_id before finding single record
    async beforeFindOne(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },

    // Filter by tenant_id before finding multiple records
    async beforeFindMany(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },

    // Validate tenant ownership before updating
    async beforeUpdate(event) {
        const tenantId = getTenantId(strapi);
        const id = event.params.where?.id;
        await validateTenantAccess(strapi, uid, id, tenantId);
    },

    // Validate tenant ownership before deleting
    async beforeDelete(event) {
        const tenantId = getTenantId(strapi);
        const id = event.params.where?.id;
        await validateTenantAccess(strapi, uid, id, tenantId);
    },

    // Count queries should also be filtered
    async beforeCount(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },
});

module.exports = {
    getTenantId,
    validateTenantAccess,
    injectTenantFilter,
    createTenantLifecycles,
};
