/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#246949',
        'main-green': '#1AE58E',
        'main-black': '#0B0B0B',
        'main-gray': '#EFEFEF',
        'main-blue': '#287BED',
        'light-green': '#B2F8D6',
        'light-gray': '#F4F4F4',
        'extra-light-gray': '#F7F7F7'
      },
      transitionProperty: {
        'custom': 'width, left, right, px, py'
      }
    }
  },
  plugins: []
}
