/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:'#F1F1F1'
      }
    },
  },
  plugins: [
    "@tailwindcss/line-clamp"
  ],
}

