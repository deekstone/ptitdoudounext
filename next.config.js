/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["ptitdoudouimagebucket.s3.amazonaws.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        enable: false,
    },
};

module.exports = nextConfig;
