/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Wix Madefor Text", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#faf7fc',
          100: '#f4eef9',
          200: '#eadcf2',
          300: '#dcc1e6',
          400: '#c79cd6',
          500: '#ac74c1',
          600: '#9055a4',
          700: '#774487',
          800: '#653a71',
          900: '#54335c',
          950: '#33183a',
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
