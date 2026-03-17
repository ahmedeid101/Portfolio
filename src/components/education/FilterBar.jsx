// src/components/Education/FilterBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const FilterBar = ({ 
  activeFilter, 
  setActiveFilter, 
  searchTerm, 
  setSearchTerm, 
  totalItems,
  educationCount,
  certificationCount 
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === 'all'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
          }`}
        >
          All ({totalItems})
        </button>
        <button
          onClick={() => setActiveFilter('education')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === 'education'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
          }`}
        >
          Education ({educationCount})
        </button>
        <button
          onClick={() => setActiveFilter('certification')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeFilter === 'certification'
              ? 'bg-primary-600 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
          }`}
        >
          Certifications ({certificationCount})
        </button>
      </div>
      
      <div className="relative flex-1 max-w-xs">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search education or certifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>
    </div>
  );
};

export default FilterBar;