// src/components/Education/StatsCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';

const stats = [
  { icon: FiBook, value: '1', label: 'University Degree', color: 'blue' },
  { icon: FiAward, value: '8', label: 'Certifications', color: 'purple' },
  { icon: FiCalendar, value: '6', label: 'Years Learning', color: 'green' },
  { icon: FiUsers, value: '6', label: 'Institutions', color: 'orange' }
];

const colorClasses = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600'
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${colorClasses[stat.color]}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;