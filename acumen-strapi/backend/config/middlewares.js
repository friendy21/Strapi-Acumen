const isProduction = process.env.NODE_ENV === 'production';
const corsOrigins = [
    process.env.FRONTEND_URL,
    ...(isProduction ? [] : ['http://localhost:3000', 'http://localhost:1337']),
].filter(Boolean);

module.exports = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'global::tenant-context',
        config: {},
    },
    {
        name: 'global::metrics',
        config: {
            path: '/metrics',
            apiKey: process.env.METRICS_API_KEY || null,
        },
    },
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'https:'],
                    'media-src': ["'self'", 'data:', 'blob:', 'https:'],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    {
        name: 'strapi::cors',
        config: {
            enabled: true,
            headers: '*',
            origin: corsOrigins,
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    {
        name: 'strapi::body',
        config: {
            formLimit: '256mb',
            jsonLimit: '256mb',
            textLimit: '256mb',
            formidable: {
                maxFileSize: 10 * 1024 * 1024,
            },
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
