import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const ViewAllButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-12"
    >
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/ahmedeid11/details/certifications/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
      >
        <FiAward className="w-5 h-5" />
        View All Certificates on LinkedIn
        <FiExternalLink className="w-4 h-4" />
      </motion.a>
    </motion.div>
  );
};

export default ViewAllButton;