/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.vox-cdn.com', 'media.zenfs.com', 's.yimg.com', 'techcrunch.com'],
  },
};

module.exports = nextConfig;
