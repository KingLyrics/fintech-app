/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: " #805DB3",
      },
    },
    fontFamily: {
      font1: ["inter", "sans-serif"],
      libre: ["Libre Baskerville ", "serif"],
    },
  },
  plugins: [],
};
