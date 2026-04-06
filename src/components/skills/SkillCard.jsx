import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import { cardVariants, containerVariants } from "../../utils/animations";

const SkillCard = ({ config, skills, inView }) => {
  const safeSkills = (skills || []).filter(Boolean);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      className={`${config?.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`text-3xl bg-gradient-to-r ${config?.color} p-3 rounded-xl text-white shadow-lg`}>
          {config?.icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {config?.title}
          </h3>
          {/* Description instead of technology count */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {config?.description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        variants={containerVariants}
      >
        {safeSkills.map((skill, i) => (
          <SkillItem
            key={skill?.name || i}
            skill={skill}
            index={i}
            inView={inView}
            categoryColor={config?.color}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;