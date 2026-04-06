import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSearch, FiGrid, FiList, FiFilter, FiX } from 'react-icons/fi';

import { headerVariants } from '../../utils/animations';
import { education, certifications } from './educationData';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';

const EducationCertifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'certifications'
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list'
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all', 'featured', 'recent'

  // Combine all items
  const allItems = useMemo(() => {
    const educationItems = education.map(item => ({ ...item, type: 'education' }));
    const certificationItems = certifications.map(item => ({ ...item, type: 'certification' }));
    return [...educationItems, ...certificationItems];
  }, []);

  // Filter and search logic
  const filteredItems = useMemo(() => {
    let filtered = allItems;

    // Filter by tab
    if (activeTab === 'education') {
      filtered = filtered.filter(item => item.type === 'education');
    } else if (activeTab === 'certifications') {
      filtered = filtered.filter(item => item.type === 'certification');
    }

    // Filter by additional filters
    if (selectedFilter === 'featured') {
      filtered = filtered.filter(item => item.featured === true);
    } else if (selectedFilter === 'recent') {
      filtered = filtered.sort((a, b) => {
        const dateA = a.date || a.period?.split(' – ')[1] || '2023';
        const dateB = b.date || b.period?.split(' – ')[1] || '2023';
        return dateB.localeCompare(dateA);
      });
    }

    // Search
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item => {
        const title = (item.title || item.degree || '').toLowerCase();
        const organization = (item.organization || item.institution || '').toLowerCase();
        const skills = item.skills || item.coursework || [];
        const skillsMatch = skills.some(skill => skill.toLowerCase().includes(searchLower));
        const description = (item.description || item.challenge || '').toLowerCase();
        
        return title.includes(searchLower) || 
               organization.includes(searchLower) || 
               skillsMatch ||
               description.includes(searchLower);
      });
    }

    return filtered;
  }, [allItems, activeTab, searchTerm, selectedFilter]);

  // Get counts
  const counts = {
    all: allItems.length,
    education: education.length,
    certifications: certifications.length,
    featured: allItems.filter(item => item.featured).length
  };

  // Handle certification click
  const handleCertificationClick = (item) => {
    if (item.link) {
      window.open(item.link, '_blank', 'noopener noreferrer');
    }
  };

  // Animation variants
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            A strong foundation in computer science combined with professional certifications 
            in modern web technologies.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          {/* Main Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by title, organization, skills, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary-500 text-white shadow-md' : 'text-gray-500 hover:text-primary-500'}`}
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-primary-500 text-white shadow-md' : 'text-gray-500 hover:text-primary-500'}`}
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tabs and Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-primary-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-primary-500'}`}
              >
                All ({counts.all})
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'education' ? 'bg-primary-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-primary-500'}`}
              >
                Education ({counts.education})
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'certifications' ? 'bg-primary-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-primary-500'}`}
              >
                Certifications ({counts.certifications})
              </button>
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Items</option>
                <option value="featured">⭐ Featured Only</option>
                <option value="recent">🕒 Most Recent</option>
              </select>
              <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Search Results Summary */}
          {searchTerm && (
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Found {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} for "{searchTerm}"
            </div>
          )}
        </motion.div>

        {/* Results Grid/List */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={viewMode + activeTab + searchTerm}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 lg:grid-cols-2 gap-6" 
                : "space-y-4"
              }
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.type === 'education' ? (
                      <EducationCard item={item} viewMode={viewMode} />
                    ) : (
                      <CertificationCard 
                        item={item} 
                        onClick={handleCertificationClick}
                        viewMode={viewMode}
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <FiSearch className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                  setSelectedFilter('all');
                }}
                className="mt-4 px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EducationCertifications;