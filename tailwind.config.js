/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-primary': '#FFF159',
        'blue-primary': '#3483fa',
        'light-blue': '#D9E7FA',
        'dark-blue': "#2968C8",
        'green': '#00a650',
      }
    },
  },
  plugins: [],
}