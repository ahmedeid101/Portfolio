import { motion } from 'framer-motion';
import { iconMap, colorMap } from '../../utils/skills.maps';
import { SiJavascript } from 'react-icons/si';

import { itemVariants } from "../../utils/animations";

const SkillItem = ({ skill, index, inView, categoryColor }) => {
  // guard against undefined
  if (!skill || !skill.name) return null;

  const Icon = iconMap[skill.name] || SiJavascript;
  const color = colorMap[skill.name] || "#3B82F6";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
        
        {/* Icon */}
        <div className="relative mb-2">
          <Icon
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
            style={{ color }}
          />
        </div>

        {/* Name */}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          {skill.name}
        </span>

        {/* Progress bar (only if level exists) */}
        {skill.level !== undefined && (
          <div className="w-full mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: 0.1 * index }}
              className={`h-full rounded-full bg-gradient-to-r ${categoryColor}`}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillItem;