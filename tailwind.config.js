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
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#140c16',
        white: '#f9f5fa',
        primary: {
          light: '#d5bddb',
          DEFAULT: '#784488',
          dark: '#0f0910',
        },
        secondary: '#cca4d9',
        accent: '#b97acc',
        transparent: 'transparent',
        current: 'currentColor',

      },
      // ...
      animation: {
        'fadeIn': 'fadeIn 1s linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
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
