/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@cloud-party/api", "@cloud-party/db"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.clerk.dev", "www.gravatar.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
};

export default config;
