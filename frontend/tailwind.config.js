/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'grey': '#86836D',
      'red': '#BB4430',
      'black': '#231F20',
      'white': '#FAF9F9',
      'pink': '#FFE2D1',
    },
    fontSize: {
      'sm': '0.64rem',
      'tiny': '0.8rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.56rem',
      '2xl': '1.95rem',
      '3xl': '2.44rem',
      '4xl': '3.05rem',
      '5xl': '3.81rem',
      '6xl': '4.77rem',
      '7xl': '5.96rem',
    }
  },
  plugins: [],
}