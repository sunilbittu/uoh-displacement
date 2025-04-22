import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['uoh-bucket-images.s3.us-east-1.amazonaws.com'],
    },
};
export default nextConfig;
