/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        navColor: '#41D1C4B5',
        backGroundColor:" #F8F9FA",

      },
    },
  },
  plugins: [],
}

