import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {containerVariants, itemVariants, headerVariants} from '../../utils/animations'
import { education, certifications } from './educationData';
import StatsCards from './StatsCards';
import FilterBar from './FilterBar';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import Timeline from './Timeline';
import ViewAllButton from './ViewAllButton';

const EducationCertifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Combine all items
  const allItems = useMemo(() => [...education, ...certifications], []);

  // Filter items based on active filter and search
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
      const matchesSearch = searchTerm === '' || 
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.degree?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.organization?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.institution?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [allItems, activeFilter, searchTerm]);

  // Handle card click
  const handleCardClick = (item) => {
    if (item.type === 'certification' && item.link) {
      window.open(item.link, '_blank', 'noopener noreferrer');
    } else {
      setSelectedItem(selectedItem === item.id ? null : item.id);
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
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            A strong foundation in computer science combined with professional certifications 
            in modern web technologies. Click on any certification to view the credential.
          </p>

          {/* Stats Cards */}
          <StatsCards />

          {/* Filter and Search Bar */}
          <FilterBar
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            totalItems={allItems.length}
            educationCount={education.length}
            certificationCount={certifications.length}
          />
        </motion.div>

        {/* Education & Certifications Grid - Auto-rows for consistent height */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                exit={{ opacity: 0, scale: 0.8 }}
                className="h-full"
              >
                {item.type === 'education' ? (
                  <EducationCard
                    item={item}
                    isSelected={selectedItem === item.id}
                    onClick={() => handleCardClick(item)}
                  />
                ) : (
                  <CertificationCard
                    item={item}
                    onClick={() => handleCardClick(item)}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Learning Journey Timeline
          </h3>
          <Timeline />
        </motion.div>

        {/* View All Button */}
        <ViewAllButton />
      </div>
    </section>
  );
};

export default EducationCertifications;