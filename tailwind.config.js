/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fb',
          100: '#d9e6f3',
          500: '#1b4f8a',
          700: '#0e3a6b',
          800: '#0b2f56',
          900: '#082445',
          950: '#061a33',
        },
      },
    },
  },
  plugins: [],
}
