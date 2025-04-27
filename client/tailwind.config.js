/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#A42B2E',
        gray: '#F5E1D1',
        brown: '#5E2E0B',
        yellow: '#EBAB57',
        cream: '#F8F1E0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        title: ['Shrikhand', 'serif'],
        body: ['Arvo', 'serif'],
      },
    },
  },
  plugins: [],
};
