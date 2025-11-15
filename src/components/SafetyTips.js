import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Trash2, Settings, Globe, UserX, AlertTriangle } from 'lucide-react';

const SafetyTips = () => {

  const tips = [
    {
      icon: Shield,
      title: "Think Before You Post",
      description: "Every post is permanent - consider long-term consequences",
      details: "Ask yourself: Would I be comfortable with my employer, family, or future self seeing this in 10 years?",
      color: "#00f5ff"
    },
    {
      icon: Lock,
      title: "Use Privacy Settings",
      description: "Maximize privacy controls on all platforms",
      details: "Regularly review and update privacy settings. Make profiles private and limit who can see your content.",
      color: "#ff0080"
    },
    {
      icon: Eye,
      title: "Monitor Your Digital Footprint",
      description: "Regularly search for yourself online",
      details: "Set up Google alerts for your name and check what information is publicly available about you.",
      color: "#8000ff"
    },
    {
      icon: Trash2,
      title: "Clean Up Old Content",
      description: "Remove outdated or inappropriate posts",
      details: "Regularly audit your social media and delete content that no longer represents who you are.",
      color: "#00ff41"
    },
    {
      icon: Settings,
      title: "Manage Data Collection",
      description: "Limit how much data companies collect",
      details: "Turn off location tracking, ad personalization, and data sharing where possible.",
      color: "#ff8000"
    },
    {
      icon: UserX,
      title: "Be Selective with Connections",
      description: "Only connect with people you trust",
      details: "Fake profiles and data scrapers often send friend requests to harvest your information.",
      color: "#ff0080"
    }
  ];

  return (
    <section id="safety" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 glow-text">
            <span className="text-cyan-400">STAY</span>{' '}
            <span className="text-pink-500">PROTECTED</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
            Essential strategies to protect your digital privacy and reputation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}

                className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl cyber-border hover-glow holographic cursor-pointer"
              >
                <div 
                  className="p-4 rounded-lg mb-6 w-fit"
                  style={{ backgroundColor: `${tip.color}20`, border: `2px solid ${tip.color}` }}
                >
                  <IconComponent size={40} style={{ color: tip.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {tip.title}
                </h3>
                
                <p className="text-lg text-gray-300 mb-4">
                  {tip.description}
                </p>
                
                <p className="text-gray-400">
                  {tip.details}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-12 border-2 border-green-500"
        >
          <Shield size={64} className="text-green-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-green-400 mb-6">
            Your Privacy is Your Responsibility
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The internet never forgets, but you can control what it remembers. 
            Take action today to protect your digital future.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}
            className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-xl transition-all duration-300"
          >
            Start Protecting Yourself
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetyTips;