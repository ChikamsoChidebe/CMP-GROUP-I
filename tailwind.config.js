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
        'cyber-orange': '#ff8000',
        'dark-bg': '#0a0a0a',
        'darker-bg': '#050505',
        'dark-card': '#1a1a1a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'fira': ['Fira Code', 'monospace'],
        'space': ['Space Mono', 'monospace'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      animation: {
        'matrix': 'matrix 25s linear infinite',
        'float': 'float 20s infinite linear',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'data-flow': 'dataFlow 4s infinite',
        'holographic': 'holographicShift 6s ease-in-out infinite',
        'circuit-move': 'circuitMove 20s linear infinite',
        'glitch': 'glitch 2s infinite',
        'typing': 'typing 4s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        float: {
          '0%': { transform: 'translateY(100vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(200px) rotate(360deg)', opacity: '0' },
        },
        glow: {
          'from': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          'to': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 245, 255, 0.8), 0 0 50px rgba(0, 245, 255, 0.6)', transform: 'scale(1.02)' },
        },
        dataFlow: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        holographicShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        circuitMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00f5ff' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 245, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(0, 245, 255, 0.6)',
        'glow-xl': '0 0 60px rgba(0, 245, 255, 0.7)',
        'pink-glow': '0 0 20px rgba(255, 0, 128, 0.5)',
        'purple-glow': '0 0 20px rgba(128, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
}