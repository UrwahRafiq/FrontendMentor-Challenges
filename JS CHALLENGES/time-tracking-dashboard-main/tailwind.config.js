/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],  
  safelist: [
    'bg-fem-orange-300',
    'bg-fem-blue-300',
    'bg-fem-pink-400',
    'bg-fem-green-400',
    'bg-fem-purple-700',
    'bg-fem-yellow-300',
  ],
  theme: {
    extend: {
      colors: {
        'fem-purple-600': 'hsl(246, 80%, 60%)',
        'fem-orange-300': 'hsl(15, 100%, 70%)',
        'fem-blue-300': 'hsl(195, 74%, 62%)',
        'fem-pink-400': 'hsl(348, 100%, 68%)',
        'fem-green-400': 'hsl(145, 58%, 55%)',
        'fem-purple-700': 'hsl(264, 64%, 52%)',
        'fem-yellow-300': 'hsl(43, 84%, 65%)',
        'fem-navy-950': 'hsl(226, 43%, 10%)',
        'fem-navy-900': 'hsl(235, 46%, 20%)',
        'fem-purple-500': 'hsl(235, 45%, 61%)',
        'fem-navy-200': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
