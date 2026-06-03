/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F1',
        beige: '#EDE8DF',
        'warm-gold': '#C9A96E',
        'soft-gold': '#D4AF7A',
        'dark-gold': '#A07840',
        'warm-brown': '#6B4F2A',
        'light-beige': '#F5F0E8',
        'parchment': '#EDE0C8',
      },
      fontFamily: {
        serif: ['"Cormorant Garant"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Raleway"', 'sans-serif'],
        display: ['"Cormorant Garant"', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.4em',
        'widest': '0.3em',
        'wider2': '0.2em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
      },
    },
  },
  plugins: [],
}
