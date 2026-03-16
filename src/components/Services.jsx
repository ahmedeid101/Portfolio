// src/components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom'; // Add this import
import { FiRefreshCw, FiArrowRight } from 'react-icons/fi'; // Add FiArrowRight import
import { containerVariants, itemVariants, headerVariants } from '../utils/animations';
import { services, stats, whyChooseMe, processSteps } from '../utils/Servicesdata';


// ─── Sub-components ───────────────────────────────────────────────────────────

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-primary-600">{value}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className={`h-full ${service.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>

        {/* Decorative blobs */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`} />
        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${service.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-20 group-hover:opacity-10 transition-opacity`} />

        <div className="relative">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
              <div className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                <Icon className="w-8 h-8" />
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-medium shadow-lg`}>
              {service.price}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-primary-400 transition-all">
            {service.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Timeline */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <FiRefreshCw className="text-primary-600" />
            <span className="text-gray-600 dark:text-gray-400">Timeline:</span>
            <span className="font-semibold text-gray-900 dark:text-white">{service.timeline}</span>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            {service.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2`} />
                <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
            {service.features.length > 4 && (
              <div className="text-xs text-primary-600 font-medium">
                +{service.features.length - 4} more features
              </div>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 text-xs bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 shadow-sm border ${service.borderColor}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContact}
            className={`w-full px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
          >
            <span>Inquire Now</span>
            <FiRefreshCw className="group-hover/btn:rotate-180 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseMeCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-4">
    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
      <Icon className="w-8 h-8 text-primary-600" />
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const ProcessStep = ({ step, title, description }) => (
  <div className="text-center relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 text-white flex items-center justify-center font-bold relative z-10">
      {step}
    </div>
    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
    <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate(); // Moved inside the component

  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            As a Full Stack MERN Developer, I offer comprehensive development services
            to help businesses build scalable, secure, and high-performance web applications.
            From concept to deployment, I deliver solutions that drive results.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Pricing Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/pricing')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <span>View Complete Pricing & Packages</span>
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Explore detailed pricing, package options, and custom solutions
          </p>
        </motion.div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why Work With Me?
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {whyChooseMe.map((item) => (
                <WhyChooseMeCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
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