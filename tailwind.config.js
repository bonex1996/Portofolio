/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frist-bg': '#000033',
        'second-bg': '#401F71',
      },
    },
  },
  plugins: [],
}

