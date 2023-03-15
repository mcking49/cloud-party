/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}"],
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
