import { type Config } from "tailwindcss";

import preset from "@cloud-party/tailwind";

const config = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@cloud-party/ui/**/*.{tsx,ts,js,jsx}",
  ],
  presets: [preset],
} satisfies Config;

export default config;
