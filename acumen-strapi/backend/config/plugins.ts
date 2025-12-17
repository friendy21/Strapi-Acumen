export default ({ env }) => ({
    // GraphQL Plugin
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: env.bool('GRAPHQL_PLAYGROUND', false),
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: env.bool('GRAPHQL_INTROSPECTION', false),
            },
        },
    },

    // Upload Plugin
    upload: {
        config: {
            sizeLimit: 10 * 1024 * 1024, // 10MB
            breakpoints: {
                xlarge: 1920,
                large: 1280,
                medium: 1024,
                small: 768,
                xsmall: 640,
            },
        },
    },

    // Users & Permissions Plugin
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
        },
    },
});
