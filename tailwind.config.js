/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        128: '32rem',
      },
      width: {
        '1/8': '14%',
        '1/9': '29%',
      },
      boxShadow: {
        'md-top':
          '0 4px 15px -1px rgb(0 0 0 / 0.1), 0 2px 15px -2px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [],
};
