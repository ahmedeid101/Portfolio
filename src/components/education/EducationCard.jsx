// src/components/Education/EducationCard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCheckCircle, FiAward, FiExternalLink, FiChevronDown } from 'react-icons/fi';

const EducationCard = ({ item, isSelected, onClick }) => {
  const [showAllActivities, setShowAllActivities] = useState(false);

  return (
    <motion.div
      layout
      className="group relative h-full"
    >
      {/* Main Card */}
      <div 
        onClick={onClick}
        className={`h-full min-h-[480px] ${item.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden flex flex-col`}
      >
        {/* Decorative Background */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${item.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:opacity-10 transition-opacity`} />
        
        {/* Content - Flex column to fill height */}
        <div className="relative flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-3 flex-shrink-0">
            <div className={`p-3 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
              <item.logo className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
            </div>
            
            {/* Grade Badge */}
            {item.grade && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full shadow-lg">
                {item.grade}
              </span>
            )}
          </div>
          
          {/* Institution */}
          <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1 truncate flex-shrink-0">
            {item.institution}
          </h3>
          
          {/* Degree - Fixed height with 2 lines */}
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[56px] flex-shrink-0">
            {item.degree}
          </h4>
          
          {/* Faculty */}
          {item.faculty && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-1 flex-shrink-0">
              {item.faculty}
            </p>
          )}
          
          {/* Date and Location */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{item.period}</span>
            </div>
            <span className="flex-shrink-0">•</span>
            <div className="flex items-center gap-1">
              <FiMapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{item.location}</span>
            </div>
          </div>
          
          {/* Activities Section - Scrollable */}
          <div className="flex-1 min-h-0 mb-3">
            <div className="h-full overflow-y-auto pr-1 custom-scrollbar">
              <div className="space-y-1.5">
                {item.activities.slice(0, showAllActivities ? item.activities.length : 2).map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                  </div>
                ))}
              </div>
              
              {/* Show More/Less Button */}
              {item.activities.length > 2 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAllActivities(!showAllActivities);
                  }}
                  className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium flex items-center gap-1 mt-2"
                >
                  {showAllActivities ? 'Show less' : `+${item.activities.length - 2} more activities`}
                  <FiChevronDown className={`w-3 h-3 transition-transform ${showAllActivities ? 'rotate-180' : ''}`} />
                </button>
              )}
              
              {/* Achievements Preview */}
              {item.achievements && !showAllActivities && (
                <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 block mb-1">
                    Key Achievement:
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.achievements[0]}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {item.status}
            </span>
            <motion.div
              animate={{ rotate: isSelected ? 180 : 0 }}
              className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md text-gray-600"
            >
              <FiExternalLink className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expanded Details Modal */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClick}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education Details</h3>
                <button
                  onClick={onClick}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <FiExternalLink className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Degree</h4>
                  <p className="text-gray-900 dark:text-white">{item.degree}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Faculty</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.faculty}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Period</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.period}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Grade</h4>
                  <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    {item.grade}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Achievements</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {item.achievements?.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">All Activities</h4>
                  <ul className="space-y-2">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EducationCard;