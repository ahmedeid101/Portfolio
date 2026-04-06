import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import {
  FiCode,
  FiDatabase,
  FiShoppingCart,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiClock,
} from 'react-icons/fi';

import { containerVariants, itemVariants, headerVariants } from '../utils/animations';
import { services, stats, processSteps } from '../utils/Servicesdata';

// Icon mapping
const serviceIconMap = {
  FiCode,
  FiDatabase,
  FiShoppingCart,
  FiLayout,
  FiServer,
  FiSmartphone,
};

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-primary-600">{value}</div>
    <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
  </div>
);

const ServiceCard = ({ service }) => {
  const Icon = serviceIconMap[service.iconName] || FiCode;
  return (
    <motion.div variants={itemVariants} whileHover={{ y: -6 }}>
      <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition">

        {/* Icon */}
        <div className="flex justify-start gap-x-4 mb-5 px-2">
          <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${service.color}`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div className={`flex items-center justify-center ${service.color}`}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {service.description}
        </p>

        <div className="flex items-center gap-2 text-sm mb-4">
          <FiClock className="text-primary-600" />
          <span className="text-gray-500">{service.timeline}</span>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {service.features.slice(0, 3).map((f, i) => (
            <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
              • {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-gray-800 text-white"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  const ProcessStep = ({ step, title, description, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="text-center relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="relative inline-block mb-3">
      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-primary-600 to-primary-400 text-white flex items-center justify-center relative z-10 shadow-lg">
        {Icon ? <Icon className="w-6 h-6" /> : <span className="text-xl font-bold">{step}</span>}
      </div>
      <div className="absolute inset-0 rounded-full bg-primary-400 opacity-20 animate-ping" />
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
    <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
  </motion.div>
);
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 -scroll-mt-24">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <h2 className="text-3xl text-white font-bold mb-4">
            My <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I build scalable and modern web applications using MERN stack.
          </p>

          <div className="flex justify-center gap-6 mt-6">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </motion.div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/pricing')}
            className="px-10 py-3 bg-primary-600 text-white rounded-lg"
          >
            View Pricing
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Development Process
          </h3>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-300 via-primary-600 to-primary-300 transform -translate-y-1/2 hidden lg:block" />
            <div className="grid lg:grid-cols-5 gap-4 relative">
              {processSteps.map((item) => (
                <ProcessStep key={item.step} {...item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;