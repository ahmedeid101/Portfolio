import { 
  FiCode, 
  FiDatabase, 
  FiSmartphone, 
  FiShield, 
  FiCloud, 
  FiTrendingUp,
  FiUsers,
  FiGitBranch,
  FiZap,
  FiLock,
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

export const services = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "End-to-end development of scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). From concept to deployment, I build robust, production-ready solutions.",
    icon: FiCode,
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
    icon: FiSmartphone,
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
    icon: FiDatabase,
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
    icon: FiDatabase,
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
    icon: FiGitBranch,
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
    icon: FiCloud,
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
    icon: FiTrendingUp,
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
    icon: FiZap,
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
    icon: FiLock,
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
    icon: FiUsers,
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

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+",  label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

export const whyChooseMe = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Well-documented, maintainable, and scalable code following best practices"
  },
  {
    icon: FiZap,
    title: "Fast Delivery",
    description: "Agile development process with regular updates and quick turnaround"
  },
  {
    icon: FiUsers,
    title: "Client-Focused",
    description: "Your vision and requirements drive every decision in the development process"
  },
  {
    icon: FiShield,
    title: "Long-term Support",
    description: "Ongoing maintenance, updates, and support even after project completion"
  }
];

export const processSteps = [
  { step: 1, title: "Discovery",   description: "Understanding your requirements, goals, and target audience" },
  { step: 2, title: "Planning",    description: "Architecture design, technology selection, and project roadmap" },
  { step: 3, title: "Development", description: "Agile development with regular updates and iterations" },
  { step: 4, title: "Testing",     description: "Comprehensive testing, QA, and performance optimization" },
  { step: 5, title: "Deployment",  description: "Launch, monitoring, and ongoing support" }
];