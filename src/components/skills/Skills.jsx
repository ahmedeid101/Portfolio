// Skills.jsx (updated section for soft skills)
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { skills } from "../../utils/constants";
import { groupSkills } from "../../utils/skills.utils";
import { categories, techCategories } from "../../utils/skills.config";

import SkillCard from "./SkillCard";
import SoftSkillItem from "./SoftSkillItem";

import { containerVariants, fadeInUp } from "../../utils/animations";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Safe grouping
  const grouped = groupSkills(skills || []);
  const softSkills = grouped?.softskills || [];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20"
    >
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Technical & <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build scalable, performant applications
          </p>
        </motion.div>

        {/* Tech Skills */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {techCategories.map((cat) => {
            const categorySkills = grouped?.[cat] || [];

            return (
              <SkillCard
                key={cat}
                categoryKey={cat}
                config={categories[cat]}
                skills={categorySkills.filter(Boolean)} // 🛡️ remove undefined
                inView={inView}
              />
            );
          })}
        </motion.div>

        {/* Soft Skills Section with improved header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          {/* Soft Skills Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-rose-500 to-orange-500 p-3 rounded-xl text-white shadow-lg text-2xl">
              🤝
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Soft Skills
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Interpersonal abilities that enhance teamwork, leadership, and professional growth
              </p>
            </div>
          </div>

          {/* Soft Skills Grid */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {(softSkills || []).filter(Boolean).map((skill, index) => (
                <SoftSkillItem
                  key={skill?.name || index}
                  skill={skill}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;