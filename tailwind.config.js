/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#000000',
          2: '#0a0a0a', 
          3: '#111111',
          4: '#1a1a1a',
          5: '#262626'
        },
        electric: {
          400: '#00d9ff',
          500: '#0099cc',
          600: '#0077aa'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'electric-pulse': 'electricPulse 2s ease-in-out infinite',
        'electric-glow': 'electricGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
      }
    },
  },
  plugins: [],
}