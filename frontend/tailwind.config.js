import daisyui from 'daisyui';



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",               // include Vite entry
    "./src/**/*.{js,ts,jsx,tsx}", // include all React/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
  themes: ["forest","coffee"],
  },
};