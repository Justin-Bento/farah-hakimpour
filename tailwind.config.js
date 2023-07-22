/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Wix Madefor Text", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          10: "hsla(276, 45%, 98%, 0.2)",
          50: "hsl(276, 45%, 98%)",
          100: "hsl(273, 48%, 95%)",
          200: "hsl(278, 46%, 91%)",
          300: "hsl(284, 43%, 83%)",
          400: "hsl(284, 41%, 73%)",
          500: "hsl(284, 38%, 61%)",
          600: "hsl(285, 32%, 49%)",
          700: "hsl(286, 33%, 40%)",
          800: "hsl(287, 32%, 34%)",
          900: "hsl(288, 29%, 28%)",
          950: "hsl(288, 41%, 16%)",
          960: "hsl(288, 41%, 10%)",
        },
      },
      // ...
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
