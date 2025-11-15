import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, AlertTriangle, Eye, Database, Archive, Globe, 
  Clock, MapPin, Camera, MessageCircle, Heart, Share2,
  Shield, Lock, Unlock, Server, Cloud, Wifi, ExternalLink,
  User, Calendar, Phone, Mail, Home, Briefcase
} from 'lucide-react';

const GoogleSimulation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchStage, setSearchStage] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [dataPoints, setDataPoints] = useState(0);

  const searchStages = [
    "Initializing search crawlers...",
    "Scanning social media platforms...",
    "Accessing cached web pages...",
    "Querying archived databases...",
    "Cross-referencing public records...",
    "Analyzing image metadata...",
    "Processing location data...",
    "Compiling digital footprint...",
    "Search complete - Results found!"
  ];

  const mockResultsDatabase = {
    'john': [
      { 
        type: 'social', 
        title: 'John Smith - Facebook Profile', 
        url: 'facebook.com/john.smith.12345', 
        snippet: 'Public posts from 2018-2024 • 847 photos • 1,234 friends • Location: New York',
        icon: User,
        risk: 'high',
        details: 'Personal information, family photos, check-ins at restaurants and events'
      },
      { 
        type: 'professional', 
        title: 'John Smith - LinkedIn Professional Profile', 
        url: 'linkedin.com/in/johnsmith-engineer', 
        snippet: 'Software Engineer at TechCorp • Previous: StartupXYZ • Education: MIT 2016',
        icon: Briefcase,
        risk: 'medium',
        details: 'Employment history, professional connections, skills endorsements'
      },
      { 
        type: 'cached', 
        title: 'Cached: John\'s Personal Blog (Deleted)', 
        url: 'webcache.googleusercontent.com/search?q=cache:johnsblog.com', 
        snippet: 'Cached version from 6 months ago - "My thoughts on cryptocurrency investments"',
        icon: Archive,
        risk: 'high',
        details: 'Personal opinions, financial interests, deleted content still accessible'
      },
      { 
        type: 'archive', 
        title: 'Wayback Machine: John\'s College Website', 
        url: 'web.archive.org/web/20180315/college.edu/~jsmith', 
        snippet: 'Student page from 2018 • Contact info • Course projects • Personal interests',
        icon: Clock,
        risk: 'medium',
        details: 'Old contact information, academic projects, youthful indiscretions'
      },
      { 
        type: 'news', 
        title: 'Local News: "Tech Meetup Organizer John Smith"', 
        url: 'localnews.com/tech-meetup-2023', 
        snippet: 'Featured in community tech event coverage • Photo included • Quoted extensively',
        icon: Globe,
        risk: 'low',
        details: 'Public speaking engagement, professional reputation, community involvement'
      },
      { 
        type: 'images', 
        title: 'Google Images: 127 photos found', 
        url: 'images.google.com/search?q=john+smith+nyc', 
        snippet: 'Profile photos, event pictures, group photos from various sources',
        icon: Camera,
        risk: 'high',
        details: 'Facial recognition matches, location metadata, associated individuals'
      },
      { 
        type: 'records', 
        title: 'Public Records: Property & Voting Information', 
        url: 'publicrecords.com/john-smith-ny', 
        snippet: 'Property ownership records • Voter registration • Court documents',
        icon: Home,
        risk: 'medium',
        details: 'Home address, property value, political affiliation, legal history'
      },
      { 
        type: 'data-breach', 
        title: 'Data Breach Alert: Email found in 3 breaches', 
        url: 'haveibeenpwned.com/breaches', 
        snippet: 'john.smith@email.com found in LinkedIn (2021), Adobe (2019), Dropbox (2016)',
        icon: Shield,
        risk: 'critical',
        details: 'Compromised passwords, personal data exposed, identity theft risk'
      }
    ],
    'sarah': [
      { 
        type: 'social', 
        title: 'Sarah Johnson - Instagram Profile', 
        url: 'instagram.com/sarah_j_adventures', 
        snippet: 'Travel blogger • 15.2K followers • 2,847 posts • Location services enabled',
        icon: Camera,
        risk: 'high',
        details: 'Real-time location sharing, personal relationships, lifestyle patterns'
      },
      { 
        type: 'professional', 
        title: 'Sarah Johnson - Marketing Director Profile', 
        url: 'company.com/team/sarah-johnson', 
        snippet: 'Marketing Director at GlobalCorp • MBA from Stanford • 8 years experience',
        icon: Briefcase,
        risk: 'medium',
        details: 'Professional achievements, salary estimates, corporate connections'
      },
      { 
        type: 'cached', 
        title: 'Cached: Dating Profile (Deleted Account)', 
        url: 'webcache.googleusercontent.com/dating-app-profile', 
        snippet: 'Cached dating profile from 2022 • Personal preferences • Relationship status',
        icon: Heart,
        risk: 'high',
        details: 'Personal preferences, relationship history, intimate details'
      }
    ],
    'mike': [
      { 
        type: 'social', 
        title: 'Mike Chen - Twitter/X Profile', 
        url: 'twitter.com/mike_chen_dev', 
        snippet: 'Full-stack developer • 5.7K followers • Tweets about tech, politics, personal life',
        icon: MessageCircle,
        risk: 'medium',
        details: 'Political opinions, personal thoughts, professional network'
      },
      { 
        type: 'github', 
        title: 'Mike Chen - GitHub Developer Profile', 
        url: 'github.com/mikechen', 
        snippet: '247 repositories • 1.2K followers • Contributions to major open source projects',
        icon: Database,
        risk: 'low',
        details: 'Coding skills, project history, collaboration patterns'
      }
    ]
  };

  const getRandomResults = (name) => {
    const baseResults = mockResultsDatabase[name.toLowerCase()] || [];
    const additionalResults = [
      { 
        type: 'email', 
        title: `${name} - Email Address Verification`, 
        url: 'email-verification-service.com', 
        snippet: `${name.toLowerCase()}@gmail.com verified • Associated with 12 online accounts`,
        icon: Mail,
        risk: 'medium',
        details: 'Email linked to multiple services, potential spam target'
      },
      { 
        type: 'phone', 
        title: `Phone Number Lookup: ${name}`, 
        url: 'reverse-phone-lookup.com', 
        snippet: 'Phone number found in public directories • Carrier: Verizon • Location: NYC area',
        icon: Phone,
        risk: 'high',
        details: 'Personal phone number, carrier information, approximate location'
      }
    ];
    
    return [...baseResults, ...additionalResults.slice(0, Math.floor(Math.random() * 2) + 1)];
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    setSearchStage(0);
    setResults([]);
    setDataPoints(0);
    setShowWarning(false);

    // Simulate search stages
    for (let i = 0; i < searchStages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSearchStage(i);
      setDataPoints(prev => prev + Math.floor(Math.random() * 50) + 20);
    }

    // Show results
    const searchResults = getRandomResults(searchTerm);
    setResults(searchResults);
    setIsSearching(false);
    setShowWarning(true);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'critical': return 'text-red-500 border-red-500';
      case 'high': return 'text-orange-500 border-orange-500';
      case 'medium': return 'text-yellow-500 border-yellow-500';
      case 'low': return 'text-green-500 border-green-500';
      default: return 'text-gray-500 border-gray-500';
    }
  };

  const getRiskIcon = (risk) => {
    switch (risk) {
      case 'critical': return <Unlock className="text-red-500" size={20} />;
      case 'high': return <Shield className="text-orange-500" size={20} />;
      case 'medium': return <Eye className="text-yellow-500" size={20} />;
      case 'low': return <Lock className="text-green-500" size={20} />;
      default: return <Shield className="text-gray-500" size={20} />;
    }
  };

  return (
    <section id="simulation" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 glow-text">
            <span className="text-cyan-400">GOOGLE</span>{' '}
            <span className="text-pink-500">YOURSELF</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Experience the comprehensive digital investigation process
          </p>
          <div className="text-lg md:text-xl text-yellow-400 font-semibold">
            See exactly what the internet remembers about you
          </div>
        </motion.div>

        {/* Enhanced Search Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl cyber-border mb-12 holographic"
        >
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter a name to investigate (try: John, Sarah, Mike)..."
                className="w-full bg-gray-800/80 border-2 border-gray-600 rounded-xl px-6 py-4 text-white text-xl focus:border-cyan-400 focus:outline-none transition-all duration-300"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                disabled={isSearching}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Globe className="text-gray-400" size={24} />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              disabled={isSearching}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black rounded-xl font-bold text-xl hover:from-pink-500 hover:to-purple-600 disabled:opacity-50 transition-all duration-300 flex items-center gap-3"
            >
              {isSearching ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Search size={24} />
                  </motion.div>
                  INVESTIGATING...
                </>
              ) : (
                <>
                  <Search size={24} />
                  INVESTIGATE
                </>
              )}
            </motion.button>
          </div>

          {/* Search Progress */}
          <AnimatePresence>
            {isSearching && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {searchStages[searchStage]}
                    </div>
                    <div className="text-pink-400 font-bold">
                      {dataPoints.toLocaleString()} data points found
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-400 to-pink-500 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((searchStage + 1) / searchStages.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Warning Banner */}
          <AnimatePresence>
            {showWarning && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-900/50 border-2 border-red-500 rounded-lg p-6 mb-8 flex items-center gap-4"
              >
                <AlertTriangle size={32} className="text-red-400 animate-pulse" />
                <div>
                  <p className="font-bold text-red-400 text-xl mb-2">
                    PRIVACY ALERT: Digital Footprint Detected
                  </p>
                  <p className="text-red-300 text-lg">
                    The internet has permanently stored extensive information about this person. 
                    Think carefully before posting - your data lives forever.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Results Display */}
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Results Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-8 cyber-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400">{results.length}</div>
                    <div className="text-lg text-gray-300">Sources Found</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-pink-400">{dataPoints.toLocaleString()}</div>
                    <div className="text-lg text-gray-300">Data Points</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-orange-400">
                      {results.filter(r => r.risk === 'high' || r.risk === 'critical').length}
                    </div>
                    <div className="text-lg text-gray-300">High Risk Items</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-400">∞</div>
                    <div className="text-lg text-gray-300">Years Stored</div>
                  </div>
                </div>
              </motion.div>

              {/* Individual Results */}
              {results.map((result, index) => {
                const IconComponent = result.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-gray-900/80 backdrop-blur-lg p-8 rounded-xl border-l-4 ${getRiskColor(result.risk)} hover-glow cursor-pointer`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`p-4 rounded-lg bg-gray-800 border-2 ${getRiskColor(result.risk)}`}>
                          <IconComponent size={32} className={getRiskColor(result.risk).split(' ')[0]} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-cyan-400 font-bold text-xl">{result.title}</h3>
                          {getRiskIcon(result.risk)}
                          <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase ${getRiskColor(result.risk)} bg-gray-800`}>
                            {result.risk} RISK
                          </span>
                        </div>
                        
                        <p className="text-green-400 text-lg mb-3 font-mono">{result.url}</p>
                        <p className="text-gray-300 text-lg mb-4">{result.snippet}</p>
                        
                        <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <p className="text-yellow-300 font-semibold mb-2">Privacy Impact:</p>
                          <p className="text-gray-300">{result.details}</p>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <ExternalLink size={24} className="text-gray-400 hover:text-cyan-400 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: results.length * 0.1 + 0.5 }}
                className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-8 border-2 border-red-500 text-center"
              >
                <Shield size={48} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-red-400 mb-4">
                  Your Digital Privacy is at Risk
                </h3>
                <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                  This simulation shows just a fraction of what's actually available. 
                  Real data brokers have access to thousands more data points about you.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-colors"
                >
                  Learn How to Protect Yourself
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GoogleSimulation;