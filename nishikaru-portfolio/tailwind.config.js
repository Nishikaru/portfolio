/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translate(0,0)'  },
          '50%': { transform: 'translate(0%,10%)' },
          // '0%,100%': {transform: 'rotate(3deg)'  },
          // '50%': {transform: 'rotate(-3deg)'  },
        },
        sliding:{
          '0%,100%' : { left:'0%', width:'0%'},
          '25%': { left:'0%', width:'100%'},
          '26%': { left:'auto',right:'0%', width:'100%'},
          '50%': { left:'auto',right:'0%', width:'0%'},
          // '75%': { left:'0%', width:'100%'}
        }
      }
    },
  },
  plugins: [],
}
