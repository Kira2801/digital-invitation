/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive'], // Contoh font script
      },
      colors: {
        primary: '#D4AF37', // Warna emas contoh
        secondary: '#F9F9F9',
      },
    },
  },
  plugins: [],
}