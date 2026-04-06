import { 
  FiCode, 
  FiDatabase, 
  FiShoppingCart, 
  FiLayout, 
  FiServer, 
  FiShield,
  FiCloud,
  FiZap,
  FiTarget,
  FiMessageCircle,
  FiThumbsUp
} from 'react-icons/fi';

import { 
  SiNodedotjs, 
  SiExpress, 
  SiGraphql, 
} from 'react-icons/si';

export const services = [
  {
    id: 1,
    title: "Custom Web Development",
    iconName: "FiCode",
    icon: FiCode,
    price: "Starting at $2,000",
    timeline: "4-8 weeks",
    description: "Build scalable, responsive web applications tailored to your business needs using the MERN stack.",
    features: [
      "Responsive design for all devices",
      "SEO-friendly architecture",
      "User authentication & authorization",
      "Admin dashboard",
      "Payment gateway integration",
      "Real-time features"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-white dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    iconName: "FiShoppingCart",
    icon: FiShoppingCart,
    price: "Starting at $3,000",
    timeline: "6-10 weeks",
    description: "Full-featured online stores with product management, cart functionality, and secure checkout.",
    features: [
      "Product catalog & search",
      "Shopping cart & wishlist",
      "Secure payment integration",
      "Order tracking system",
      "Inventory management",
      "Customer reviews & ratings"
    ],
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe", "PayPal"],
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-white dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "API Development",
    iconName: "FiServer",
    icon: FiServer,
    price: "Starting at $1,500",
    timeline: "2-4 weeks",
    description: "Design and implement RESTful APIs with proper documentation, security, and scalability.",
    features: [
      "RESTful API design",
      "JWT authentication",
      "API documentation (Swagger)",
      "Rate limiting & security",
      "Webhook integration",
      "Third-party API integration"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Postman"],
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-white dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Database Design",
    iconName: "FiDatabase",
    icon: FiDatabase,
    price: "Starting at $1,000",
    timeline: "1-3 weeks",
    description: "Efficient database architecture, optimization, and management for your applications.",
    features: [
      "Schema design & modeling",
      "Query optimization",
      "Data migration & backup",
      "Indexing strategies",
      "Database security",
      "Performance tuning"
    ],
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma"],
    color: "from-orange-600 to-red-600",
    bgColor: "bg-white dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Frontend Development",
    iconName: "FiLayout",
    icon: FiLayout,
    price: "Starting at $1,800",
    timeline: "3-6 weeks",
    description: "Beautiful, responsive user interfaces with modern frameworks and best practices.",
    features: [
      "Pixel-perfect designs",
      "Responsive layouts",
      "State management (Redux)",
      "Performance optimization",
      "Cross-browser compatibility",
      "Accessibility standards"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Figma"],
    color: "from-teal-600 to-cyan-600",
    bgColor: "bg-white dark:bg-gray-800",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "bg-teal-100 dark:bg-teal-900/30",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 6,
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
    timeline: "3-6 weeks",
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    gradient: "from-green-500 to-emerald-500"
  },
];

export const stats = [
  { value: "5+", label: "Projects Completed" },
  { value: "5+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

export const whyChooseMe = [
  { icon: FiZap, title: "Fast Delivery", description: "Timely project completion without compromising quality" },
  { icon: FiCode, title: "Clean Code", description: "Well-documented, maintainable, and scalable codebase" },
  { icon: FiMessageCircle, title: "Communication", description: "Regular updates and transparent communication" },
  { icon: FiThumbsUp, title: "Quality Assurance", description: "Thorough testing and bug-free delivery" }
];

export const processSteps = [
  { step: 1, title: "Discovery", description: "Understanding requirements & planning", icon: FiTarget },
  { step: 2, title: "Design", description: "UI/UX design & prototyping", icon: FiLayout },
  { step: 3, title: "Development", description: "Coding & implementation", icon: FiCode },
  { step: 4, title: "Testing", description: "QA & bug fixes", icon: FiShield },
  { step: 5, title: "Deployment", description: "Launch & maintenance", icon: FiCloud }
];