/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'magenta': '#ed145b',
        'preto_header': '#151819'
      },
      fontFamily:{ 
        Raleway: ['Raleway' , 'sans-serif']
      }
    },
  },
  plugins: [],
}


