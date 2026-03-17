import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { itemVariants } from "../../utils/animations";

const SkillCard = ({ item, isSelected, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      layout
      exit={{ opacity: 0, scale: 0.8 }}
      className="group relative"
    >
      <div
        onClick={() => onClick(item)}
        className={`h-full ${item.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
      >
        {/* Decorative Background */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`}
        />
        <div
          className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${item.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:opacity-10 transition-opacity`}
        />

        {/* Header */}
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${item.iconBg}`}>
              {item.logo ? (
                <item.logo className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
              ) : (
                <item.icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
              )}
            </div>
            <div className="flex items-center gap-2">
              {item.featured && (
                <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg">
                  Featured
                </div>
              )}
              {item.type === "certification" && item.link && (
                <div className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full shadow-lg flex items-center gap-1">
                  Click to view
                </div>
              )}
            </div>
          </div>

          {/* Name & Title */}
          <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1">
            {item.organization || item.institution}
          </h3>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {item.title || item.degree}
          </h4>

          {/* Activities / Skills */}
          {item.skills && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-white dark:bg-gray-800 text-xs rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {skill}
                </span>
              ))}
              {item.skills.length > 3 && (
                <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                  +{item.skills.length - 3}
                </span>
              )}
            </div>
          )}

          {item.activities && (
            <div className="mb-3">
              {item.activities.slice(0, 2).map((activity, idx) => (
                <div key={idx} className="flex items-start gap-1 mb-1">
                  <FiCheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                </div>
              ))}
              {item.activities.length > 2 && (
                <span className="text-xs text-primary-600">+{item.activities.length - 2} more</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded details for Education */}
      {isSelected && item.type === "education" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          {item.grade && (
            <div className="mb-2">
              <span className="text-xs text-gray-500">Grade: </span>
              <span className="text-xs font-semibold text-green-600">{item.grade}</span>
            </div>
          )}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {item.achievements?.join(" • ")}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillCard;