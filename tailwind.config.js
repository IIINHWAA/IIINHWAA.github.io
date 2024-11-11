/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        dynapuff: ['DynaPuff', 'cursive'], 
        jua: ['Jua', 'sans-serif'],
        archivo: ['Archivo Black', 'sans-serif'], // Archivo Black 추가
      },
    },
  },
  plugins: [],
}
