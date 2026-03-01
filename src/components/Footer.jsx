import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ahmed Eid. All rights reserved.
        </p>
        {/* <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;