import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Database, Archive, Globe, Server, Cloud, 
  Eye, Shield, AlertTriangle, Clock, Zap, Activity,
  ArrowRight, ArrowDown, Wifi, HardDrive, Lock, Unlock
} from 'lucide-react';

const DataRetrievalSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [searchProgress, setSearchProgress] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [foundData, setFoundData] = useState([]);
  const [matrixColumns, setMatrixColumns] = useState([]);

  const retrievalSteps = [
    {
      id: 1,
      title: "Search Query Initiated",
      icon: Search,
      description: "User enters search terms",
      details: "When you search for someone or something, the query is logged and processed through multiple systems simultaneously.",
      color: "#00f5ff",
      duration: 1000,
      sources: ["Google", "Bing", "DuckDuckGo", "Social Media"]
    },
    {
      id: 2,
      title: "Live Database Scan",
      icon: Database,
      description: "Active databases are queried",
      details: "Search engines scan billions of active web pages, social media posts, and public databases in real-time.",
      color: "#ff0080",
      duration: 1500,
      sources: ["Social Media APIs", "Public Records", "News Sites", "Forums"]
    },
    {
      id: 3,
      title: "Cache Retrieval",
      icon: Server,
      description: "Cached versions accessed",
      details: "Even if content was deleted, cached versions stored on servers worldwide can still be accessed and displayed.",
      color: "#8000ff",
      duration: 2000,
      sources: ["Google Cache", "CDN Servers", "Proxy Caches", "ISP Caches"]
    },
    {
      id: 4,
      title: "Archive Excavation",
      icon: Archive,
      description: "Historical archives searched",
      details: "Services like Wayback Machine contain snapshots of web content going back decades, preserving deleted information.",
      color: "#00ff41",
      duration: 2500,
      sources: ["Wayback Machine", "Archive.today", "Library Archives", "Government Records"]
    },
    {
      id: 5,
      title: "Deep Web Mining",
      icon: HardDrive,
      description: "Hidden databases accessed",
      details: "Specialized search tools can access deep web databases, leaked information, and data broker repositories.",
      color: "#ff8000",
      duration: 3000,
      sources: ["Data Brokers", "Leaked Databases", "Court Records", "Professional Networks"]
    },
    {
      id: 6,
      title: "Results Compilation",
      icon: Globe,
      description: "Information aggregated and displayed",
      details: "All found information is compiled, cross-referenced, and presented in search results, often revealing more than expected.",
      color: "#ff0080",
      duration: 500,
      sources: ["Search Results", "Related Links", "Suggested Content", "Ad Targeting"]
    }
  ];

  const mockDataSources = [
    { type: "social", name: "Facebook Profile", risk: "high", year: "2019-2024" },
    { type: "cached", name: "Deleted Blog Post", risk: "critical", year: "2021" },
    { type: "archive", name: "Old Website", risk: "medium", year: "2018" },
    { type: "news", name: "News Mention", risk: "low", year: "2022" },
    { type: "records", name: "Public Records", risk: "high", year: "2020" },
    { type: "breach", name: "Data Breach", risk: "critical", year: "2019" },
    { type: "images", name: "Photo Metadata", risk: "high", year: "2021-2024" },
    { type: "professional", name: "LinkedIn", risk: "medium", year: "2020-2024" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSearching) {
        setActiveDemo((prev) => (prev + 1) % retrievalSteps.length);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isSearching]);

  useEffect(() => {
    const generateMatrix = () => {
      const columns = [];
      const columnCount = 30;
      const chars = '01ABCDEFアイウエオカキクケコ';
      
      for (let i = 0; i < columnCount; i++) {
        columns.push({
          id: i,
          x: (i / columnCount) * 100,
          chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)]),
          speed: 1 + Math.random() * 2,
          opacity: 0.2 + Math.random() * 0.3
        });
      }
      setMatrixColumns(columns);
    };

    generateMatrix();
  }, []);

  const startSearchDemo = async () => {
    setIsSearching(true);
    setSearchProgress(0);
    setFoundData([]);

    for (let i = 0; i < retrievalSteps.length; i++) {
      setActiveDemo(i);
      
      // Simulate search progress
      const step = retrievalSteps[i];
      const progressIncrement = 100 / retrievalSteps.length;
      
      for (let progress = 0; progress <= progressIncrement; progress += 2) {
        setSearchProgress((i * progressIncrement) + progress);
        await new Promise(resolve => setTimeout(resolve, step.duration / (progressIncrement / 2)));
      }

      // Add found data for this step
      const stepData = mockDataSources.filter((_, index) => index <= i);
      setFoundData(stepData);
    }

    setIsSearching(false);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'critical': return 'text-red-500 bg-red-900/30 border-red-500';
      case 'high': return 'text-orange-500 bg-orange-900/30 border-orange-500';
      case 'medium': return 'text-yellow-500 bg-yellow-900/30 border-yellow-500';
      case 'low': return 'text-green-500 bg-green-900/30 border-green-500';
      default: return 'text-gray-500 bg-gray-900/30 border-gray-500';
    }
  };

  return (
    <section id="data-retrieval" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 glow-text">
            <span className="text-cyan-400">DATA</span>{' '}
            <span className="text-pink-500">EXCAVATION</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto">
            Watch how deleted and hidden information resurfaces from the digital depths
          </p>
          <div className="text-lg md:text-xl text-red-400 font-semibold">
            Even "deleted" content can be recovered and exposed
          </div>
        </motion.div>

        {/* Interactive Search Demo */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-12 cyber-border holographic"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                Live Data Retrieval Simulation
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Experience how search systems excavate information from multiple sources
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={startSearchDemo}
                disabled={isSearching}
                className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-xl font-bold text-xl hover:from-pink-500 hover:to-purple-600 disabled:opacity-50 transition-all duration-300"
              >
                {isSearching ? 'EXCAVATING DATA...' : 'START EXCAVATION'}
              </motion.button>
            </div>

            {/* Search Progress */}
            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-12"
                >
                  <div className="bg-gray-800 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-cyan-400">
                        {retrievalSteps[activeDemo]?.title}
                      </div>
                      <div className="text-xl text-pink-400 font-bold">
                        {Math.round(searchProgress)}% Complete
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 h-4 rounded-full"
                        style={{ width: `${searchProgress}%` }}
                      />
                    </div>

                    <p className="text-lg text-gray-300 mb-6">
                      {retrievalSteps[activeDemo]?.details}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {retrievalSteps[activeDemo]?.sources.map((source, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-700 rounded-lg p-3 text-center"
                        >
                          <div className="text-sm text-gray-300">{source}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Found Data Display */}
            <AnimatePresence>
              {foundData.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-2xl p-8"
                >
                  <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                    <AlertTriangle size={28} />
                    Data Sources Discovered: {foundData.length}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {foundData.map((data, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-lg border-2 ${getRiskColor(data.risk)}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">{data.name}</div>
                          <div className="text-sm">{data.year}</div>
                        </div>
                        <div className={`text-sm uppercase font-bold ${getRiskColor(data.risk).split(' ')[0]}`}>
                          {data.risk} RISK
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Retrieval Process Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Process Steps */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white mb-8">Retrieval Process</h3>
            
            {retrievalSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeDemo === index;
              
              return (
                <motion.div
                  key={step.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'border-white bg-white/10 shadow-2xl' 
                      : 'border-gray-600 bg-gray-800/50 hover:border-cyan-400'
                  }`}
                  style={{ 
                    borderColor: isActive ? step.color : undefined,
                    boxShadow: isActive ? `0 0 30px ${step.color}` : undefined
                  }}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className={`p-3 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-700'}`}
                      style={{ backgroundColor: isActive ? `${step.color}20` : undefined }}
                    >
                      <IconComponent 
                        size={32} 
                        style={{ color: isActive ? step.color : '#9CA3AF' }}
                      />
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {step.title}
                      </h4>
                      <p className={`${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <p className={`text-lg ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                    {step.details}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Representation */}
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 cyber-border">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Data Recovery Visualization
            </h3>
            
            <div className="relative h-96 bg-black rounded-xl overflow-hidden border-2 border-red-400/30">
              {/* Matrix Background */}
              <div className="absolute inset-0 overflow-hidden">
                {matrixColumns.map((column) => (
                  <div
                    key={column.id}
                    className="absolute top-0 text-red-400 font-mono text-xs leading-tight"
                    style={{ 
                      left: `${column.x}%`,
                      opacity: column.opacity,
                      fontSize: '10px'
                    }}
                  >
                    {column.chars.map((char, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ 
                          y: [0, 400],
                          opacity: [1, 0.6, 0]
                        }}
                        transition={{
                          duration: 6 / column.speed,
                          repeat: Infinity,
                          delay: index * 0.15,
                          ease: "linear"
                        }}
                        className="block"
                        style={{
                          textShadow: '0 0 3px #ff0041',
                          filter: index === 0 ? 'brightness(1.5)' : 'brightness(0.8)'
                        }}
                      >
                        {char}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

              {/* Floating Data Icons */}
              {[Database, Archive, Server, Cloud, Globe, HardDrive].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl backdrop-blur-sm"
                  style={{
                    left: `${15 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 40}%`,
                    color: activeDemo === i ? '#ff0041' : '#ff6b6b',
                    filter: 'drop-shadow(0 0 8px currentColor)'
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                    scale: activeDemo === i ? [1, 1.3, 1] : 1
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon size={48} />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.line
                    key={i}
                    x1={`${20 + i * 15}%`}
                    y1="30%"
                    x2={`${35 + i * 15}%`}
                    y2="70%"
                    stroke="rgba(255, 0, 65, 0.5)"
                    strokeWidth="2"
                    strokeDasharray="6,3"
                    filter="drop-shadow(0 0 3px #ff0041)"
                    animate={{
                      strokeDashoffset: [0, -12],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-2xl p-12 border-2 border-red-500 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Unlock size={48} className="text-red-400" />
            <h3 className="text-4xl font-bold text-red-400">
              Nothing is Ever Truly Deleted
            </h3>
            <Unlock size={48} className="text-red-400" />
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            This simulation demonstrates how information persists across multiple systems. 
            Even when you delete content, copies may exist in caches, archives, backups, 
            and third-party databases indefinitely.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-red-900/30 rounded-lg p-6">
              <Clock size={32} className="text-red-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-red-400 mb-2">Time Factor</h4>
              <p className="text-gray-300">Data can be recovered years after deletion</p>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-6">
              <Shield size={32} className="text-orange-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-orange-400 mb-2">Multiple Copies</h4>
              <p className="text-gray-300">Information exists in numerous locations</p>
            </div>
            <div className="bg-yellow-900/30 rounded-lg p-6">
              <Eye size={32} className="text-yellow-400 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-yellow-400 mb-2">Public Access</h4>
              <p className="text-gray-300">Anyone can potentially access this data</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xl transition-all duration-300"
          >
            Learn Digital Protection
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DataRetrievalSection;