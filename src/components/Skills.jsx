import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiRedux, 
  SiTypescript, 
  SiGit,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiDocker,
  SiGraphql,
  SiFirebase,
  SiJest,
  SiWebpack,
  SiNestjs,
  SiPostgresql
} from 'react-icons/si';
import { skills } from '../utils/constants';

// Map skill names to their corresponding icons
const iconMap = {
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Nest': SiNestjs,
  //'REST APIs': SiPrestashop,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Tailwind CSS': SiTailwindcss,
  'Redux': SiRedux,
  'TypeScript': SiTypescript,
  'Git': SiGit,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Postman': SiPostman,
  'Docker': SiDocker,
  'GraphQL': SiGraphql,
  'Firebase': SiFirebase,
  'Jest': SiJest,
  'Webpack': SiWebpack
};

// Color map for skill icons
const colorMap = {
  'React': '#61DAFB',
  'Node.js': '#339933',
  'Express': '#000000',
  'MongoDB': '#47A248',
  'Tailwind CSS': '#06B6D4',
  'Redux': '#764ABC',
  'TypeScript': '#3178C6',
  'Git': '#F05032',
  'JavaScript': '#F7DF1E',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'Postman': '#FF6C37',
  'Docker': '#2496ED',
  'GraphQL': '#E10098',
  'Firebase': '#FFCA28',
  'Jest': '#C21325',
  'Webpack': '#8DD6F9'
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Group skills by category
  const categories = {
    frontend: { 
      title: 'Frontend Development', 
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Crafting responsive, interactive user interfaces with modern frameworks and libraries. Specializing in component-based architecture and state management for seamless user experiences.',

    },
    backend: { 
      title: 'Backend Development', 
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Building robust server-side applications with scalable APIs, authentication, and business logic implementation. Expertise in microservices architecture and serverless functions.',
    },
    database: { 
      title: 'Database & APIs', 
      icon: '🗄️',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      description: 'Designing efficient database schemas, optimizing queries, and implementing real-time data synchronization. Experienced with both SQL and NoSQL databases.',
    },
    tools: { 
      title: 'Tools & Workflow', 
      icon: '🛠️',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Streamlining development workflows with modern CI/CD pipelines, containerization, and cloud services. Proficient in version control and project management tools.',
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

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
    hidden: { opacity: 0, y: 20 },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable, performant applications
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
        
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover="hover"
              className={`${categories[category]?.bgColor} rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl bg-gradient-to-r ${categories[category]?.color} p-3 rounded-xl text-white shadow-lg`}>
                  <span>{categories[category]?.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {categories[category]?.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {categorySkills.length} technologies
                  </p>
                </div>
              </div>

              {/* Category Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed border-l-4 border-primary-500 pl-4 italic">
              {categories[category]?.description}
             </p>

              {/* Skills Grid */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                variants={containerVariants}
              >
                {categorySkills.map((skill, index) => {
                  const IconComponent = iconMap[skill.name] || SiJavascript;
                  const iconColor = colorMap[skill.name] || '#3B82F6';
                  
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
                        {/* Icon with gradient background */}
                        <div className="relative mb-2">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                          <IconComponent 
                            className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                            style={{ color: iconColor }}
                          />
                        </div>
                        
                        {/* Skill name */}
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                        
                        {/* Experience level indicator */}
                        <div className="w-full mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.2 * index }}
                            className={`h-full rounded-full bg-gradient-to-r ${categories[category]?.color}`}
                          />
                        </div>
                        
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {skill.level}% proficiency
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Skills Cloud / Tag Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${colorMap[skill.name]}20, transparent)`,
                  borderLeft: `3px solid ${colorMap[skill.name]}`
                }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;