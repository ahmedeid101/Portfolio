// SoftSkillItem.jsx
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
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div
        className="flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-xl cursor-default bg-white dark:bg-gray-800"
        style={{
          borderColor: `${color}30`,
        }}
      >
        {/* Icon with gradient background */}
        <div className="relative mb-3">
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
            style={{ backgroundColor: color }}
          />
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br transition-all duration-300 group-hover:scale-110"
            style={{ 
              background: `linear-gradient(135deg, ${color}20, ${color}05)`,
            }}
          >
            <Icon
              className="w-6 h-6 transition-all duration-300"
              style={{ color }}
            />
          </div>
        </div>

        {/* Skill Name */}
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {skill.name}
        </span>

        {/* Description (if provided) */}
        {skill.description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed mt-1">
            {skill.description}
          </p>
        )}

        {/* Progress bar style accent (like technical skills) */}
        <div className="w-full mt-3 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SoftSkillItem;

// import { motion } from "framer-motion";
// import { iconMap, colorMap } from '../../utils/skills.maps';
// import { itemVariants } from "../../utils/animations";
// import { FiZap } from "react-icons/fi";

// const SoftSkillItem = ({ skill }) => {
//   // guard
//   if (!skill || !skill.name) return null;

//   const Icon = iconMap[skill.name] || FiZap;
//   const color = colorMap[skill.name] || "#F43F5E";

//   return (
//     <motion.div
//       variants={itemVariants}
//       whileHover={{ scale: 1.05, y: -3 }}
//       whileTap={{ scale: 0.95 }}
//       className="group relative"
//     >
//       <div
//         className="flex flex-col items-center p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
//         style={{
//           background: `linear-gradient(135deg, ${color}15, transparent)`,
//           borderColor: `${color}40`,
//         }}
//       >
//         {/* Icon */}
//         <div className="relative mb-2">
//           <Icon
//             className="w-7 h-7 transition-all duration-300 group-hover:scale-110"
//             style={{ color }}
//           />
//         </div>

//         {/* Name */}
//         <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
//           {skill.name}
//         </span>

//         {/* Accent line */}
//         <div
//           className="w-8 h-0.5 rounded-full mt-2 opacity-60 group-hover:opacity-100 group-hover:w-full transition-all duration-300"
//           style={{ backgroundColor: color }}
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default SoftSkillItem;
