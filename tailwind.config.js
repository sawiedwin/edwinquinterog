/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'app-test': '#4ac2c4',
        'app-primary': {
        '50': '#e7fff8',
        '100': '#c6ffeb',
        '200': '#92ffde',
        '300': '#4dffd2',
        '400': '#00ffbf',
        '500': '#00e8ab',
        '600': '#00be8e',
        '700': '#009876',
        '800': '#00785f',
        '900': '#00624f',
        '950': '#00382e',
    },
      }
    },
  },
  plugins: [],
};

