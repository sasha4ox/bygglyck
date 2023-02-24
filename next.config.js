/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.optimization.minimize = false;
  }
}

module.exports = nextConfig
