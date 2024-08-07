/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'biru':'#2B2B3F',
      },
      fontFamily:{
        'inter': ['Inter'],
        'syne': ['Syne'],
      },
    },
  },
  plugins: [],
}

