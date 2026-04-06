import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiTarget, FiZap, FiAward, FiMonitor, FiSmartphone, FiTablet, FiChevronRight } from 'react-icons/fi';
import { projects } from '../utils/projectsData';
import { containerVariants, itemVariants } from '../utils/animations';
import { DeviceFrame } from '../utils/frames';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development,
            API design, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section with Modern Mockup */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-6 flex items-center justify-center">
                  <DeviceFrame type={index % 2 === 0 ? 'browser' : 'laptop'}>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Floating Device Icons */}
                      <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 h-6 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <FiMonitor className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-6 h-6 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <FiSmartphone className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-6 h-6 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <FiTablet className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                  </DeviceFrame>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8">
                  {/* Title with Featured Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Challenge Section */}
                  {project.challenge && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <FiTarget className="w-4 h-4 text-red-600" />
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">Challenge</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-8">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {/* Action Section */}
                  {project.action && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <FiZap className="w-4 h-4 text-blue-600" />
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">Action</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-8">
                        {project.action}
                      </p>
                    </div>
                  )}

                  {/* Result Section */}
                  {project.result && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <FiAward className="w-4 h-4 text-green-600" />
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">Result</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-8">
                        {project.result}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6 pt-3">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:border-primary-300 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all group/link"
                      >
                        <FiGithub size={18} />
                        <span className="text-sm font-medium">View Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all group/link"
                      >
                        <FiExternalLink size={18} />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Add your GitHub profile link or projects page
              window.open('https://github.com/ahmedeid101', '_blank');
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all group"
          >
            <span>View More Projects</span>
            <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;