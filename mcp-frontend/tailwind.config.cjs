/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        claude: {
          bg: '#171717',
          sidebar: '#141414',
          surface: '#262626',
          elevated: '#2a2a2a',
        },
      },
    },
  },
  plugins: [],
}
