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
      md: '648px',
      lg: '980px',
      xl: '1200px',
    },
    fontSize: {
      xxs: ['11px', '20px'],
      xs: ['13px', '20px'],
      sm: ['16px', '24px'],
      base: ['15px', '25px'],
      b18: ['18px', '25px'],
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
      'lm-color7': '#222731',
      'lm-color8': '#d0cfcf',
      'lm-color9': '#60ABFF',
      'dm-color1': '#0079FF',
      'dm-color2': '#FFFFFF',
      'dm-color3': '#141D2F',
      'dm-color4': '#1E2A47',
      'dm-color5': '#90A4D4',
      'err-color': '#F74646',
      'modal-color': 'rgba(247, 70, 70, 0.8)'
    },
    fontFamily: {
      sans: ['Space Mono']
    },
    extend: {
      gridTemplateColumns: {
        'lg-user': '20% 1fr',
        'sm-user': '30% auto',
        'lg-user-info': '70% auto'
      },
      gridTemplateRows: {
        'sm-user': '10% 10% auto auto auto',
        'md-user': '15% 15% auto auto auto',
        'lg-user': '10% 10% auto auto auto'
      }
    },
  },
  plugins: [],
};
