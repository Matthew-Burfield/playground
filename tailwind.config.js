/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      mountain: {
        100: '#007FEF',
      },
      steel: {
        40: '#DFE4EB',
        100: '#AEBCCC',
      },
      slate: {
        85: '#5A6774',
      },
    },
    extend: {},
  },
  plugins: [],
};
