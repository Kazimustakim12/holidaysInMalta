/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      blinker: ["Blinker", "sans-serif"],
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "1rem",

      // default breakpoints but with 40px removed
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-300": "#FFF7EA",
        "primary-400": "#FFEACB",
        "primary-500": "#ECD5B4",
        "primary-600": "#FF5C00",
        "secondary-400": "#AFECC0",
        "secondary-500": "#98C3A4",
        "secondary-600": "#5A7D64",
        "sucess-600": "#3BC751",
        "light-gray-100": "#D9D9D9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};