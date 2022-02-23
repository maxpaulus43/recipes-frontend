module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        'zoom': 'zoom 0.2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
