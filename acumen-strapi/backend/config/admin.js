const ensureSecret = (name, value) => {
    if (!value || value === 'toBeModified') {
        throw new Error(`${name} must be set to a non-default value.`);
    }

    return value;
};

module.exports = ({ env }) => ({
    auth: {
        secret: ensureSecret('ADMIN_JWT_SECRET', env('ADMIN_JWT_SECRET')),
    },
    apiToken: {
        salt: ensureSecret('API_TOKEN_SALT', env('API_TOKEN_SALT')),
    },
    transfer: {
        token: {
            salt: ensureSecret('TRANSFER_TOKEN_SALT', env('TRANSFER_TOKEN_SALT')),
        },
    },
    flags: {
        nps: env.bool('FLAG_NPS', true),
        promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
});
