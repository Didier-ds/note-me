/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': "'Unbounded', cursive"
      }
    },
  },
  plugins: [],
}
