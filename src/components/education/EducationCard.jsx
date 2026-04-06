import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const EducationCard = ({ item, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-6 h-6 text-primary-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                <p className="text-sm text-primary-600 dark:text-primary-400">{item.institution}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><FiCalendar className="w-3 h-3" />{item.period}</span>
                <span className="flex items-center gap-1"><FiMapPin className="w-3 h-3" />{item.location}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <item.icon className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {item.institution}
            </h3>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.degree}
            </h4>
          </div>
        </div>
        {item.grade && (
          <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
            {item.grade}
          </div>
        )}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {item.faculty}
      </p>

      {item.specialization && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Specialization:</span>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">{item.specialization}</span>
        </div>
      )}

      {item.project && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Graduation Project:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.project}</p>
        </div>
      )}

      {item.coursework && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Coursework:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {item.coursework.map((course, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiCalendar className="w-3 h-3" />
          <span>{item.period}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiMapPin className="w-3 h-3" />
          <span>{item.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;