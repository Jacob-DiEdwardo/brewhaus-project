const SERVER_PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 8080;

const SERVER_CONFIGS = {
    PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: SERVER_PORT,
};

module.exports = SERVER_CONFIGS;