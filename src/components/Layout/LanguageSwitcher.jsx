// src/components/Layout/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 flex items-center gap-1"
      aria-label="Toggle language"
    >
      <FiGlobe className="w-4 h-4" />
      <span className="text-sm font-medium">{i18n.language === 'en' ? 'عربي' : 'EN'}</span>
    </motion.button>
  );
};

export default LanguageSwitcher;