/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#24232C',
          secondary: '#817D92',
          accent: '#E6E5EA',
          neutral: '',
          'base-100': '#18171F',
          info: '#F8CD65',
          success: '#A4FFAF',
          warning: '#FB7C58',
          error: '#F64A4A',
        },
      },
    ],
  },
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: {
        darkGray: '#24232C',
        gray: '#817D92',
        white: '#E6E5EA',
        veryDarkGray: '#18171F',
        green: '#A4FFAF',
        red: '#F64A4A',
        orange: '#FB7C58',
        yellow: '#F8CD65',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '16px',
        xs: '18px',
        sm: '23px',
        md: '24px',
        lg: '31px',
        xl: '32px',
        '2xl': '43px',
      },
    },
  },
};
