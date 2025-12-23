const DEFAULT_APP_KEYS = [
    'toBeModified1',
    'toBeModified2',
    'toBeModified3',
    'toBeModified4',
];

const ensureAppKeys = (appKeys) => {
    if (!Array.isArray(appKeys) || appKeys.length < 4) {
        throw new Error('APP_KEYS must be set and include at least 4 values.');
    }

    if (appKeys.join(',') === DEFAULT_APP_KEYS.join(',')) {
        throw new Error('APP_KEYS must be set to non-default values.');
    }

    return appKeys;
};

module.exports = ({ env }) => {
    const appKeys = ensureAppKeys(env.array('APP_KEYS', DEFAULT_APP_KEYS));

    return {
        host: env('HOST', '0.0.0.0'),
        port: env.int('PORT', 1337),
        app: {
            keys: appKeys,
        },
        webhooks: {
            populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
        },
        url: env('STRAPI_URL', 'http://localhost:1337'),
    };
};
