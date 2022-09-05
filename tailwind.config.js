/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        'teal': '#009688',
        'gold': '#e1a93d',
        'dark-green': '#104034',
        'white': '#fff',
        'dk-white': '#9c9897',
        'gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: 'e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontSize: {
        'cus-sm': '15px',
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      animation: {
        bar : 'bar 1s 1',
        fadeOut : 'fadeOut 1s 1'
      },
     keyframes : {
      bar : {
       '0%' : {
        width: '20%',
       },
       '50%' : {
        width: '50%',
       },
       '90%' : {
        width: '100%',
       },
       '95%' : {
        opacity: .5,
       },
       '100%' : {
        opacity: 0,
        display:'none'
       },
      },
     },

    },
  },
  plugins: []
}
