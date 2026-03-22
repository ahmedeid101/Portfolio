import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../utils/constants';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 dark:bg-primary-800/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 xl:gap-32">
          {/* Left Content - Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                Available for work
              </span>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="gradient-text relative z-10">{personalInfo.name}</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200 dark:bg-primary-800/30 -z-10 rounded-lg"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4"
            >
              {personalInfo.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resumeUrl}
                download
                className="group flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FiDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar Section */}
<<<<<<< HEAD
=======
           {/* Right Content - Avatar */}
>>>>>>> 5e9ce7522b6a402713774a2c025b1953f8722175
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Avatar Container */}
            <div className="relative">
              {/* Animated Background Rings */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-primary-400/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 180]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>

              {/* Avatar Card */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-800 flex flex-col items-center justify-center overflow-hidden">
                  {/* Professional Avatar Placeholder */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600 mb-4 flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl">
                    {/* <span className="text-5xl md:text-6xl">👨‍💻</span> */}
                    <img
                        src={personalInfo.image}
                        alt={personalInfo.title}
                        className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center"
                    />
                    
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                  </div>
                  
                  {/* Tech Stack Icons */}
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-lg">⚛️</div>
                    <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-lg">🟢</div>
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-lg">🍃</div>
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-lg">📦</div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-[420px] h-[420px]">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      ⚛️
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      🟢
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      🟨
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      📦
                    </div>

                  </div>
                </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={scrollToProjects}
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;