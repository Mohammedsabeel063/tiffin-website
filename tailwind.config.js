/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        greatvibes: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'slide-up': 'slideUp 1.2s ease-out both',
        'fade-bounce': 'fadeBounce 1.2s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeBounce: {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
          '50%': { opacity: 1, transform: 'translateY(-10px) scale(1.02)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      colors: {
        primary: '#eab308',
        dark: '#1e293b',
      },
    },
  },
  plugins: [],
};
