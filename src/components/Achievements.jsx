import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiAward, 
  FiStar, 
  FiUsers, 
  FiCode, 
  FiTrendingUp,
  FiGlobe,
  FiHeart,
  FiZap,
  FiBookOpen,
  FiCheckCircle,
} from 'react-icons/fi';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Main achievements data
  const mainAchievements = [
    {
      id: 1,
      icon: <FiAward className="w-8 h-8" />,
      value: "10+",
      label: "Projects Completed",
      description: "Successfully delivered enterprise-level web applications",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800"
    },
    {
      id: 2,
      icon: <FiUsers className="w-8 h-8" />,
      value: "5+",
      label: "Happy Clients",
      description: "Clients across 5+ countries worldwide",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      id: 3,
      icon: <FiStar className="w-8 h-8" />,
      value: "8",
      label: "Certifications",
      description: "Professional certifications from top institutions",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      id: 4,
      icon: <FiCode className="w-8 h-8" />,
      value: "100%",
      label: "Code Quality",
      description: "Clean, maintainable, and documented code",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    }
  ];

  // Detailed achievements list
  const detailedAchievements = [
    {
      id: 1,
      icon: <FiAward className="w-5 h-5" />,
      title: "Best Project Award",
      organization: "Faculty Competition",
      year: "2023",
      description: "Received Best Project Award for AI-powered Healthcare System",
      color: "text-yellow-600 dark:text-yellow-500"
    },
    {
      id: 2,
      icon: <FiStar className="w-5 h-5" />,
      title: "Graduation Excellence",
      organization: "Al-Azhar University",
      year: "2023",
      description: "Graduated with honors (Very Good grade)",
      color: "text-blue-600 dark:text-blue-500"
    },
    {
      id: 3,
      icon: <FiGlobe className="w-5 h-5" />,
      title: "Google Developer Students Club",
      organization: "Active Member",
      year: "2021-2023",
      description: "Active participant in GDSC events and workshops",
      color: "text-green-600 dark:text-green-500"
    },
    {
      id: 4,
      icon: <FiTrendingUp className="w-5 h-5" />,
      title: "Performance Excellence",
      organization: "Multiple Projects",
      year: "2020-2024",
      description: "Consistently delivered projects ahead of schedule",
      color: "text-purple-600 dark:text-purple-500"
    }
  ];

  // Skills-based achievements
  const skillAchievements = [
    { name: "Problem Solving", level: 95, icon: <FiZap className="w-4 h-4" /> },
    { name: "Team Collaboration", level: 92, icon: <FiUsers className="w-4 h-4" /> },
    { name: "Continuous Learning", level: 98, icon: <FiBookOpen className="w-4 h-4" /> },
    { name: "Client Satisfaction", level: 96, icon: <FiHeart className="w-4 h-4" /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="achievements" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            A track record of excellence and commitment to delivering outstanding results
          </p>
        </motion.div>

        {/* Main Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {mainAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative overflow-hidden rounded-2xl ${achievement.bgColor} border ${achievement.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 p-6 backdrop-blur-sm`}
            >
              {/* Decorative Background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-2xl -mr-16 -mt-16`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg mb-4`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  {achievement.value}
                </h3>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {achievement.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Achievements List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Left Column - Detailed Achievements */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <FiAward className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Awards & Recognitions
              </h3>
            </div>

            <div className="space-y-4">
              {detailedAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 ${achievement.color}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-300 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills Proficiency */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Key Strengths
              </h3>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="space-y-6">
                {skillAchievements.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-primary-600">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">100%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Commitment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">24/7</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote or Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 p-6 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl text-white shadow-lg"
            >
              <FiCheckCircle className="w-8 h-8 mb-3 opacity-80" />
              <p className="text-lg font-medium mb-2">
                "Consistently delivering high-quality solutions"
              </p>
              <p className="text-sm opacity-90">
                Recognized for excellence in web development and client satisfaction
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Certification Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                  <FiAward className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Professional Certifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">8 certifications from top institutions</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium">
                  CS50x - Harvard
                </span>
                <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium">
                  DSA - UC San Diego
                </span>
                <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  Full Stack - Udacity
                </span>
                <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg text-sm font-medium">
                  Python - Michigan
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;