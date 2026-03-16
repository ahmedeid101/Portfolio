import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiUser, 
  FiBriefcase, 
  FiTarget, 
  FiHeart,
  FiCode,
  FiUsers,
  FiClock,
  FiMapPin,
  FiCalendar,
  FiMonitor, 
  FiServer, 
  FiDatabase, 
  FiSettings,
} from 'react-icons/fi';
import { personalInfo, timeline } from '../utils/constants';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter timeline items by type
  const workExperience = timeline.filter(item => 
    item.title.includes('Developer') || 
    item.title.includes('Lead') || 
    item.title.includes('Senior')
  );

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            A dedicated Full Stack Developer with a passion for creating elegant solutions
          </p>
        </motion.div>

        {/* SECTION 1: PROFESSIONAL SUMMARY - Full Width */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Summary
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Summary Card */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image/Icon */}
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-1 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                    <FiUser className="w-14 h-14 text-primary-600" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
              </div>

              {/* Summary Text */}
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">2+ Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCode className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">10+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiTarget className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Mission</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build scalable, user-centric applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiHeart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Passion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clean code & performance optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiClock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Approach</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Agile, TDD, continuous learning</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 2: EXPERIENCE & EDUCATION - Side by Side */}
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Work Experience Column */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <FiBriefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full ml-auto">
                {workExperience.length} Positions
              </span>
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  variants={cardHover}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  {/* Timeline Accent Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-green-600 rounded-l-2xl"></div>
                  
                  <div className="ml-4">
                    {/* Year Badge */}
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full mb-3">
                      {item.year}
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                      {item.organization}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    {/* Responsibilities Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300">
                        Team Leadership
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300">
                        Architecture
                      </span>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300">
                        Mentoring
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </div>
 

        {/* SECTION 3: ACHIEVEMENTS - Full Width Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold mb-1">2+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold mb-1">10+</div>
            <div className="text-sm opacity-90">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="text-sm opacity-90">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold mb-1">10+</div>
            <div className="text-sm opacity-90">Happy Clients</div>
          </div>
        </motion.div>

        {/* SECTION 4: WHAT I DO - Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What I Do Best
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FiMonitor className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
              <p className="text-xs text-gray-500">React, Next.js, Tailwind</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <FiServer className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
              <p className="text-xs text-gray-500">Node.js, Express, Python</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <FiDatabase className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Database</h4>
              <p className="text-xs text-gray-500">MongoDB, PostgreSQL, Redis</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <FiSettings className="w-6 h-6 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">DevOps</h4>
              <p className="text-xs text-gray-500">Docker, AWS, CI/CD</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            View All Skills
            <FiBriefcase className="group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;