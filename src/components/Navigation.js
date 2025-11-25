import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, Eye, Database, Search, Users, Lock, UserCheck } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Shield },
    { name: 'Storage', href: '#data-storage', icon: Database },
    { name: 'Retrieval', href: '#data-retrieval', icon: Search },
    { name: 'Simulation', href: '#simulation', icon: Eye },
    { name: 'Education', href: '#education', icon: Users },
    { name: 'Safety', href: '#safety', icon: Lock },
    { name: 'Team', href: '#team', icon: UserCheck }
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500">
              <Shield size={32} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">TINF</div>
              <div className="text-sm text-gray-400">GROUP I - CMP 103</div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-lg"
                >
                  <IconComponent size={20} />
                  {item.name}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full p-3 text-left text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-all"
                >
                  <IconComponent size={20} />
                  {item.name}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;