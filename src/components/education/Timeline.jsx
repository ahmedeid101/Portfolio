// src/components/Education/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//import {timeline} from '../../utils/constants'

const timelineData = [
  { year: '2018', event: 'Started BSc in System and Computer Engineering', institution: 'Al-Azhar University', icon: '🎓' },
  { year: '2022', event: 'Completed Python for Everybody Specialization', institution: 'University of Michigan', icon: '🐍' },
  { year: '2022', event: 'Completed OOP in Java Specialization', institution: 'Duke University', icon: '☕' },
  { year: '2023', event: 'Completed CS50X', institution: 'Harvard University', icon: '💻' },
  { year: '2023', event: 'Completed Data Structures & Algorithms', institution: 'UC San Diego', icon: '🔍' },
  { year: '2023', event: 'Front End Web Development Professional', institution: 'Udacity', icon: '🎨' },
  { year: '2023', event: 'Advanced Full-Stack Web Development', institution: 'Udacity', icon: '⚛️' },
  { year: '2023', event: 'Graduated with BSc Degree', institution: 'Al-Azhar University', icon: '👨‍🎓' },
  { year: '2023', event: 'Mean Stack Development', institution: 'ITI', icon: '🔄' }
];

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-300 via-primary-600 to-primary-300 hidden lg:block" />
      
      <div className="space-y-8 relative">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
            
            <div className="hidden lg:block w-4 h-4 rounded-full bg-primary-600 ring-4 ring-primary-100 dark:ring-primary-900 z-10" />
            
            <div className="lg:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;