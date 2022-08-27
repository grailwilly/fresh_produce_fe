/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'teal': '#009688',
      'gold': '#e1a93d',
      'dark-green': '#104034'
    },
    extend: {},
  },
  plugins: [],
}
