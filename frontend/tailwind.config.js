/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#001a33',
          royalBlue: '#002366',
          gold: '#c9a14a',
          goldLight: '#e2c27d',
          ivory: '#f9f9f7',
          black: '#000000',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        lora: ['Lora', 'serif']
      }
    },
  },
  plugins: [],
}
