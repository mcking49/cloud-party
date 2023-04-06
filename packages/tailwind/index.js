/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#25404e",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
