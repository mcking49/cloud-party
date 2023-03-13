/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: [
    "@cloud-party/api",
    "@cloud-party/auth",
    "@cloud-party/db",
  ],
};

export default config;
