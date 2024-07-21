/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'text-reveal': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'text-reveal': 'text-reveal 5s ease-in-out infinite', // Add 'infinite' to make it repeat
      },
    },
  },
  plugins: [],
  assetsInclude:["**/*glb"],
}

