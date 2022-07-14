/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1536px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1050px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},

      '2sm': {'max': '460px'},
    },
    extend: {},
    
  },
  plugins: [],
}
