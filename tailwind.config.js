/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all React source files
  ],
  theme: {
    extend: {
      // add custom colors, fonts, spacing here if needed
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
