/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontSize: {
      xs: ['13px', '20px'],
      sm: ['16px', '24px'],
      base: ['15px', '25px'],
      lg: ['22px', '33px'],
      xl: ['26px', '38px'],
    },
    colors: {
      'lm-color1': '#0079FF',
      'lm-color2': '#697C9A',
      'lm-color3': '#4B6A9B',
      'lm-color4': '#2B3442',
      'lm-color5': '#F6F8FF',
      'lm-color6': '#FEFEFE',
      'dm-color1': '#0079FF',
      'dm-color2': '#FFFFFF',
      'dm-color3': '#141D2F',
      'dm-color4': '#1E2A47',
    },
    fontFamily: {
      sans: ['Space Mono']
    },
    extend: {},
  },
  plugins: [],
};
