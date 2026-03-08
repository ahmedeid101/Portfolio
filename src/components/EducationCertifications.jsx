import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiBook, 
  FiAward, 
  FiCalendar, 
  FiMapPin, 
  FiUsers,
  FiExternalLink,
  FiCheckCircle,
  FiDownload,
  FiSearch
} from 'react-icons/fi';

import { 
  SiPython,
  SiNodedotjs,
  SiUdacity,
} from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

import { GiGraduateCap } from 'react-icons/gi';

const EducationCertifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Education Data
  const education = [
    {
      id: 'edu-1',
      type: 'education',
      institution: 'Al-Azhar University',
      logo: GiGraduateCap,
      degree: 'BSc in System and Computer Engineering',
      faculty: 'Faculty of Engineering, System and Computer Department',
      location: 'Cairo, Egypt',
      period: '2018 – 2023',
      status: 'Completed',
      grade: 'Very Good',
      activities: [
        'Member, Google Developer Students Club',
        'Participated in multiple hackathons',
        'Led university coding workshops'
      ],
      achievements: [
        'Graduation Project: AI-powered Healthcare System (Grade: Excellent)',
        'Best Project Award in Faculty Competition'
      ],
      icon: FiBook,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-100 dark:bg-blue-900/40',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  // Certifications Data
  const certifications = [
    {
      id: 'cert-1',
      type: 'certification',
      title: 'CS50X',
      organization: 'Harvard University',
      logo: FaUniversity,
      issuer: 'Harvard University',
      date: '2023',
      credentialId: 'CS50X-2023-1234',
      skills: ['C', 'Python', 'SQL', 'JavaScript', 'HTML/CSS'],
      description: 'Introduction to Computer Science covering fundamental concepts, algorithms, and web development.',
      level: 'Advanced',
      hours: '120+ hours',
      link: 'https://cs50.harvard.edu/certificate',
      featured: true,
      icon: FaUniversity,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-100 dark:bg-purple-900/40',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cert-2',
      type: 'certification',
      title: 'Data Structures and Algorithms Specialization',
      organization: 'University of California San Diego',
      logo: FaUniversity,
      issuer: 'UC San Diego',
      date: '2023',
      credentialId: 'DSA-UCSD-2023-5678',
      skills: ['Algorithms', 'Data Structures', 'Java', 'Problem Solving', 'Complexity Analysis'],
      description: 'Comprehensive specialization covering algorithm design, data structures, and computational complexity.',
      level: 'Advanced',
      hours: '180+ hours',
      courses: 6,
      link: 'https://coursera.org/verify/specialization/dsa-ucsd',
      featured: true,
      icon: FaUniversity,
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-100 dark:bg-green-900/40',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      id: 'cert-3',
      type: 'certification',
      title: 'Object Oriented Programming in Java Specialization',
      organization: 'Duke University & UC San Diego',
      logo: FaUniversity,
      issuer: 'Duke University',
      date: '2022',
      credentialId: 'OOP-JAVA-2022-9012',
      skills: ['Java', 'OOP', 'Design Patterns', 'Testing', 'Debugging'],
      description: 'In-depth specialization on object-oriented programming principles and Java development.',
      level: 'Intermediate',
      hours: '150+ hours',
      courses: 4,
      link: 'https://coursera.org/verify/specialization/oop-duke',
      featured: true,
      icon: FaUniversity,
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      iconBg: 'bg-orange-100 dark:bg-orange-900/40',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'cert-4',
      type: 'certification',
      title: 'Python for Everybody Specialization',
      organization: 'University of Michigan',
      logo: SiPython,
      issuer: 'University of Michigan',
      date: '2022',
      credentialId: 'PY4E-2022-3456',
      skills: ['Python', 'Web Scraping', 'APIs', 'Databases', 'Data Analysis'],
      description: 'Comprehensive Python programming specialization covering basics to advanced topics.',
      level: 'Intermediate',
      hours: '160+ hours',
      courses: 5,
      link: 'https://coursera.org/verify/specialization/python-michigan',
      featured: true,
      icon: SiPython,
      color: 'from-yellow-600 to-amber-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/40',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      id: 'cert-5',
      type: 'certification',
      title: 'Front End Web Development Professional',
      organization: 'Udacity',
      logo: SiUdacity,
      issuer: 'Udacity',
      date: '2023',
      credentialId: 'UDACITY-FEND-2023-7890',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Web Performance'],
      description: 'Professional nanodegree program focused on modern front-end development.',
      level: 'Professional',
      hours: '200+ hours',
      projects: 5,
      link: 'https://udacity.com/certificate/fend-2023',
      featured: true,
      icon: SiUdacity,
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'cert-6',
      type: 'certification',
      title: 'Advanced Full-Stack Web Development',
      organization: 'Udacity',
      logo: SiUdacity,
      issuer: 'Udacity',
      date: '2023',
      credentialId: 'UDACITY-FULLSTACK-2023-1234',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'AWS', 'Docker'],
      description: 'Advanced nanodegree covering full-stack development with modern technologies.',
      level: 'Advanced',
      hours: '250+ hours',
      projects: 6,
      link: 'https://udacity.com/certificate/fullstack-2023',
      featured: true,
      icon: SiUdacity,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/40',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cert-7',
      type: 'certification',
      title: 'Mean Stack Development',
      organization: 'Information Technology Institute (ITI)',
      logo: SiNodedotjs,
      issuer: 'ITI',
      date: '2023',
      credentialId: 'ITI-MEAN-2023-5678',
      skills: ['MongoDB', 'Express', 'Angular', 'Node.js', 'TypeScript', 'REST APIs'],
      description: 'Intensive program on MEAN stack development with hands-on projects.',
      level: 'Professional',
      hours: '180+ hours',
      projects: 4,
      link: 'https://iti.gov.eg/certificate/mean-2023',
      featured: false,
      icon: SiNodedotjs,
      color: 'from-emerald-600 to-green-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      id: 'cert-8',
      type: 'certification',
      title: 'Developing Web Application Using Python',
      organization: 'Information Technology Institute (ITI)',
      logo: SiPython,
      issuer: 'ITI',
      date: '2022',
      credentialId: 'ITI-PYTHON-2022-9012',
      skills: ['Python', 'Django', 'Flask', 'SQL', 'REST APIs', 'Testing'],
      description: 'Comprehensive program on web development using Python frameworks.',
      level: 'Intermediate',
      hours: '150+ hours',
      projects: 3,
      link: 'https://iti.gov.eg/certificate/python-2022',
      featured: false,
      icon: SiPython,
      color: 'from-teal-600 to-cyan-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      borderColor: 'border-teal-200 dark:border-teal-800',
      iconBg: 'bg-teal-100 dark:bg-teal-900/40',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  // Combine all items
  const allItems = [...education, ...certifications];

  // Filter items based on active filter and search
  const filteredItems = allItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesSearch = searchTerm === '' || 
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.degree?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.organization?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.institution?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            A strong foundation in computer science combined with professional certifications 
            in modern web technologies. Continuously learning and staying updated with industry trends.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiBook className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">University Degree</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiAward className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">8</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Certifications</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiCalendar className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">6</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Years Learning</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <FiUsers className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">6</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Institutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
                }`}
              >
                All ({allItems.length})
              </button>
              <button
                onClick={() => setActiveFilter('education')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'education'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
                }`}
              >
                Education (1)
              </button>
              <button
                onClick={() => setActiveFilter('certification')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === 'certification'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
                }`}
              >
                Certifications (8)
              </button>
            </div>
            
            <div className="relative flex-1 max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search education or certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative"
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
              >
                {/* Main Card */}
                <div className={`h-full ${item.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden`}>
                  
                  {/* Decorative Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${item.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:opacity-10 transition-opacity`}></div>
                  
                  {/* Header */}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        {item.logo ? (
                          <item.logo className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
                        ) : (
                          <item.icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
                        )}
                      </div>
                      
                      {item.featured && (
                        <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    {/* Institution/University */}
                    <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
                      {item.organization || item.institution}
                    </h3>
                    
                    {/* Title/Degree */}
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {item.title || item.degree}
                    </h4>
                    
                    {/* Faculty (if education) */}
                    {item.faculty && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {item.faculty}
                      </p>
                    )}
                    
                    {/* Date and Location */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-500">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" />
                        <span>{item.period || item.date}</span>
                      </div>
                      {item.location && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <FiMapPin className="w-3 h-3" />
                            <span>{item.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Skills Pills (for certifications) */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white dark:bg-gray-800 text-xs rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {item.skills.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                            +{item.skills.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    
                    {/* Activities (for education) */}
                    {item.activities && (
                      <div className="mb-3">
                        {item.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-1 mb-1">
                            <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Expand Indicator */}
                    <div className="absolute bottom-4 right-4">
                      <motion.div
                        animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                        className="w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md"
                      >
                        <FiExternalLink className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details (shown when clicked) */}
                <AnimatePresence>
                  {selectedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      {/* Credential ID (for certifications) */}
                      {item.credentialId && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-500">Credential ID: </span>
                          <span className="text-xs font-mono text-gray-700 dark:text-gray-300">{item.credentialId}</span>
                        </div>
                      )}
                      
                      {/* Grade (for education) */}
                      {item.grade && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-500">Grade: </span>
                          <span className="text-xs font-semibold text-green-600">{item.grade}</span>
                        </div>
                      )}
                      
                      {/* Full Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {item.description || item.achievements?.join(' • ')}
                      </p>
                      
                      {/* All Skills (for certifications) */}
                      {item.skills && (
                        <div className="mb-3">
                          <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">All Skills:</h5>
                          <div className="flex flex-wrap gap-1">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Course Info (for certifications) */}
                      {item.courses && (
                        <div className="mb-3 text-sm">
                          <span className="font-semibold text-gray-700 dark:text-gray-300">{item.courses} courses • </span>
                          <span className="text-gray-600 dark:text-gray-400">{item.hours} total</span>
                        </div>
                      )}
                      
                      {/* Project Info (for certifications) */}
                      {item.projects && (
                        <div className="mb-3 text-sm">
                          <span className="font-semibold text-gray-700 dark:text-gray-300">{item.projects} projects completed</span>
                        </div>
                      )}
                      
                      {/* All Activities (for education) */}
                      {item.activities && (
                        <div className="mb-3">
                          <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Activities & Achievements:</h5>
                          <ul className="space-y-1">
                            {item.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                            {item.achievements?.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                <FiAward className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Certificate Link */}
                      {item.link && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                          <FiDownload className="w-4 h-4" />
                          View Certificate
                        </motion.a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Learning Journey Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-300 via-primary-600 to-primary-300 hidden lg:block"></div>
            
            <div className="space-y-8 relative">
              {[
                { year: '2018', event: 'Started BSc in System and Computer Engineering', institution: 'Al-Azhar University', icon: '🎓' },
                { year: '2022', event: 'Completed Python for Everybody Specialization', institution: 'University of Michigan', icon: '🐍' },
                { year: '2022', event: 'Completed OOP in Java Specialization', institution: 'Duke University', icon: '☕' },
                { year: '2023', event: 'Completed CS50X', institution: 'Harvard University', icon: '💻' },
                { year: '2023', event: 'Completed Data Structures & Algorithms', institution: 'UC San Diego', icon: '🔍' },
                { year: '2023', event: 'Front End Web Development Professional', institution: 'Udacity', icon: '🎨' },
                { year: '2023', event: 'Advanced Full-Stack Web Development', institution: 'Udacity', icon: '⚛️' },
                { year: '2023', event: 'Graduated with BSc Degree', institution: 'Al-Azhar University', icon: '👨‍🎓' },
                { year: '2023', event: 'Mean Stack Development', institution: 'ITI', icon: '🔄' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 inline-block max-w-md">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="text-sm font-semibold text-primary-600">{item.year}</div>
                          <h4 className="font-bold text-gray-900 dark:text-white">{item.event}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{item.institution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 rounded-full bg-primary-600 ring-4 ring-primary-100 dark:ring-primary-900 z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationCertifications;