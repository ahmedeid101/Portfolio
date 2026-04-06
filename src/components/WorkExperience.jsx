import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiMapPin, 
  FiCalendar, 
  FiTarget, 
  FiZap, 
  FiAward,
} from 'react-icons/fi';

const WorkExperience = ({ experiences }) => {
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

  // Helper function to get color based on card type
  const getGradientColors = (index) => {
    const gradients = [
      { from: "from-blue-500", to: "to-blue-600", light: "from-blue-50 to-blue-100", border: "border-blue-200" },
      { from: "from-green-500", to: "to-green-600", light: "from-green-50 to-green-100", border: "border-green-200" },
      { from: "from-purple-500", to: "to-purple-600", light: "from-purple-50 to-purple-100", border: "border-purple-200" },
      { from: "from-orange-500", to: "to-orange-600", light: "from-orange-50 to-orange-100", border: "border-orange-200" },
      { from: "from-pink-500", to: "to-pink-600", light: "from-pink-50 to-pink-100", border: "border-pink-200" },
      { from: "from-teal-500", to: "to-teal-600", light: "from-teal-50 to-teal-100", border: "border-teal-200" }
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="space-y-8">
      {experiences.map((item, index) => {
        const colors = getGradientColors(index);
        
        return (
          <motion.div
            key={index}
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={cardHover}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            {/* Decorative top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.from} ${colors.to}`}></div>
            
            <div className="p-6 md:p-8">
              {/* Header Section */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${colors.from} ${colors.to} bg-opacity-10`}>
                      <FiBriefcase className={`w-5 h-5 text-white`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Organization and Location */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 ml-9">
                    <div className="flex items-center gap-1">
                      <span>📂</span>
                      <span>{item.organization}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <FiCalendar className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Challenge Section */}
              {item.challenge && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <FiTarget className="w-4 h-4 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Challenge</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 pl-9 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              )}

              {/* Action Section */}
              {item.action && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FiZap className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Action</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 pl-9 leading-relaxed">
                    {item.action}
                  </p>
                </div>
              )}

              {/* Result Section */}
              {item.result && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FiAward className="w-4 h-4 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Result</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 pl-9 leading-relaxed">
                    {item.result}
                  </p>
                </div>
              )}

            {/* Technologies/Tags */}
            {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 ml-9 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {item.technologies.map((tech, idx) => (
                <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-white border border-gray-700"
                >
                    {tech}
                </span>
                ))}
            </div>
            )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkExperience;