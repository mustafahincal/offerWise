/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    ENDPOINT: process.env.ENDPOINT,
  }
};

module.exports = nextConfig;
