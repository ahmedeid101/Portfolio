// src/components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiSmartphone, 
  FiShield, 
  FiCloud, 
  FiSettings,
  FiTrendingUp,
  FiUsers,
  FiGitBranch,
  FiZap,
  FiLock,
  FiRefreshCw
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiGraphql, 
  SiDocker,
  SiAmazonaws,
  SiJest,
  SiRedux
} from 'react-icons/si';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "End-to-end development of scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From concept to deployment, I build robust, production-ready solutions.",
      icon: <FiCode className="w-8 h-8" />,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      techIcons: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      features: [
        "Custom web application development",
        "RESTful API design and implementation",
        "Database design and optimization",
        "Responsive and mobile-first interfaces",
        "Authentication and authorization systems"
      ],
      price: "Starting at $5,000",
      timeline: "2-8 weeks",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Create stunning, interactive user interfaces with modern React ecosystems. I build responsive, performant, and accessible frontend applications with state-of-the-art tools.",
      icon: <FiSmartphone className="w-8 h-8" />,
      technologies: ["React", "Redux", "Tailwind CSS", "TypeScript"],
      techIcons: [SiReact, SiRedux, SiNodedotjs, SiReact],
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Component library development",
        "State management with Redux/Context",
        "Responsive and mobile-first design",
        "Performance optimization and SEO"
      ],
      price: "Starting at $3,000",
      timeline: "2-6 weeks",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Build scalable server-side applications with Node.js and Express. I design robust APIs, implement business logic, and ensure high performance and security.",
      icon: <FiDatabase className="w-8 h-8" />,
      technologies: ["Node.js", "Express", "GraphQL", "JWT"],
      techIcons: [SiNodedotjs, SiExpress, SiGraphql, SiNodedotjs],
      features: [
        "RESTful and GraphQL APIs",
        "Microservices architecture",
        "Authentication & Authorization (JWT, OAuth)",
        "API security and rate limiting",
        "File upload and processing",
        "WebSocket real-time features"
      ],
      price: "Starting at $4,000",
      timeline: "3-6 weeks",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
      iconBg: "bg-green-100 dark:bg-green-900/40",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Database Design & Management",
      description: "Design efficient database schemas, optimize queries, and manage data integrity. Expert in both SQL and NoSQL databases with focus on performance and scalability.",
      icon: <FiDatabase className="w-8 h-8" />,
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
      techIcons: [SiMongodb, SiNodedotjs, SiMongodb, SiMongodb],
      features: [
        "Database schema design",
        "Query optimization and indexing",
        "Data migration and ETL processes",
        "Backup and recovery strategies",
        "Real-time data synchronization",
        "Data modeling and relationships"
      ],
      price: "Starting at $2,500",
      timeline: "1-4 weeks",
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/40",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "API Development & Integration",
      description: "Design and implement robust APIs, integrate third-party services, and create seamless data flow between systems. Expertise in REST, GraphQL, and webhooks.",
      icon: <FiGitBranch className="w-8 h-8" />,
      technologies: ["REST API", "GraphQL", "Webhooks", "OAuth"],
      techIcons: [SiNodedotjs, SiGraphql, SiNodedotjs, SiNodedotjs],
      features: [
        "Custom API development",
        "Third-party API integration",
        "Payment gateway integration",
        "Social media APIs",
        "Webhook implementation",
        "API documentation (Swagger/OpenAPI)"
      ],
      price: "Starting at $3,000",
      timeline: "2-5 weeks",
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Cloud Deployment & DevOps",
      description: "Deploy and manage applications on cloud platforms. Set up CI/CD pipelines, containerize applications, and ensure high availability and scalability.",
      icon: <FiCloud className="w-8 h-8" />,
      technologies: ["AWS", "Docker", "CI/CD", "Kubernetes"],
      techIcons: [SiAmazonaws, SiDocker, SiNodedotjs, SiDocker],
      features: [
        "Cloud deployment (AWS, GCP, Azure)",
        "Docker containerization",
        "CI/CD pipeline setup",
        "Monitoring and logging",
        "Auto-scaling configuration",
        "Domain and SSL configuration"
      ],
      price: "Starting at $2,000",
      timeline: "1-3 weeks",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      iconBg: "bg-orange-100 dark:bg-orange-900/40",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 7,
      title: "E-commerce Solutions",
      description: "Build complete e-commerce platforms with shopping cart, payment processing, inventory management, and admin panels. Custom solutions tailored to your business needs.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      techIcons: [SiReact, SiNodedotjs, SiNodedotjs, SiMongodb],
      features: [
        "Shopping cart and checkout",
        "Payment integration (Stripe, PayPal)",
        "Product catalog management",
        "Order processing and tracking",
        "Inventory management",
        "Customer accounts and reviews"
      ],
      price: "Starting at $6,000",
      timeline: "4-10 weeks",
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
      iconBg: "bg-pink-100 dark:bg-pink-900/40",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Performance Optimization",
      description: "Optimize existing applications for speed, scalability, and user experience. Identify bottlenecks and implement improvements for better performance.",
      icon: <FiZap className="w-8 h-8" />,
      technologies: ["Lighthouse", "Webpack", "Redis", "Jest"],
      techIcons: [SiReact, SiNodedotjs, SiMongodb, SiJest],
      features: [
        "Code splitting and lazy loading",
        "Database query optimization",
        "Caching strategies (Redis, CDN)",
        "Image and asset optimization",
        "Bundle size reduction",
        "Performance monitoring"
      ],
      price: "Starting at $2,500",
      timeline: "2-4 weeks",
      color: "from-teal-600 to-cyan-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      borderColor: "border-teal-200 dark:border-teal-800",
      iconBg: "bg-teal-100 dark:bg-teal-900/40",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      id: 9,
      title: "Security Implementation",
      description: "Secure your applications against common vulnerabilities. Implement authentication, authorization, data encryption, and security best practices.",
      icon: <FiLock className="w-8 h-8" />,
      technologies: ["JWT", "HTTPS", "OAuth", "Helmet"],
      techIcons: [SiNodedotjs, SiNodedotjs, SiNodedotjs, SiNodedotjs],
      features: [
        "Authentication systems",
        "Role-based access control",
        "Data encryption",
        "XSS and CSRF protection",
        "Security headers configuration",
        "Regular security audits"
      ],
      price: "Starting at $2,000",
      timeline: "1-3 weeks",
      color: "from-red-600 to-rose-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
      iconBg: "bg-red-100 dark:bg-red-900/40",
      gradient: "from-red-500 to-rose-500"
    },
    {
      id: 10,
      title: "Code Review & Consulting",
      description: "Expert code review, technical consulting, and mentorship for development teams. Improve code quality, implement best practices, and accelerate development.",
      icon: <FiUsers className="w-8 h-8" />,
      technologies: ["Code Review", "Best Practices", "Architecture", "Mentoring"],
      techIcons: [SiReact, SiNodedotjs, SiMongodb, SiExpress],
      features: [
        "Code quality assessment",
        "Architecture review",
        "Best practices implementation",
        "Team training and mentoring",
        "Technical documentation",
        "Development workflow optimization"
      ],
      price: "$150/hour",
      timeline: "Flexible",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50 dark:bg-gray-800/40",
      borderColor: "border-gray-200 dark:border-gray-700",
      iconBg: "bg-gray-100 dark:bg-gray-700",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="section-container">
        {/* Section Header */}
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
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
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
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Service Card */}
              <div className={`h-full ${service.bgColor} rounded-2xl p-6 backdrop-blur-sm border ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                
                {/* Decorative Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${service.color} opacity-5 rounded-full blur-2xl -ml-16 -mb-16 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Header */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Price Tag */}
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
                    <span className="text-gray-600 dark:text-gray-400">Timeline: </span>
                    <span className="font-semibold text-gray-900 dark:text-white">{service.timeline}</span>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mt-2`}></div>
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
                  <div className="flex items-center gap-2 mb-4">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs bg-white dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 shadow-sm border ${service.borderColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                    onClick={() => {
                      // Scroll to contact section
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Inquire Now</span>
                    <FiRefreshCw className="group-hover/btn:rotate-180 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Me Section */}
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
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <FiCode className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Well-documented, maintainable, and scalable code following best practices
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <FiZap className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Agile development process with regular updates and quick turnaround
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <FiUsers className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Client-Focused</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your vision and requirements drive every decision in the development process
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <FiShield className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Long-term Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ongoing maintenance, updates, and support even after project completion
                </p>
              </div>
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
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-300 via-primary-600 to-primary-300 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-5 gap-4 relative">
              {[
                { step: 1, title: "Discovery", description: "Understanding your requirements, goals, and target audience" },
                { step: 2, title: "Planning", description: "Architecture design, technology selection, and project roadmap" },
                { step: 3, title: "Development", description: "Agile development with regular updates and iterations" },
                { step: 4, title: "Testing", description: "Comprehensive testing, QA, and performance optimization" },
                { step: 5, title: "Deployment", description: "Launch, monitoring, and ongoing support" }
              ].map((item, idx) => (
                <div key={idx} className="text-center relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 text-white flex items-center justify-center font-bold relative z-10`}>
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;