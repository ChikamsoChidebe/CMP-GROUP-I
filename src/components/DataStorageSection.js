import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Server, Cloud, Database, Archive, Globe, 
  Wifi, Router, HardDrive, Shield, Eye, Search, 
  ArrowRight, ArrowDown, Zap, Lock, Unlock, AlertTriangle,
  Users, Building, MapPin, Clock, Activity, Cpu
} from 'lucide-react';

const DataStorageSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dataPackets, setDataPackets] = useState([]);
  const [matrixColumns, setMatrixColumns] = useState([]);

  const storageSteps = [
    {
      id: 1,
      title: "User Creates Data",
      icon: Smartphone,
      description: "You post a photo, send a message, or browse a website",
      details: "Every click, tap, scroll, and interaction generates digital data. Your device captures metadata including location, time, device info, and behavioral patterns.",
      color: "#00f5ff",
      position: { x: 10, y: 80 },
      dataTypes: ["Photos", "Messages", "Location", "Browsing History", "App Usage", "Contacts"]
    },
    {
      id: 2,
      title: "ISP Routing",
      icon: Router,
      description: "Data travels through your Internet Service Provider",
      details: "Your ISP logs all traffic, including websites visited, data transferred, and connection times. This creates a comprehensive record of your online activity.",
      color: "#ff0080",
      position: { x: 30, y: 60 },
      dataTypes: ["Traffic Logs", "DNS Queries", "Bandwidth Usage", "Connection Times", "IP History"]
    },
    {
      id: 3,
      title: "Platform Servers",
      icon: Server,
      description: "Data reaches social media and web platforms",
      details: "Platforms store your data across multiple servers, creating backups and analyzing it for advertising, recommendations, and user profiling.",
      color: "#8000ff",
      position: { x: 50, y: 40 },
      dataTypes: ["User Profiles", "Social Graphs", "Behavioral Data", "Preferences", "Ad Targeting"]
    },
    {
      id: 4,
      title: "Cloud Backup",
      icon: Cloud,
      description: "Automatic replication to cloud storage",
      details: "Your data is automatically replicated across multiple cloud data centers worldwide for redundancy and faster access.",
      color: "#00ff41",
      position: { x: 70, y: 20 },
      dataTypes: ["Redundant Copies", "Geographic Distribution", "Version History", "Sync Data"]
    },
    {
      id: 5,
      title: "Search Indexing",
      icon: Search,
      description: "Search engines crawl and index content",
      details: "Web crawlers continuously scan and index your public content, making it searchable and creating cached versions.",
      color: "#ff8000",
      position: { x: 90, y: 40 },
      dataTypes: ["Indexed Content", "Cached Pages", "Search Rankings", "Link Analysis"]
    },
    {
      id: 6,
      title: "Archive Storage",
      icon: Archive,
      description: "Long-term archival by services like Wayback Machine",
      details: "Archival services create permanent snapshots of web content, preserving it indefinitely even after original deletion.",
      color: "#ff0080",
      position: { x: 70, y: 60 },
      dataTypes: ["Historical Snapshots", "Deleted Content", "Version Archives", "Permanent Records"]
    },
    {
      id: 7,
      title: "Data Brokers",
      icon: Building,
      description: "Third-party data aggregation and sale",
      details: "Data brokers collect information from multiple sources, creating comprehensive profiles sold to advertisers, employers, and other entities.",
      color: "#8000ff",
      position: { x: 50, y: 80 },
      dataTypes: ["Aggregated Profiles", "Purchase History", "Demographics", "Behavioral Patterns"]
    },
    {
      id: 8,
      title: "Government Surveillance",
      icon: Eye,
      description: "Law enforcement and intelligence agencies",
      details: "Government agencies can access stored data through legal processes, creating permanent records in intelligence databases.",
      color: "#ff0080",
      position: { x: 30, y: 100 },
      dataTypes: ["Surveillance Records", "Legal Requests", "Intelligence Files", "Monitoring Data"]
    }
  ];

  const dataFlowConnections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
    { from: 2, to: 6 },
    { from: 5, to: 6 },
    { from: 6, to: 7 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveStep((prev) => (prev + 1) % storageSteps.length);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  useEffect(() => {
    // Generate matrix columns
    const generateMatrix = () => {
      const columns = [];
      const columnCount = 40;
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      
      for (let i = 0; i < columnCount; i++) {
        columns.push({
          id: i,
          x: (i / columnCount) * 100,
          chars: Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)]),
          speed: 0.5 + Math.random() * 2,
          opacity: 0.3 + Math.random() * 0.4
        });
      }
      setMatrixColumns(columns);
    };

    generateMatrix();
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
    
    // Smooth scroll to step details
    setTimeout(() => {
      const detailsSection = document.querySelector('#step-details');
      if (detailsSection) {
        detailsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <section id="data-storage" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 glow-text">
            <span className="text-cyan-400">DATA</span>{' '}
            <span className="text-pink-500">JOURNEY</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto">
            Follow your data through the complex web of storage, replication, and archival systems
          </p>
          <div className="text-lg md:text-xl text-yellow-400 font-semibold">
            Click any step to explore the process in detail
          </div>
        </motion.div>

        {/* Interactive Data Flow Visualization */}
        <div className="relative mb-20">
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-12 cyber-border holographic">
            {/* Data Flow Canvas */}
            <div className="relative h-96 md:h-[600px] overflow-hidden rounded-2xl bg-black border-2 border-green-400/30">
              
              {/* Matrix Background */}
              <div className="absolute inset-0 overflow-hidden">
                {matrixColumns.map((column) => (
                  <div
                    key={column.id}
                    className="absolute top-0 text-green-400 font-mono text-sm leading-tight"
                    style={{ 
                      left: `${column.x}%`,
                      opacity: column.opacity,
                      fontSize: '12px'
                    }}
                  >
                    {column.chars.map((char, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ 
                          y: [0, 600],
                          opacity: [1, 0.8, 0]
                        }}
                        transition={{
                          duration: 8 / column.speed,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "linear"
                        }}
                        className="block"
                        style={{
                          textShadow: '0 0 5px #00ff41',
                          filter: index === 0 ? 'brightness(1.5)' : 'brightness(0.7)'
                        }}
                      >
                        {char}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Overlay for better node visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {dataFlowConnections.map((connection, index) => {
                  const fromStep = storageSteps[connection.from];
                  const toStep = storageSteps[connection.to];
                  return (
                    <motion.line
                      key={index}
                      x1={`${fromStep.position.x}%`}
                      y1={`${fromStep.position.y}%`}
                      x2={`${toStep.position.x}%`}
                      y2={`${toStep.position.y}%`}
                      stroke="rgba(0, 255, 65, 0.6)"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      filter="drop-shadow(0 0 3px #00ff41)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </svg>

              {/* Storage Step Nodes */}
              {storageSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={step.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                    style={{ 
                      left: `${step.position.x}%`, 
                      top: `${step.position.y}%` 
                    }}
                    whileHover={{ scale: 1.2, z: 10 }}
                    onClick={() => handleStepClick(index)}
                  >
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center relative backdrop-blur-sm ${
                        isActive 
                          ? 'border-white bg-black/80 shadow-2xl' 
                          : 'border-green-400/60 bg-black/60 hover:border-green-400'
                      }`}
                      style={{ 
                        borderColor: isActive ? step.color : undefined,
                        boxShadow: isActive ? `0 0 30px ${step.color}, inset 0 0 20px rgba(0,0,0,0.8)` : '0 0 10px rgba(0,255,65,0.3), inset 0 0 20px rgba(0,0,0,0.8)'
                      }}
                      animate={isActive ? { 
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      } : {}}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    >
                      <IconComponent 
                        size={isActive ? 32 : 24} 
                        style={{ 
                          color: isActive ? step.color : '#00ff41',
                          filter: 'drop-shadow(0 0 5px currentColor)'
                        }}
                      />
                      
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: step.color }}
                          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                    
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                      <div className={`text-sm font-bold whitespace-nowrap font-mono ${
                        isActive ? 'text-white' : 'text-green-400'
                      }`} style={{ textShadow: '0 0 5px currentColor' }}>
                        Step {step.id}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Step Information */}
        <AnimatePresence mode="wait">
          <motion.div
            id="step-details"
            key={activeStep}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Step Details */}
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-10 cyber-border">
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(storageSteps[activeStep].icon, {
                  size: 48,
                  style: { color: storageSteps[activeStep].color }
                })}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {storageSteps[activeStep].title}
                  </h3>
                  <p className="text-xl text-gray-300">
                    {storageSteps[activeStep].description}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {storageSteps[activeStep].details}
              </p>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-4">Data Types Collected:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {storageSteps[activeStep].dataTypes.map((type, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: storageSteps[activeStep].color }}
                      />
                      {type}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy Impact Assessment */}
            <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-10 cyber-border">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <AlertTriangle size={32} />
                Privacy Impact
              </h3>
              
              <div className="space-y-6">
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-3">Risk Level: HIGH</h4>
                  <p className="text-gray-300 text-lg">
                    At this stage, your data becomes increasingly difficult to control or delete. 
                    Multiple copies exist across different systems and jurisdictions.
                  </p>
                </div>

                <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-yellow-400 mb-3">Retention Period</h4>
                  <p className="text-gray-300 text-lg">
                    Data at this stage is typically retained for 7-10 years minimum, 
                    with some archives keeping information indefinitely.
                  </p>
                </div>

                <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-3">Access Control</h4>
                  <p className="text-gray-300 text-lg">
                    Your data can be accessed by platform employees, government agencies, 
                    data brokers, and potentially malicious actors through breaches.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Data Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "2.5", unit: "Quintillion", label: "Bytes Created Daily", icon: Database },
            { number: "90%", unit: "", label: "Of Data Created in Last 2 Years", icon: Clock },
            { number: "328", unit: "Million", label: "Terabytes Stored by Google", icon: Server },
            { number: "∞", unit: "", label: "Years Your Data Persists", icon: Archive }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl cyber-border text-center holographic"
            >
              <stat.icon size={48} className="text-cyan-400 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white glow-text mb-2">
                {stat.number}
              </div>
              <div className="text-xl text-pink-400 font-semibold mb-2">
                {stat.unit}
              </div>
              <div className="text-lg text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-2xl p-12 border-2 border-red-500"
        >
          <Shield size={64} className="text-red-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-red-400 mb-6">
            Your Data's Journey Never Ends
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Once your data enters this ecosystem, it becomes nearly impossible to completely remove. 
            Understanding this process is the first step toward protecting your digital privacy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xl transition-all duration-300"
          >
            Learn Protection Strategies
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DataStorageSection;