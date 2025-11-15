import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import DataStorageSection from './components/DataStorageSection';
import DataRetrievalSection from './components/DataRetrievalSection';
import GoogleSimulation from './components/GoogleSimulation';
import EducationSection from './components/EducationSection';
import SafetyTips from './components/SafetyTips';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="App min-h-screen bg-darker-bg text-white overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <DataStorageSection />
        <DataRetrievalSection />
        <GoogleSimulation />
        <EducationSection />
        <SafetyTips />
      </motion.main>
      
      <Footer />
    </div>
  );
}

export default App;