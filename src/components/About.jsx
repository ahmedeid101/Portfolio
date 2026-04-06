import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiBriefcase, 
  FiTarget, 
  FiHeart,
  FiCode,
  FiUsers,
  FiClock,
  FiCalendar,
} from 'react-icons/fi';
import { personalInfo, workExperiences } from '../utils/constants';
import WorkExperience from './WorkExperience';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { skillCategories } from '../utils/skills.config';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20 -scroll-mt-24">
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

        {/* Professional Summary */}
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
              {/* Profile Icon */}
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-1 shadow-lg">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                    <img src="assets/images/logo.png" alt="Profile-logo" className="w-21 h-21 rounded-2xl object-cover" />
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Active since 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCode className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Full Stack Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-primary-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Remote Friendly</span>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build scalable, user-centric apps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiHeart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Passion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clean code & performance</p>
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

        {/* Work Experience Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <FiBriefcase className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Work Experience
            </h3>
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full ml-auto">
              {workExperiences.length} Positions
            </span>
          </motion.div>

          <WorkExperience experiences={workExperiences} />
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            What I Do Best
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 mx-auto mb-3 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-lg flex items-center justify-center`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.tech}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium hover:shadow-xl transition-all inline-flex items-center gap-2 group"
          >
            View All Skills
            <FiBriefcase className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;