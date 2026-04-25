import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    // Store in localStorage
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { key: 'Home', href: '/' },
    { key: 'About', href: '/#about' },
    { key: 'Education', href: '/#education' },
    { key: 'Skills', href: '/#skills' },
    { key: 'Services', href: '/#services' },
    { key: 'Projects', href: '/#projects' },
    { key: 'Achievements', href: '/#achievements' },
    { key: 'Testimonials', href: '/#testimonials' }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <img src="assets/images/logo.png" alt="Profile-logo" className="w-12 h-12 rounded-full object-cover" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.key}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {t(`${link.key}`)}
              </motion.a>
            ))}
            
            {/* Contact Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              {t('Contact')}
            </motion.button>
            
            {/* Language Toggle */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (navLinks.length + 1) * 0.1 }}
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
            >
              <FiGlobe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {i18n.language === 'en' ? 'AR' : 'EN'}
              </span>
            </motion.button>
            
            {/* Theme Toggle */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {t(`${link.key.toLowerCase()}`)}
              </a>
            ))}
            
            {/* Contact Button in Mobile */}
            <button
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
              className="w-full mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-md text-left"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Toggle in Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
            >
              <FiGlobe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
// import ThemeToggle from './ThemeToggle';

// const Navbar = ({ theme, toggleTheme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleLanguage = () => {
//     // For now, just toggle between English and Arabic without i18n
//     const html = document.documentElement;
//     const currentLang = html.lang || 'en';
//     const newLang = currentLang === 'en' ? 'ar' : 'en';
//     html.lang = newLang;
//     html.dir = newLang === 'ar' ? 'rtl' : 'ltr';
//     localStorage.setItem('language', newLang);
    
//     // Reload page to apply changes (temporary solution)
//     window.location.reload();
//   };

//   const navLinks = [
//     { key: 'Home', href: '/', en: 'HOME', ar: 'الرئيسية' },
//     { key: 'About', href: '/#about', en: 'ABOUT', ar: 'عني' },
//     { key: 'Education', href: '/#education', en: 'EDUCATION', ar: 'التعليم' },
//     { key: 'Skills', href: '/#skills', en: 'SKILLS', ar: 'المهارات' },
//     { key: 'Services', href: '/#services', en: 'SERVICES', ar: 'الخدمات' },
//     { key: 'Projects', href: '/#projects', en: 'PROJECTS', ar: 'المشاريع' },
//     { key: 'Achievements', href: '/#achievements', en: 'ACHIEVEMENTS', ar: 'المشاريع' },
//     { key: 'Testimonials', href: '/#testimonials', en: 'TESTIMONIALS', ar: 'المشاريع' }
//   ];

//   const scrollToContact = () => {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   const currentLang = document.documentElement.lang || 'en';
//   const isRTL = currentLang === 'ar';

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-2xl font-bold gradient-text cursor-pointer"
//             onClick={() => {
//               window.location.href = '/';
//             }}
//           >
//             <img src="assets/images/logo.png" alt="Profile-logo" className="w-12 h-12 rounded-full object-cover" />
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-8`}>
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link.key}
//                 href={link.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
//               >
//                 {currentLang === 'ar' ? link.ar : link.en}
//               </motion.a>
//             ))}
            
//             {/* Contact Button */}
//             <motion.button
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={scrollToContact}
//               className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
//             >
//               {currentLang === 'ar' ? 'اتصل بي' : 'CONTACT ME'}
//             </motion.button>
            
//             {/* Language Toggle */}
//             <motion.button
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: (navLinks.length + 1) * 0.1 }}
//               onClick={toggleLanguage}
//               className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
//             >
//               <FiGlobe className="w-4 h-4" />
//               <span className="text-sm font-medium">
//                 {currentLang === 'en' ? 'AR' : 'EN'}
//               </span>
//             </motion.button>
            
//             {/* Theme Toggle */}
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center gap-2">
//             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 dark:text-gray-300 p-2"
//             >
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden pb-4 space-y-2"
//           >
//             {navLinks.map((link) => (
//               <a
//                 key={link.key}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
//               >
//                 {currentLang === 'ar' ? link.ar : link.en}
//               </a>
//             ))}
            
//             {/* Contact Button in Mobile */}
//             <button
//               onClick={() => {
//                 scrollToContact();
//                 setIsOpen(false);
//               }}
//               className="w-full mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium shadow-md text-left"
//             >
//               {currentLang === 'ar' ? 'اتصل بي' : 'CONTACT ME'}
//             </button>
            
//             {/* Language Toggle in Mobile */}
//             <button
//               onClick={toggleLanguage}
//               className="flex items-center gap-2 w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all"
//             >
//               <FiGlobe className="w-4 h-4" />
//               <span className="text-sm font-medium">
//                 {currentLang === 'en' ? 'العربية' : 'English'}
//               </span>
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
