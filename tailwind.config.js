/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f5ff',
        'cyber-pink': '#ff0080',
        'cyber-purple': '#8000ff',
        'cyber-green': '#00ff41',
        'darker-bg': '#050505',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Disable unused features
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
  }
}