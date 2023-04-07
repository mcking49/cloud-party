import { type Config } from "tailwindcss";

import preset from "@cloud-party/tailwind";

const config = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@cloud-party/ui/**/*.{tsx,js,jsx,ts}",
  ],
  presets: [preset],
} satisfies Config;

export default config;
