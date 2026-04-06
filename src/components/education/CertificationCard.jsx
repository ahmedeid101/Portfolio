import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiExternalLink, FiAward } from 'react-icons/fi';

const CertificationCard = ({ item, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onClick && onClick(item)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <item.icon className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {item.organization}
            </h3>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {item.title}
            </h4>
          </div>
        </div>
        {item.featured && (
          <div className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-full flex items-center gap-1">
            <FiAward className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Description/Challenge */}
      {item.challenge && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Challenge:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.challenge}
          </p>
        </div>
      )}

      {/* Action */}
      {item.action && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Action:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.action}
          </p>
        </div>
      )}

      {/* Result */}
      {item.result && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Result:</span>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
            {item.result}
          </p>
        </div>
      )}

      {/* Focus Areas / Skills */}
      {item.skills && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Focus Areas:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {item.skills.map((skill, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Date and Link */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiCalendar className="w-3 h-3" />
          <span>{item.date}</span>
        </div>
        {item.link && (
          <div className="flex items-center gap-1 text-xs text-primary-600 group-hover:underline">
            <span>View Certificate</span>
            <FiExternalLink className="w-3 h-3" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiCalendar, FiExternalLink, FiChevronDown } from 'react-icons/fi';

// const CertificationCard = ({ item, onClick }) => {
//   const [showAllSkills, setShowAllSkills] = useState(false);

//   return (
//     <motion.div
//       layout
//       className="group relative h-full"
//     >
//       <div 
//         onClick={onClick}
//         className={`h-full min-h-[480px] ${item.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-primary-500 relative overflow-hidden flex flex-col`}
//       >
//         {/* Decorative Background */}
//         <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`} />
//         <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${item.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:opacity-10 transition-opacity`} />
        
//         {/* Content - Flex column to fill height */}
//         <div className="relative flex flex-col h-full">
//           {/* Header Section */}
//           <div className="flex items-start justify-between mb-3 flex-shrink-0">
//             <div className={`p-3 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
//               <item.logo className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
//             </div>
            
//             <div className="flex items-center gap-2">
//               {item.featured && (
//                 <div className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap">
//                   Featured
//                 </div>
//               )}
//               <div className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
//                 Click to view
//               </div>
//             </div>
//           </div>
          
//           {/* Organization */}
//           <h3 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-1 truncate flex-shrink-0">
//             {item.organization}
//           </h3>
          
//           {/* Title - Fixed height with 2 lines */}
//           <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[56px] flex-shrink-0">
//             {item.title}
//           </h4>
          
//           {/* Date */}
//           <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-500 flex-shrink-0">
//             <div className="flex items-center gap-1">
//               <FiCalendar className="w-3 h-3 flex-shrink-0" />
//               <span>{item.date}</span>
//             </div>
//           </div>
          
//           {/* Skills Section - Scrollable if needed */}
//           <div className="flex-1 min-h-0 mb-3">
//             <div className="h-full overflow-y-auto pr-1 custom-scrollbar">
//               <div className="flex flex-wrap gap-1 mb-2">
//                 {item.skills.slice(0, showAllSkills ? item.skills.length : 4).map((skill, idx) => (
//                   <span
//                     key={idx}
//                     className="px-2 py-1 bg-white dark:bg-gray-800 text-xs rounded-full text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
              
//               {/* Show More/Less Button for Skills */}
//               {item.skills.length > 4 && (
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setShowAllSkills(!showAllSkills);
//                   }}
//                   className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium flex items-center gap-1 mt-1"
//                 >
//                   {showAllSkills ? 'Show less' : `+${item.skills.length - 4} more skills`}
//                   <FiChevronDown className={`w-3 h-3 transition-transform ${showAllSkills ? 'rotate-180' : ''}`} />
//                 </button>
//               )}
              
//               {/* Additional info */}
//               {(item.hours || item.courses || item.projects) && (
//                 <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-2">
//                   {item.hours && <span className="block">{item.hours}</span>}
//                   {item.courses && <span className="block">{item.courses} courses</span>}
//                   {item.projects && <span className="block">{item.projects} projects</span>}
//                 </div>
//               )}
//             </div>
//           </div>
          
//           {/* Bottom Section with External Link */}
//           <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
//             <span className="text-xs text-gray-500 dark:text-gray-400">
//               {item.issuer}
//             </span>
//             <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md text-primary-600">
//               <FiExternalLink className="w-4 h-4" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CertificationCard;