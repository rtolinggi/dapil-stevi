const colors = require('tailwindcss/colors')

const colorPrimary = {
  50: '#fae9e9',
  100: '#eba5a8',
  200: '#e2787d',
  300: '#d84b51',
  400: '#d3353c',
  500: '#ce1e26',
  600: '#b91b22',
  700: '#a5181e',
  800: '#90151b',
  900: '#7c1217',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    './vendor/filament/**/*.blade.php',
    './ node_modules / flowbite/**/ *.js',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: ' colors.black',
      white: colors.white,
      utama: colorPrimary[500],
    },
    extend: {
      colors: {
        primary: colorPrimary,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.rose,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}

