/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#8A47EB",
        blue: "#1F73F1"
      },
      fontFamily:{
        regular: ['regular'],
        medium: ['medium'],
        tbold: ['bold']
      }
    },
  },
  plugins: [],
}
