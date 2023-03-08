/** @type {import("@cloud-party/prettier").CloudPartyPrettier} */
const cloudPartyConfig = require("@cloud-party/prettier");

/** @type {import("@cloud-party/prettier").CloudPartyPrettier} */
const config = {
  ...cloudPartyConfig,
  plugins: [
    ...(cloudPartyConfig?.plugins ?? []),
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./packages/tailwind",
};

module.exports = config;
