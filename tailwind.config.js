/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './index.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './features/**/*',
    './screens/**/*',
    './hooks/**/*',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#fec32f',
        secondary: '#020644',
        white: '#ffffff',
        gray: '#F9F9F9',
        'gray-400': '#c4c4c5',
        black: '#121212',
      },
      fontFamily: {
        'raleway-400': ['Raleway_400Regular', 'sans-serif'],
        'raleway-500': ['Raleway_500Medium', 'sans-serif'],
        'raleway-600': ['Raleway_600SemiBold', 'sans-serif'],
        'raleway-700': ['Raleway_700Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
