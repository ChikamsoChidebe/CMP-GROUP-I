import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Eye, Database, Cloud, Server, Wifi, Globe, Shield, Search, Archive } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  
  const phrases = [
    "Every click is recorded...",
    "Every post is archived...",
    "Every search is remembered...",
    "The Internet Never Forgets"
  ];

  const floatingIcons = [
    { Icon: Eye, delay: 0, x: 150, y: 80, color: '#00f5ff', size: 100 },
    { Icon: Database, delay: 1, x: -120, y: 120, color: '#ff0080', size: 90 },
    { Icon: Cloud, delay: 2, x: 180, y: -90, color: '#8000ff', size: 110 },
    { Icon: Server, delay: 3, x: -150, y: -60, color: '#00ff41', size: 85 },
    { Icon: Wifi, delay: 4, x: 100, y: 150, color: '#ff8000', size: 95 },
    { Icon: Globe, delay: 5, x: -80, y: -120, color: '#00f5ff', size: 105 },
    { Icon: Shield, delay: 6, x: 200, y: 60, color: '#ff0080', size: 88 },
    { Icon: Search, delay: 7, x: -180, y: 90, color: '#8000ff', size: 92 },
    { Icon: Archive, delay: 8, x: 120, y: -150, color: '#00ff41', size: 98 }
  ];

  // Typing animation effect
  useEffect(() => {
    let timeout;
    const currentText = phrases[currentPhrase];
    
    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (currentPhrase < phrases.length - 1) {
          setCurrentPhrase(currentPhrase + 1);
          setTypedText('');
        }
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentPhrase]);

  const scrollToNext = () => {
    document.getElementById('data-storage')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Floating Background Elements */}
      {floatingIcons.map(({ Icon, delay, x, y, color, size }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1], 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, x, 0],
            y: [0, y, 0]
          }}
          transition={{ 
            duration: 12 + Math.random() * 8,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute"
          style={{ color }}
        >
          <Icon size={size} className="drop-shadow-2xl" style={{ filter: `drop-shadow(0 0 20px ${color})` }} />
        </motion.div>
      ))}

      <div className="text-center z-10 max-w-7xl mx-auto px-6">
        {/* Main Title with Glitch Effect */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-black mb-4 glow-text leading-none">
            <span className="block text-white">THE</span>
            <span className="block text-cyan-400">INTERNET</span>
            <span className="block text-pink-500 glitch" data-text="NEVER FORGETS">
              NEVER FORGETS
            </span>
          </h1>
        </motion.div>

        {/* Typing Animation Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl text-cyan-300 font-mono h-16 flex items-center justify-center">
            <span className="typing-animation">{typedText}</span>
          </p>
        </motion.div>

        {/* Enhanced Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-3xl mb-12 text-gray-300 max-w-5xl mx-auto leading-relaxed"
        >
          Discover the hidden mechanisms of digital permanence. Every byte of data you create 
          travels through an intricate web of servers, caches, backups, and archives that span 
          the globe. Your digital footprint is more permanent than you think.
        </motion.p>

        {/* Statistics Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {[
            { number: "2.5", unit: "Quintillion", label: "Bytes Created Daily" },
            { number: "735", unit: "Billion", label: "Web Pages Archived" },
            { number: "∞", unit: "", label: "Years Data Persists" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="holographic p-6 rounded-lg cyber-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 glow-text">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl text-pink-400 font-semibold">
                {stat.unit}
              </div>
              <div className="text-base md:text-lg text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 0 40px rgba(0, 245, 255, 0.8)",
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="neon-button px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-black text-xl hover-glow relative overflow-hidden group"
          >
            <span className="relative z-10">EXPLORE THE DEPTHS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: "#ff0080",
              color: "#ff0080"
            }}
            className="px-12 py-6 border-3 border-cyan-400 rounded-xl font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-xl"
          >
            LEARN THE TRUTH
          </motion.button>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="bg-red-900/30 border-2 border-red-500 rounded-lg p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 text-red-400">
            <Shield size={32} className="animate-pulse" />
            <p className="text-lg md:text-xl font-bold">
              WARNING: Your digital actions have permanent consequences
            </p>
            <Shield size={32} className="animate-pulse" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToNext}
          className="text-cyan-400 cursor-pointer hover:text-pink-400 transition-colors duration-300"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-semibold">Discover How</p>
            <ChevronDown size={48} className="animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Enhanced Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 200, 
              opacity: [0, 1, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            className="absolute text-cyan-400 text-lg font-mono font-bold"
            style={{ 
              left: `${Math.random() * 100}%`,
              textShadow: '0 0 10px currentColor'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>

      {/* Floating Algorithm Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['∑', '∏', '∫', '∂', '∇', '∞', '≈', '≠', '≤', '≥'].map((symbol, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.6, 0.6, 0],
              rotate: 360,
              x: Math.random() * window.innerWidth
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-purple-400 text-2xl font-bold"
            style={{ textShadow: '0 0 15px currentColor' }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;