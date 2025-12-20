/**
 * Tag Lifecycle Hooks
 * =============================================================================
 * Handles tenant isolation for all Tag CRUD operations.
 * Automatically injects tenant_id on create and filters by tenant_id on read.
 */

'use strict';

const { getTenantId, validateTenantAccess, injectTenantFilter } = require('../../../../utils/tenant-utils');

const UID = 'api::tag.tag';

module.exports = {
    // Inject tenant_id before creating new tags
    async beforeCreate(event) {
        const tenantId = getTenantId(strapi);
        if (!tenantId || tenantId === 'default') {
            strapi.log.warn(`[Tenant] Creating tag without explicit tenant_id`);
        }
        event.params.data.tenant_id = tenantId;
    },

    // Filter by tenant_id before finding single tag
    async beforeFindOne(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },

    // Filter by tenant_id before finding multiple tags
    async beforeFindMany(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },

    // Validate tenant ownership before updating
    async beforeUpdate(event) {
        const tenantId = getTenantId(strapi);
        const id = event.params.where?.id;
        await validateTenantAccess(strapi, UID, id, tenantId);
    },

    // Validate tenant ownership before deleting
    async beforeDelete(event) {
        const tenantId = getTenantId(strapi);
        const id = event.params.where?.id;
        await validateTenantAccess(strapi, UID, id, tenantId);
    },

    // Count queries should also be filtered
    async beforeCount(event) {
        const tenantId = getTenantId(strapi);
        injectTenantFilter(event, tenantId);
    },
};
