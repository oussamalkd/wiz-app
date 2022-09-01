/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./src/**/*.vue"],
  content: [],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
