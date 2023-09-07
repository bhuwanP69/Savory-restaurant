/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color':'#1A2F33',
        'button-color':'#2673D',
      },
    },
  },
  plugins: [],
}