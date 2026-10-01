/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 12px 28px -16px rgba(15,23,42,.18)',
        lift: '0 2px 4px rgba(15,23,42,.05), 0 24px 48px -24px rgba(15,23,42,.28)',
      },
    },
  },
  plugins: [],
}
