import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiExternalLink, FiAward } from 'react-icons/fi';

const CertificationCard = ({ item, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onClick && onClick(item)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <item.icon className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {item.organization}
            </h3>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.title}
            </h4>
          </div>
        </div>
        {item.featured && (
          <div className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-full flex items-center gap-1">
            <FiAward className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Description/Challenge */}
      {item.challenge && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Challenge:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.challenge}
          </p>
        </div>
      )}

      {/* Action */}
      {item.action && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Action:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.action}
          </p>
        </div>
      )}

      {/* Result */}
      {item.result && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Result:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.result}
          </p>
        </div>
      )}

      {/* Focus Areas / Skills */}
      {item.skills && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Focus Areas:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {item.skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Date and Link */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiCalendar className="w-3 h-3" />
          <span>{item.date}</span>
        </div>
        {item.link && (
          <div className="flex items-center gap-1 text-xs text-primary-600 group-hover:underline">
            <span>View Certificate</span>
            <FiExternalLink className="w-3 h-3" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;