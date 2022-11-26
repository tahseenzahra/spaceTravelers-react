/* eslint-disable */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: ['even'],
    }
  },
  theme: {
    extend: {
      width: {
        '5/7': '70%',
        '1/1': '13%',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#18a2b8', //blue
      'secondary': '#6d757d', //gray
    }),
    textColor: theme => theme('colors'),
     textColor: {
      'primary': '#18a2b8', //blue
      'secondary': '#6d757d', //gray
      'font': '#fff', //white
      'alert': '#dc3645', //red
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'alert': '#dc3645', //red
     })
  },
  plugins: [],
}
