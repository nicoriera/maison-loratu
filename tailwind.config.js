/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f5ed',
          100: '#f0e9d8',
          200: '#e0d3b5',
          300: '#c8b08a',
          400: '#b08a66',
          500: '#C16A46',
          600: '#B85A36',
          700: '#9d4a2e',
          800: '#7d3a25',
          900: '#5d2a1c',
        },
        cream: {
          50: '#FEFCF9',
          100: '#FDF9F3',
          200: '#FBF3E7',
          300: '#F8EDDB',
          400: '#F5E7CF',
          500: '#F8F0E5',
          600: '#E8D8C8',
          700: '#D4C0A8',
          800: '#B8A088',
          900: '#9D8066',
        },
        terracotta: {
          50: '#F8E8E0',
          100: '#F0D0C0',
          200: '#E0A080',
          300: '#D16B4D',
          400: '#C16A46',
          500: '#B85A36',
          600: '#9d4a2e',
          700: '#7d3a25',
          800: '#5d2a1c',
          900: '#3d1a12',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

