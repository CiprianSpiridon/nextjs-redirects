/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/page-1',
                destination: '/page-1-redirected',
                permanent: true,
            },
            {
                source: '/',
                destination: '/page-redirected',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
