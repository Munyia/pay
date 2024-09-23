/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#860B2E',
        sec: '#620E2C',
        dB: '#021427',
        dR: '#42102B',
        fontFamily: {
          verdana: ['verdana', 'sans-serif'], // Fallback font
      },
      },
    },
  },
  plugins: [],
}