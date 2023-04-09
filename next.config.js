require("dotenv").config();
const { sizes } = require("./blocks/Image/sizes.json");

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      "localhost",
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
