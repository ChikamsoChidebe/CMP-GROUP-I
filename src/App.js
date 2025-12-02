import React, { Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import PerformanceMonitor from './components/PerformanceMonitor';

const HeroSection = React.lazy(() => import('./components/HeroSection'));
const DataStorageSection = React.lazy(() => import('./components/DataStorageSection'));
const DataRetrievalSection = React.lazy(() => import('./components/DataRetrievalSection'));
const GoogleSimulation = React.lazy(() => import('./components/GoogleSimulation'));
const EducationSection = React.lazy(() => import('./components/EducationSection'));
const SafetyTips = React.lazy(() => import('./components/SafetyTips'));
const TeamSection = React.lazy(() => import('./components/TeamSection'));

function App() {
  return (
    <div className="App min-h-screen bg-darker-bg text-white overflow-x-hidden">
      <PerformanceMonitor />
      <MatrixBackground />
      <Navigation />
      
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-cyan-400 text-xl">Loading...</div></div>}>
          <HeroSection />
          <DataStorageSection />
          <DataRetrievalSection />
          <GoogleSimulation />
          <EducationSection />
          <SafetyTips />
          <TeamSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;