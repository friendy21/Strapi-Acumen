const promClient = require('prom-client');

const registry = new promClient.Registry();
let metricsInitialized = false;

const initializeMetrics = () => {
    if (metricsInitialized) {
        return;
    }

    promClient.collectDefaultMetrics({ register: registry });
    metricsInitialized = true;
};

module.exports = (config) => {
    const path = config.path || '/metrics';
    const apiKey = config.apiKey;

    return async (ctx, next) => {
        if (ctx.request.path !== path) {
            return next();
        }

        if (ctx.request.method !== 'GET') {
            ctx.status = 405;
            ctx.body = 'Method Not Allowed';
            return;
        }

        if (apiKey) {
            const authorization = ctx.get('authorization');
            const bearerToken = authorization?.startsWith('Bearer ')
                ? authorization.slice('Bearer '.length)
                : null;
            const requestKey = ctx.get('x-api-key') || bearerToken;

            if (requestKey !== apiKey) {
                ctx.status = 401;
                ctx.body = 'Unauthorized';
                return;
            }
        }

        initializeMetrics();
        ctx.set('Content-Type', registry.contentType);
        ctx.body = await registry.metrics();
    };
};
