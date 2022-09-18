/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'cursive'],
        'libre-calson': ['Libre Caslon Text', 'serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
    }
  },
  plugins: [],
}
