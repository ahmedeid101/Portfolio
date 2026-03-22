import { motion } from "framer-motion";
import { iconMap, colorMap } from '../../utils/skills.maps';
import { itemVariants } from "../../utils/animations";
import { FiZap } from "react-icons/fi";

const SoftSkillItem = ({ skill }) => {
  // guard
  if (!skill || !skill.name) return null;

  const Icon = iconMap[skill.name] || FiZap;
  const color = colorMap[skill.name] || "#F43F5E";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div
        className="flex flex-col items-center p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
        style={{
          background: `linear-gradient(135deg, ${color}15, transparent)`,
          borderColor: `${color}40`,
        }}
      >
        {/* Icon */}
        <div className="relative mb-2">
          <Icon
            className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
            style={{ color }}
          />
        </div>

        {/* Name */}
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
          {skill.name}
        </span>

        {/* Accent line */}
        <div
          className="w-8 h-0.5 rounded-full mt-2 opacity-60 group-hover:opacity-100 group-hover:w-full transition-all duration-300"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default SoftSkillItem;
