/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        'app':'1rem',
         'app-md':'2rem'
      },
      margin:{
        'app':'1rem',
        'app-md':'2rem'
      }
    },
  },
  plugins: [],
}