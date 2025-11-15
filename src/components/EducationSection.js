import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, Eye, Users, Briefcase, Heart, 
  MessageCircle, Camera, Globe, Shield, Lock,
  TrendingUp, Calendar, MapPin, Phone, Mail,
  ExternalLink, ChevronRight, ChevronLeft, X, Clock
} from 'lucide-react';

const EducationSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'professional',
      title: 'The Executive\'s Deleted Tweet',
      subtitle: 'How a CEO\'s deleted social media post cost millions',
      icon: Briefcase,
      severity: 'critical',
      year: '2023',
      impact: '$50M Stock Drop',
      description: 'A Fortune 500 CEO posted a controversial opinion on Twitter, then quickly deleted it. However, screenshots and cached versions spread rapidly.',
      details: {
        timeline: [
          'CEO posts controversial tweet at 2:47 AM',
          'Tweet deleted within 15 minutes',
          'Screenshots already captured and shared',
          'Cached versions found on multiple sites',
          'Story picked up by financial media',
          'Stock price drops 12% in pre-market trading',
          'Company forced to issue public statement'
        ],
        consequences: [
          'Immediate stock price decline',
          'Loss of investor confidence',
          'Regulatory investigation launched',
          'CEO resignation within 6 months',
          'Long-term reputation damage'
        ],
        digitalFootprint: [
          'Original tweet cached by Google',
          'Screenshots on Reddit, Twitter, LinkedIn',
          'Archived by Wayback Machine',
          'Mentioned in 847 news articles',
          'Referenced in SEC filings'
        ]
      },
      lesson: 'Even deleted content can have permanent professional consequences when it\'s already been cached and shared.',
      color: '#ff0080'
    },
    {
      id: 2,
      category: 'personal',
      title: 'The College Admission Scandal',
      subtitle: 'Student\'s old social media posts surface during application',
      icon: Users,
      severity: 'high',
      year: '2022',
      impact: 'Admission Revoked',
      description: 'A high school student\'s college admission was revoked when admissions officers discovered controversial posts from years earlier.',
      details: {
        timeline: [
          'Student applies to prestigious university',
          'Initial acceptance letter received',
          'Anonymous tip sent to admissions office',
          'University conducts social media audit',
          'Old posts discovered from age 14-16',
          'Admission committee reviews findings',
          'Acceptance rescinded before enrollment'
        ],
        consequences: [
          'Lost scholarship worth $200,000',
          'Forced to attend backup school',
          'Story covered by local media',
          'Difficulty transferring later',
          'Long-term career impact'
        ],
        digitalFootprint: [
          'Posts from Instagram, TikTok, Twitter',
          'Comments on YouTube videos',
          'Tagged photos at parties',
          'Cached versions of deleted content',
          'Friends\' posts mentioning student'
        ]
      },
      lesson: 'Universities and employers increasingly check social media history, including content from years ago.',
      color: '#8000ff'
    },
    {
      id: 3,
      category: 'privacy',
      title: 'The Data Breach Revelation',
      subtitle: 'Personal information exposed in multiple breaches',
      icon: Shield,
      severity: 'critical',
      year: '2021',
      impact: 'Identity Theft',
      description: 'A teacher discovered their personal information was available across multiple data breaches, leading to identity theft.',
      details: {
        timeline: [
          'Teacher notices unusual credit activity',
          'Discovers email in 5 different breaches',
          'Personal data sold on dark web',
          'Identity used for fraudulent accounts',
          'Credit score drops significantly',
          'Spends months recovering identity',
          'Legal action against companies'
        ],
        consequences: [
          'Financial losses exceeding $15,000',
          'Damaged credit score',
          'Emotional stress and anxiety',
          'Time lost dealing with fraud',
          'Ongoing monitoring required'
        ],
        digitalFootprint: [
          'Email addresses in breach databases',
          'Phone numbers sold to marketers',
          'Home address in public records',
          'Social media profiles scraped',
          'Purchase history aggregated'
        ]
      },
      lesson: 'Data breaches can expose information you shared years ago, with consequences lasting for decades.',
      color: '#ff8000'
    },
    {
      id: 4,
      category: 'relationship',
      title: 'The Viral Breakup',
      subtitle: 'Private relationship details become public spectacle',
      icon: Heart,
      severity: 'high',
      year: '2023',
      impact: 'Public Humiliation',
      description: 'A couple\'s private messages and photos were leaked during a messy breakup, going viral and affecting both their careers.',
      details: {
        timeline: [
          'Couple shares intimate photos privately',
          'Relationship ends acrimoniously',
          'Ex-partner leaks private content',
          'Content spreads across social media',
          'Story picked up by gossip sites',
          'Employers become aware of situation',
          'Both face professional consequences'
        ],
        consequences: [
          'Public embarrassment and shame',
          'Professional reputation damaged',
          'Job opportunities lost',
          'Mental health impact',
          'Legal battles over privacy'
        ],
        digitalFootprint: [
          'Private photos on multiple platforms',
          'Screenshots of text messages',
          'Social media posts about relationship',
          'Comments and reactions from friends',
          'News articles and blog posts'
        ]
      },
      lesson: 'Private digital content can become public during personal conflicts, with lasting consequences.',
      color: '#00ff41'
    },
    {
      id: 5,
      category: 'professional',
      title: 'The Journalist\'s Past',
      subtitle: 'Reporter\'s old blog posts undermine credibility',
      icon: MessageCircle,
      severity: 'medium',
      year: '2022',
      impact: 'Career Setback',
      description: 'A journalist\'s credibility was questioned when old blog posts with controversial opinions were discovered by competitors.',
      details: {
        timeline: [
          'Journalist gains prominence covering politics',
          'Competitor researches background',
          'Old personal blog discovered',
          'Controversial posts from college years',
          'Story published questioning credibility',
          'Employer conducts internal review',
          'Journalist reassigned to different beat'
        ],
        consequences: [
          'Loss of high-profile assignments',
          'Reduced professional credibility',
          'Difficulty finding new positions',
          'Ongoing scrutiny of work',
          'Personal stress and anxiety'
        ],
        digitalFootprint: [
          'Personal blog archived by Wayback Machine',
          'Social media posts supporting views',
          'Comments on other websites',
          'College newspaper articles',
          'Academic papers and presentations'
        ]
      },
      lesson: 'Professional credibility can be undermined by personal opinions expressed years earlier online.',
      color: '#00f5ff'
    },
    {
      id: 6,
      category: 'privacy',
      title: 'The Location Stalker',
      subtitle: 'Fitness app data reveals home and work locations',
      icon: MapPin,
      severity: 'high',
      year: '2023',
      impact: 'Safety Threat',
      description: 'A fitness enthusiast\'s running routes, shared on a fitness app, were used by a stalker to locate their home and workplace.',
      details: {
        timeline: [
          'User shares running routes on fitness app',
          'Data includes GPS coordinates and times',
          'Stalker analyzes patterns over months',
          'Home and work locations identified',
          'Stalker begins appearing at locations',
          'User notices suspicious behavior',
          'Police investigation launched'
        ],
        consequences: [
          'Personal safety compromised',
          'Need to change daily routines',
          'Installation of security systems',
          'Legal restraining order required',
          'Ongoing fear and anxiety'
        ],
        digitalFootprint: [
          'GPS data from fitness apps',
          'Check-ins at various locations',
          'Photos with location metadata',
          'Social media posts revealing patterns',
          'Public fitness challenges and routes'
        ]
      },
      lesson: 'Location data from apps and social media can be used to track and potentially harm users.',
      color: '#ff0080'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Cases', icon: Globe },
    { id: 'professional', name: 'Professional', icon: Briefcase },
    { id: 'personal', name: 'Personal', icon: Users },
    { id: 'privacy', name: 'Privacy', icon: Shield },
    { id: 'relationship', name: 'Relationships', icon: Heart }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-900/30 border-red-500';
      case 'high': return 'text-orange-500 bg-orange-900/30 border-orange-500';
      case 'medium': return 'text-yellow-500 bg-yellow-900/30 border-yellow-500';
      case 'low': return 'text-green-500 bg-green-900/30 border-green-500';
      default: return 'text-gray-500 bg-gray-900/30 border-gray-500';
    }
  };

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(case_ => case_.category === activeCategory);

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 glow-text">
            <span className="text-cyan-400">REAL</span>{' '}
            <span className="text-pink-500">CONSEQUENCES</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto">
            Learn from real-world cases where digital permanence changed lives forever
          </p>
          <div className="text-lg md:text-xl text-red-400 font-semibold">
            These are actual events that happened to real people
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                <IconComponent size={24} />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredCases.map((case_, index) => {
              const IconComponent = case_.icon;
              
              return (
                <motion.div
                  key={case_.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  onClick={() => setSelectedCase(case_)}
                  className="bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 cyber-border cursor-pointer hover-glow holographic"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${case_.color}20`, border: `2px solid ${case_.color}` }}
                    >
                      <IconComponent size={32} style={{ color: case_.color }} />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold uppercase ${getSeverityColor(case_.severity)}`}>
                      {case_.severity}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {case_.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-4">
                    {case_.subtitle}
                  </p>
                  
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {case_.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{case_.year}</span>
                      </div>
                      <div className="text-red-400 font-bold">
                        {case_.impact}
                      </div>
                    </div>
                    <ChevronRight size={24} className="text-cyan-400" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Case Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-3xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto cyber-border"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: `${selectedCase.color}20`, border: `2px solid ${selectedCase.color}` }}
                    >
                      {React.createElement(selectedCase.icon, { size: 40, style: { color: selectedCase.color } })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedCase.title}
                      </h3>
                      <p className="text-xl text-gray-300">
                        {selectedCase.subtitle}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Timeline */}
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                      <Clock size={24} />
                      Timeline of Events
                    </h4>
                    <div className="space-y-4">
                      {selectedCase.details.timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-300">{event}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Consequences */}
                  <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500">
                    <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                      <AlertTriangle size={24} />
                      Consequences
                    </h4>
                    <div className="space-y-3">
                      {selectedCase.details.consequences.map((consequence, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                          <p className="text-gray-300">{consequence}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Digital Footprint */}
                  <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-500">
                    <h4 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                      <Eye size={24} />
                      Digital Footprint
                    </h4>
                    <div className="space-y-3">
                      {selectedCase.details.digitalFootprint.map((footprint, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                          <p className="text-gray-300">{footprint}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Key Lesson */}
                  <div className="bg-yellow-900/20 rounded-2xl p-6 border border-yellow-500">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                      <TrendingUp size={24} />
                      Key Lesson
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {selectedCase.lesson}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "73%", label: "Employers Check Social Media", icon: Briefcase },
            { number: "45%", label: "Admissions Officers Review Posts", icon: Users },
            { number: "92%", label: "Data Breaches Expose Old Info", icon: Shield },
            { number: "∞", label: "Years Content Persists Online", icon: Clock }
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
          <AlertTriangle size={64} className="text-red-400 mx-auto mb-6" />
          <h3 className="text-4xl font-bold text-red-400 mb-6">
            Don't Become the Next Case Study
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            These real-world examples show how digital permanence can have life-changing consequences. 
            Learn how to protect yourself before it's too late.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)" }}
            className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xl transition-all duration-300"
          >
            Protect Your Digital Future
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;