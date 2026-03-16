// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
// import { personalInfo } from '../utils/constants';

// const FooterMinimal = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           {/* Copyright */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left"
//           >
//             <p>© {currentYear} Ahmed Eid. All rights reserved.</p>
//             <p className="text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
//               Built with <FiHeart className="text-red-500" /> using React & Tailwind
//             </p>
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-4"
//           >
//             <a
//               href={personalInfo.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//               aria-label="GitHub"
//             >
//               <FiGithub className="w-5 h-5" />
//             </a>
//             <a
//               href={personalInfo.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
//               aria-label="LinkedIn"
//             >
//               <FiLinkedin className="w-5 h-5" />
//             </a>
//             <a
//               href={`mailto:${personalInfo.email}`}
//               className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
//               aria-label="Email"
//             >
//               <FiMail className="w-5 h-5" />
//             </a>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-4 text-sm"
//           >
//             <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
//               Home
//             </a>
//             <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
//               About
//             </a>
//             <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
//               Projects
//             </a>
//             <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
//               Contact
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterMinimal;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiHeart,
  FiArrowUp,
  FiExternalLink
} from 'react-icons/fi';
import { 
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiVercel
} from 'react-icons/si';
import { personalInfo } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'Frontend Development', href: '#services' },
        { name: 'Backend Development', href: '#services' },
        { name: 'API Integration', href: '#services' },
        { name: 'Cloud Deployment', href: '#services' },
        { name: 'Consulting', href: '#services' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: FiMail },
        { name: '+20 109 288 7320', href: 'tel:+201092887320', icon: FiPhone },
        { name: 'Cairo, Egypt', href: '#', icon: FiMapPin }
      ]
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:bg-red-600' }
  ];

  const techStack = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiFramer, name: 'Framer Motion', color: '#0055FF' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Ahmed Eid
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer specializing in MERN stack development. 
              Building scalable, performant, and user-centric web applications 
              with modern technologies.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex items-center gap-3 pt-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="group relative"
                >
                  <tech.icon 
                    className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" 
                    style={{ color: tech.color }}
                  />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white relative inline-block">
                {section.title}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </h4>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                      <span>{link.name}</span>
                      {link.name.includes('@') && (
                        <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h5 className="text-white font-semibold mb-1">Stay Updated</h5>
              <p className="text-gray-400 text-sm">Get notified about new projects and articles</p>
            </div>
            
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-r-lg hover:shadow-lg transition-all duration-300 font-medium text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© {currentYear} Ahmed Eid. All rights reserved.</p>
            <p className="text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <FiHeart className="text-red-500 animate-pulse" /> using 
              <span className="flex items-center gap-1 ml-1">
                <SiReact className="text-[#61DAFB]" /> React 
                <SiTailwindcss className="text-[#06B6D4]" /> Tailwind 
                <SiFramer className="text-[#0055FF]" /> Framer
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</span>
            <span>•</span>
            <span href="#" className="hover:text-primary-400 transition-colors">Terms of Service</span>
            <span>•</span>
            <span href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</span>
          </div>
        </motion.div>

        {/* Deployment Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <a 
            href="https://ahmeedeidportfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            <SiVercel className="w-3 h-3" />
            Deployed on Vercel
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;