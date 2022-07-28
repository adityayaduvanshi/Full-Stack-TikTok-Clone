/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pyxis.nymag.com", "lh3.googleusercontent.com"],
  },
  // swcMinify: true,
};

module.exports = nextConfig;
