// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ciupload.tgs.aero',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig;
