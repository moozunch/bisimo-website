/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)'], 
      },
      colors: {
        'bisimo-blue': '#209CFF',
        'bisimo-pink': '#FFA5CA',
        'bisimo-green': '#07B765',
        'bisimo-purple': '#4507b7',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite', 
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' }, 
          '50%': { transform: 'rotate(3deg)' },       
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bisimoTheme: {
          "primary": "#FFBD30",    
          "secondary": "#209CFF",   
          "accent": "#FFA5CA",      
          "neutral": "#070707",    
          "base-100": "#FFFEFB",   
          "info": "#07B765",       
          
          "--rounded-box": "1.5rem", 
          "--rounded-btn": "9999px", 
          "--rounded-badge": "1.9rem",
        },
      },
    ],
  },
};