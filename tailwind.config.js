/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'red-hat-display':['Red Hat Display','sans-serif'],
        'helvetica': ['Helvetica','Arial', 'sans-serif']
      },
      colors: {
        'danger': '#F0951C',
        'warning': '#F55D53',
        'theme': '#2453EE',
        'primary': '#2453EE',
        'success': '#27C468'
      },
    },
  },
  plugins: [],
}
