/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'hpe-green': {
          DEFAULT: '#01A982',
          50: '#E5F7F2',
          100: '#CCF0E6',
          200: '#99E0CC',
          300: '#66D1B3',
          400: '#33C199',
          500: '#01A982',
          600: '#018768',
          700: '#01654E',
          800: '#004434',
          900: '#00221A',
        },
        'hpe-blue': {
          DEFAULT: '#425563',
          50: '#EEF0F1',
          100: '#DDE1E3',
          200: '#BBC3C7',
          300: '#99A5AB',
          400: '#77878F',
          500: '#425563',
          600: '#35444F',
          700: '#28333B',
          800: '#1B2228',
          900: '#121619',
          950: '#0A0C0E',
        },
        'hpe-accent': {
          DEFAULT: '#FF8D6D',
          50: '#FFF1ED',
          100: '#FFE3DB',
          200: '#FFC7B7',
          300: '#FFAB93',
          400: '#FF8F6F',
          500: '#FF8D6D',
          600: '#CC7157',
          700: '#995541',
          800: '#66382C',
          900: '#331C16',
        },
        'hpe-warning': {
          DEFAULT: '#FFC000',
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFC000',
          600: '#CC9A00',
          700: '#997300',
          800: '#664D00',
          900: '#332600',
        },
        'hpe-error': {
          DEFAULT: '#FF0000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card-active': '0 6px 16px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};