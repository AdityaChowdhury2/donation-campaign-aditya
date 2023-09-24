/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    backgroundImage: {
      'banner': "url('https://i.ibb.co/R3F1NXP/banner.jpg')"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}