import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#25404e",
          400: "red",
        },
      },
    },
  },
  plugins: [],
};

export default config;
