/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Abril Fatface', 'ui-serif'],
      body: ['Poppins', 'ui-sans'],
    },
    colors: {
      secondary: '#1d1c6c',
      secondaryHue: '#947EFA',
      primary: '#dfe090',
      primaryHue: '#FFFADE',
      accent: '#00F0C3',
      white: '#ffffff',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },
    extend: {},
  },
  plugins: [],
};
