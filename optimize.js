// Performance optimization script
const fs = require('fs');
const path = require('path');

// Remove unused CSS animations and optimize Tailwind
const optimizeTailwind = () => {
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
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
}`;
  
  fs.writeFileSync(path.join(__dirname, 'tailwind.config.js'), tailwindConfig);
  console.log('✅ Tailwind config optimized');
};

// Optimize package.json for production
const optimizePackageJson = () => {
  const packagePath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Add performance optimizations
  packageJson.scripts.build = "GENERATE_SOURCEMAP=false react-scripts build";
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Package.json optimized for production');
};

// Run optimizations
console.log('🚀 Starting performance optimizations...');
optimizeTailwind();
optimizePackageJson();
console.log('✅ All optimizations complete!');
console.log('📦 Run "npm run build" for optimized production build');