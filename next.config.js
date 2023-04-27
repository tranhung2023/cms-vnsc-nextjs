const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        VNSC_ADMIN_URL: process.env.VNSC_ADMIN_URL,
        VNSC_ADMIN_SERVICE: process.env.VNSC_ADMIN_SERVICE,
    },
};

module.exports = nextConfig;
