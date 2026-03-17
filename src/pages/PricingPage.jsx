// src/pages/PricingPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {containerVariants, itemVariants} from '../utils/animations'
import { useNavigate } from 'react-router-dom';
import { 
  FiCheck, 
  FiX, 
  FiArrowLeft,
  FiStar,
  FiTrendingUp,
  FiBriefcase,
  FiClock,
  FiMail,
  FiMessageCircle,
  FiHeadphones
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiAmazonaws,
} from 'react-icons/si';
import { personalInfo } from '../utils/constants';

const PricingPage = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');
  // Fix: Properly destructure useState
  const [setSelectedPackage] = useState(null);

  // Function to handle navigation to home with specific section
  const navigateToHome = () => {
    navigate('/');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to handle package selection and navigation
  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
    navigateToHome();
    // Scroll to contact section after navigation
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  // Pricing packages data
  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      icon: <FiBriefcase className="w-6 h-6" />,
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      monthlyPrice: '300-500',
      yearlyPrice: '3000-5000',
      setupFee: 499,
      features: [
        { name: 'Custom Website (5 pages)', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Basic SEO Optimization', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Google Analytics Setup', included: true },
        { name: 'Content Management System', included: false },
        { name: 'E-commerce Functionality', included: false },
        { name: 'Custom API Development', included: false },
        { name: 'Priority Support', included: false }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      recommended: false,
      color: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'professional',
      name: 'Professional',
      icon: <FiTrendingUp className="w-6 h-6" />,
      description: 'Ideal for growing businesses that need advanced features and scalability.',
      monthlyPrice: '1500-3000',
      yearlyPrice: '5000-9000',
      setupFee: 999,
      features: [
        { name: 'Custom Website (10+ pages)', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Advanced SEO Optimization', included: true },
        { name: 'Contact Form Integration', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Google Analytics Setup', included: true },
        { name: 'Content Management System', included: true },
        { name: 'Basic E-commerce', included: true },
        { name: 'Custom API Development', included: false },
        { name: 'Priority Support', included: true }
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS', 'TypeScript'],
      recommended: true,
      color: 'from-green-500 to-emerald-600',
      lightBg: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      buttonColor: 'bg-gradient-to-r from-green-600 to-emerald-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: <FiStar className="w-6 h-6" />,
      description: 'For large organizations requiring custom solutions and dedicated support.',
      monthlyPrice: '5000-7000',
      yearlyPrice: '12000-15000',
      setupFee: 1999,
      features: [
        { name: 'Custom Web Application', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Advanced SEO Optimization', included: true },
        { name: 'Custom API Development', included: true },
        { name: 'E-commerce Platform', included: true },
        { name: 'Content Management System', included: true },
        { name: 'Database Design & Optimization', included: true },
        { name: 'Cloud Deployment (AWS/Azure)', included: true },
        { name: 'CI/CD Pipeline Setup', included: true },
        { name: '24/7 Priority Support', included: true }
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'],
      recommended: false,
      color: 'from-purple-500 to-pink-600',
      lightBg: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600'
    }
  ];

  // Individual services pricing
  const individualServices = [
    {
      name: 'Frontend Development',
      price: '$300 - $500',
      duration: '1-2 weeks',
      icon: <SiReact className="w-5 h-5" style={{ color: '#61DAFB' }} />,
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      popular: true
    },
    {
      name: 'Backend Development',
      price: '$600 - $900',
      duration: '2-3 weeks',
      icon: <SiNodedotjs className="w-5 h-5" style={{ color: '#339933' }} />,
      description: 'Node.js, Express, NestJS, GraphQL',
      popular: false
    },
    {
      name: 'Database Design',
      price: '$400 - $600',
      duration: '1-3 weeks',
      icon: <SiMongodb className="w-5 h-5" style={{ color: '#47A248' }} />,
      description: 'MongoDB, PostgreSQL, Firebase, Redis',
      popular: false
    },
    {
      name: 'API Development',
      price: '$400 - $800',
      duration: '2-4 weeks',
      icon: <SiExpress className="w-5 h-5" style={{ color: '#000000' }} />,
      description: 'RESTful APIs, GraphQL, Webhooks',
      popular: true
    },
    {
      name: 'Cloud Deployment',
      price: '$400 - $600',
      duration: '1-2 weeks',
      icon: <SiAmazonaws className="w-5 h-5" style={{ color: '#FF9900' }} />,
      description: 'AWS, Docker, CI/CD, Kubernetes',
      popular: false
    },
    {
      name: 'E-commerce Solution',
      price: '$800 - $1200',
      duration: '2-4 weeks',
      icon: <FiTrendingUp className="w-5 h-5" />,
      description: 'Full e-commerce platform with payment integration',
      popular: true
    }
  ];

  // Add-on services
  const addons = [
    { name: 'SEO Optimization', price: '$500', description: 'On-page and technical SEO' },
    { name: 'Performance Audit', price: '$300', description: 'Comprehensive performance review' },
    { name: 'Security Audit', price: '$400', description: 'Security vulnerability assessment' },
    { name: 'Content Writing', price: '$50/page', description: 'Professional copywriting' },
    { name: 'Logo Design', price: '$300', description: 'Custom logo design' },
    { name: 'Maintenance Plan', price: '$200/month', description: 'Monthly updates and support' }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How do you structure your pricing?',
      answer: 'I offer both package-based pricing for complete solutions and individual service pricing for specific needs. Each project is unique, and I\'m happy to create a custom quote based on your requirements.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'I accept bank transfers, credit cards (via Stripe), and PayPal. A 50% deposit is required to start the project, with the remaining 50% due upon completion.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I provide detailed timelines during the consultation.'
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes! I offer monthly maintenance packages that include updates, security patches, backups, and priority support. Contact me for custom maintenance plans.'
    },
    {
      question: 'What if I need custom features?',
      answer: 'I specialize in custom development. If you need features not listed in the packages, we can discuss your requirements and create a custom quote.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'I offer a 14-day satisfaction guarantee. If you\'re not happy with the initial work, I\'ll work with you to make it right or provide a partial refund based on work completed.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={navigateToHome}
          className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the perfect package for your project needs. All prices are in USD and include 
            standard features. Contact me for custom requirements.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl inline-flex shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary-600'
              }`}
            >
              Yearly Billing
              <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Save 15%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-xl border-2 transition-all duration-300 ${
                pkg.recommended 
                  ? 'border-primary-500 dark:border-primary-400 scale-105 md:scale-110 z-10' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
            >
              {/* Recommended Badge */}
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Package Header */}
              <div className={`p-3 rounded-xl ${pkg.lightBg} inline-block mb-4`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.color}`}>
                  {pkg.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{pkg.description}</p>
              
              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${billingCycle === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice}
                </span>
                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Setup fee: ${pkg.setupFee} one-time
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    {feature.included ? (
                      <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <FiX className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {pkg.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button - Fixed onClick handler */}
              <button
                onClick={() => handlePackageSelect(pkg.id)}
                className={`w-full py-3 rounded-xl text-white font-medium transition-all duration-300 ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 hover:shadow-xl'
                    : pkg.buttonColor
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Individual Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Individual <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
            Need only specific services? Choose from our individual offerings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{service.description}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">{service.price}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <FiClock className="w-3 h-3" /> {service.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Popular <span className="gradient-text">Add-ons</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addons.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{addon.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{addon.description}</p>
                <p className="text-lg font-bold text-primary-600 dark:text-primary-400">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-start gap-2">
                  <FiMessageCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 ml-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Have specific requirements? Let's discuss your project and create a tailored package just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handlePackageSelect()}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <FiMail className="group-hover:scale-110 transition-transform" />
                Contact Me
              </button>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiHeadphones className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;