/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@cloud-party/ui/**/*.{tsx,js,ts}",
  ],
  // @ts-ignore
  presets: [require("@cloud-party/tailwind")],
};

module.exports = config;
