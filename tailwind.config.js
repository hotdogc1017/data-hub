/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#33691f',
          light: '#629749',
          dark: '#003d00'
        }
      },
      height: {
        header: '50px',
        body: 'calc(100vh - 50px)'
      }
    }
  },
  plugins: []
}
