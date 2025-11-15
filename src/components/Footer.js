import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, Github, Globe, Mail, AlertTriangle } from 'lucide-react';

const Footer = () => {
  const resources = [
    { name: 'Wayback Machine', url: 'https://web.archive.org', icon: Globe },
    { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com', icon: Shield },
    { name: 'GDPR Information', url: 'https://gdpr.eu', icon: ExternalLink },
    { name: 'Privacy Tools', url: 'https://privacytools.io', icon: Shield }
  ];

  return (
    <footer className="bg-gray-900/90 backdrop-blur-lg border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500">
                <Shield size={32} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">The Internet Never Forgets</div>
                <div className="text-gray-400">GROUP I - CMP 103 Project</div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              A CMP 103 project by GROUP I at Bingham University exploring digital permanence 
              and online privacy. Understanding how your digital footprint persists forever.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Privacy Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <motion.a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, color: '#00f5ff' }}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-lg"
                  >
                    <IconComponent size={20} />
                    {resource.name}
                    <ExternalLink size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Warning */}
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Important Notice</h3>
            </div>
            <p className="text-gray-300 text-lg">
              This project is for educational purposes only. All case studies are 
              based on publicly reported incidents. Protect your privacy online.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-lg mb-4 md:mb-0">
            © 2025 GROUP I - CMP 103, Bingham University. Educational Use Only.
          </div>
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, color: '#00f5ff' }}
              href="mailto:privacy@research.edu"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
              Contact
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: '#00f5ff' }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              Source
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;