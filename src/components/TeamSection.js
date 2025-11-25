import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            <span className="text-cyan-400">GROUP I</span> TEAM
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The brilliant minds behind this digital permanence research project
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-black rounded-2xl p-4">
              <img 
                src="/Group I.jpg" 
                alt="CMP 103 Group I Team Members" 
                className="w-full max-w-4xl h-auto rounded-xl shadow-2xl border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 grayscale hover:grayscale-0"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">CMP 103 - GROUP I</h3>
                <p className="text-lg text-gray-300">Bingham University</p>
                <p className="text-sm text-pink-400 mt-2">"Exploring Digital Permanence & Online Privacy"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;