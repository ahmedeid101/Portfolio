import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiStar, 
  FiChevronLeft, 
  FiChevronRight, 
  FiMessageCircle,
  FiThumbsUp,
  FiHeart,
  FiBriefcase,
  FiMessageSquare
} from 'react-icons/fi';
import { SiLinkedin, SiTwitter } from 'react-icons/si';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: null,
      rating: 5,
      content: "Working with Ahmed was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and exceeded our expectations. His technical expertise and attention to detail are outstanding. The website has seen a 40% increase in conversions since launch.",
      date: "March 2024",
      project: "E-commerce Platform",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson"
      },
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateLab",
      image: null,
      rating: 5,
      content: "Ahmed is a true full-stack expert. He not only built a robust backend API but also created a stunning frontend interface. His communication was excellent throughout the project, and he was always proactive with solutions. Highly recommended!",
      date: "January 2024",
      project: "SaaS Dashboard",
      social: {
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen"
      },
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, CreativeStudio",
      image: null,
      rating: 5,
      content: "The MERN stack application Ahmed developed for our creative agency has transformed how we manage projects. His code is clean, well-documented, and scalable. He went above and beyond to ensure everything worked perfectly.",
      date: "November 2023",
      project: "Project Management Tool",
      social: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        twitter: "https://twitter.com/emilyrodriguez"
      },
      featured: false
    },
    {
      id: 4,
      name: "David Kim",
      position: "CTO, DataFlow Systems",
      image: null,
      rating: 5,
      content: "Ahmed's problem-solving skills are exceptional. He helped us optimize our database queries and reduced server response time by 60%. His expertise in MongoDB and Node.js is top-notch. Will definitely work with him again.",
      date: "September 2023",
      project: "Database Optimization",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidkim"
      },
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director, BrandBoost",
      image: null,
      rating: 5,
      content: "The website Ahmed built for us is not only beautiful but also performs exceptionally well. Our SEO rankings improved significantly, and the user experience is seamless. He understood our vision perfectly and brought it to life.",
      date: "July 2023",
      project: "Corporate Website",
      social: {
        linkedin: "https://linkedin.com/in/lisathompson",
        twitter: "https://twitter.com/lisathompson"
      },
      featured: false
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Startup Founder, EduTech",
      image: null,
      rating: 5,
      content: "Ahmed is a rare talent who combines technical excellence with business acumen. He helped us launch our MVP quickly and efficiently, and provided valuable insights that shaped our product direction. A true partner in success.",
      date: "May 2023",
      project: "Educational Platform",
      social: {
        linkedin: "https://linkedin.com/in/jameswilson",
        twitter: "https://twitter.com/jameswilson"
      },
      featured: false
    }
  ];

  // Statistics
  const stats = [
    { value: "100%", label: "Client Satisfaction", icon: <FiThumbsUp className="w-5 h-5" /> },
    { value: "5.0", label: "Average Rating", icon: <FiStar className="w-5 h-5" /> },
    { value: "30+", label: "Happy Clients", icon: <FiHeart className="w-5 h-5" /> },
    { value: "20+", label: "Projects Completed", icon: <FiBriefcase className="w-5 h-5" /> }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FiStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  // Get featured testimonial
  const featuredTestimonial = testimonials.find(t => t.featured) || testimonials[0];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Don't just take my word for it - hear what my clients have to say about their experience working with me
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 lg:-top-8 lg:-left-8 z-0">
              <FiMessageSquare className="w-16 h-16 text-primary-200 dark:text-primary-800 opacity-50" />
            </div>
            <div className="relative z-10 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-10 shadow-xl border border-primary-100 dark:border-primary-800">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Quote Icon */}
                <div className="hidden lg:block">
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <FiMessageCircle className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(5)}
                  </div>
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                    "{featuredTestimonial.content}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{featuredTestimonial.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{featuredTestimonial.position}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                        5.0 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              What Clients Say
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real feedback from real clients
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                    <span className="text-sm text-gray-500 ml-2">({testimonials[currentIndex].rating}.0)</span>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      {/* Avatar Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          Project: {testimonials[currentIndex].project}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {testimonials[currentIndex].social.linkedin && (
                        <a
                          href={testimonials[currentIndex].social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <SiLinkedin className="w-4 h-4" />
                        </a>
                      )}
                      {testimonials[currentIndex].social.twitter && (
                        <a
                          href={testimonials[currentIndex].social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-400 hover:text-white transition-all"
                        >
                          <SiTwitter className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="mt-4 text-right">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {testimonials[currentIndex].date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-8 h-2 bg-primary-600'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid View of More Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              More Happy Clients
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Read what others are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(1, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiMessageCircle className="w-5 h-5" />
            Leave a Review
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;