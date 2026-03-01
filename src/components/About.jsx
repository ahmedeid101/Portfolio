import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiAward, FiBook } from 'react-icons/fi';
import { personalInfo, timeline } from '../utils/constants';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (item) => {
    if (item.title.includes('Senior')) return <FiBriefcase className="text-primary-600" />;
    if (item.title.includes('B.Sc')) return <FiBook className="text-primary-600" />;
    return <FiAward className="text-primary-600" />;
  };

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary-600 text-2xl">2+</h4>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <h4 className="font-bold text-primary-600 text-2xl">10+</h4>
                <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Journey & Experience
            </h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-8 pb-4 border-l-2 border-primary-200 dark:border-primary-800 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                  <div className="flex items-center gap-2 mb-1">
                    {getIcon(item)}
                    <span className="text-sm font-semibold text-primary-600">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;