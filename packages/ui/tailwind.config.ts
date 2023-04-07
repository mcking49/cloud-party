import { type Config } from "tailwindcss";

import preset from "@cloud-party/tailwind";

const config: Config = {
  content: ["./src/**/*.tsx"],
  presets: [preset],
};

export default config;
