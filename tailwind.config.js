/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('/nebula.jpg')",
        'hue': "url('/hue.jpg')",
      },
      dropShadow: {
        'wad': "3px 3px 5px black",
        'low': "1px 1px 2px black",
        'lbgt': "0px 0px 10px orange"
      },
      keyframes: {
        prom:{
          '0%, 100%': { filter: 'hue-rotate(-360deg)' },
          '50%': { filter: 'hue-rotate(360deg)' }
        }
      },
      animation:{
        'rotation': "hue 10s infinite alternate",
        'prom': "prom 10s infinite"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
