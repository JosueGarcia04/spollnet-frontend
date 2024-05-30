/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< Updated upstream
    extend: {},
=======
    extend: {
      colors: {
        customBlack: '#090909', 
      },
      fontFamily: {
        sans: ['YourSansFont', 'sans-serif'],
        serif: ['YourSerifFont', 'serif'],
        mono: ['YourMonoFont', 'monospace'],
        extrabold: ['YourExtraboldFont', 'sans-serif'],
      },
    },
>>>>>>> Stashed changes
  },
  plugins: [],
}


