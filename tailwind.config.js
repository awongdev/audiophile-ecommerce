/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'clr-orange-900': 'hsl(22deg, 65%, 57%)',
        'clr-orange-700': 'hsl(21deg, 94%, 75%)',
        'clr-black-900': 'hsl(0deg, 0%, 0%)',
        'clr-black-850': 'hsl(0deg, 0%, 6%)',
        'clr-white-150': 'hsl(0deg, 0%, 95%)',
        'clr-white-100': 'hsl(0deg, 0%, 98%)',
        'clr-white-50': 'hsl(0deg, 0%, 100%)',
      },
      maxWidth: {
        1110: '69.375rem',
      },
      content: {
        arrow: 'url("~/public/assets/shared/icon-arrow-right.svg")',
      },
      fontSize: {
        '15px': '0.9375rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
