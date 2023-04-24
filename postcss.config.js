module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
      ],
    },
    autoprefixer: {},
  }
}