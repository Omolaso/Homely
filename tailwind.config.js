/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      "sm": "486px",
      "md": "768px",
      "lg": "1024px",
    },
    extend: {
      fontFamily: {
        sans:['Poppins', 'sans-serif']
      },
      colors: {
        "homely-white":"#FFFFFF",
        "homely-black":"#000000",
        "homely-grey":"#959190",
        "homely-red":"#FF4D00",
        "homely-background-peach":"#FFE9E0",
        "homely-background-white":"#F5F5F5",
      }
    },
  },
  plugins: [],
}
