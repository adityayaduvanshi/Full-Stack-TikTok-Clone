/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["pyxis.nymag.com", "lh3.googleusercontent.com"],
  },
  // swcMinify: true,
};

module.exports = nextConfig;
