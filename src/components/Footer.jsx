import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { personalInfo } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Left - Brand */}
          <div className="max-w-sm">
            <h2 className="text-white text-xl font-semibold mb-3">
              Ahmed Eid
            </h2>
            <p className="text-sm leading-relaxed">
              Full Stack Developer building scalable and modern web applications
              using MERN stack and clean architecture.
            </p>
          </div>

          {/* Middle - Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="text-white mb-3 font-medium">Navigation</h4>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-3 font-medium">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Scroll Button */}
          <div className="flex items-start md:items-center justify-end">
            <button
              onClick={scrollToTop}
              className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
            >
              <FiArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Left - Copyright */}
          <p className="text-sm">
            © {currentYear} Ahmed Eid. All rights reserved.
          </p>

          {/* Center - Socials */}
          <div className="flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
              <FiGithub size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank"  rel="noreferrer" className="hover:text-white">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
              <FiMail size={18} />
            </a>
          </div>

          {/* Right - About Me (NEW) */}
          <p className="text-xs text-gray-500 text-center md:text-right max-w-xs">
            Passionate developer focused on clean code, performance, and building
            real-world scalable systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;