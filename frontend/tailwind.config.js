/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#7CFFC4',
        'tan': '#E1B07E'
      }
    },
  },
  plugins: [],
}

