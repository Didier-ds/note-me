/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: "'Open Sans', sans-serif",
        'main': "'Unbounded', cursive",
      }
    },
  },
  plugins: [],
}
