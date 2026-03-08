// src/components/Home/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiDownload, FiFolder, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../utils/constants';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
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
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4"
            >
              {personalInfo.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start"
            >
              {/* Projects Button  */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiFolder className="group-hover:rotate-12 transition-transform duration-300" />
                  View Projects
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Resume Button */}
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

            {/* Quick Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">8</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">30+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
            </motion.div> */}

            {/* Social Links - Moved LinkedIn here as secondary */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4 mt-6 justify-center lg:justify-start"
            >
              <span className="text-sm text-gray-500 dark:text-gray-500">Connect:</span>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FiGithub size={18} />
              </motion.a>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Avatar */}
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
                      //   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                  </div>
                  
                  {/* Avatar Details */}
                  {/* <div className="text-center">
                    <h3 className="font-bold text-gray-900 dark:text-white">Ahmed Eid</h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400">Full Stack Developer</p>
                  </div> */}
                  
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

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
// import { personalInfo } from '../utils/constants';

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center pt-16">
//       <div className="section-container">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
//               Hi, I'm{' '}
//               <span className="gradient-text">{personalInfo.name}</span>
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4">
//               {personalInfo.role}
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
//               {personalInfo.tagline}
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={personalInfo.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
//               >
//                 <FiLinkedin /> Projects
//               </motion.a>
//               {/* <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={personalInfo.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
//               >
//                 <FiGithub /> GitHub
//               </motion.a> */}
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={personalInfo.resumeUrl}
//                 download
//                 className="flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-all"
//               >
//                 <FiDownload /> Resume
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Right Content - Avatar */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 animate-float">
//               <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
//                 <img
//                   src={personalInfo.image}
//                   alt={personalInfo.title}
//                   className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center"
//                 //   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* <span className="text-6xl">👨‍💻</span> */}
//               </div>
//             </div>
            
//             {/* Decorative elements */}
//             <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-50"></div>
//             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 dark:bg-primary-800 rounded-full blur-3xl opacity-50"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;