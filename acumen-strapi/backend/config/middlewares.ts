import type { Schema, Struct } from '@strapi/strapi';

export default [
    'strapi::logger',
    'strapi::errors',
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
            origin: [
                'http://localhost:3000',
                'http://localhost:1337',
                process.env.FRONTEND_URL || 'http://localhost:3000',
            ],
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
                maxFileSize: 10 * 1024 * 1024, // 10MB
            },
        },
    },
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
] satisfies Struct.MiddlewaresConfig;
