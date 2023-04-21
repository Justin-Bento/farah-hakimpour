/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: "#faf7fc",
          100: "#f4eef9",
          200: "#eadcf2",
          300: "#dcc1e6",
          400: "#c79cd6",
          500: "#ac74c1",
          600: "#9055a4",
          700: "#774487",
          800: "#653a71",
          900: "#54335c",
          950: "#33183a",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // ...
  ],
};
