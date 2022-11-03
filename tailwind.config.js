/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first': '#2E3039',
        'second': '#FFF6E9',
        'third': '#FFBA52',
      },
      fontFamily:{
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}