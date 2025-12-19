module.exports = ({ env }) => ({
    connection: {
        client: env('DATABASE_CLIENT', 'mysql'),
        connection: {
            host: env('DATABASE_HOST', '10.104.16.10'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'acumen_blog'),
            user: env('DATABASE_USERNAME', 'strapi_user'),
            password: env('DATABASE_PASSWORD'),
            ssl: env.bool('DATABASE_SSL', false) ? {
                rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
            } : false,
        },
        pool: {
            min: env.int('DATABASE_POOL_MIN', 2),
            max: env.int('DATABASE_POOL_MAX', 10),
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
});
