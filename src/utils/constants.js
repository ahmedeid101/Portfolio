export const personalInfo = {
  name: "Ahmed Eid",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications with MERN stack",
  image: "/assets/images/ahmed.jpeg",
  bio: `Engineer by training, developer by passion.
I’m a Full Stack Developer specializing in building scalable and secure web applications using the MERN Stack (MongoDB, Express, React, Node.js).

I help startups and businesses turn ideas into high-performance applications — improving performance by up to 35% and reducing page load time by 20% through efficient architecture and clean code practices.

I don’t just write code that works — I focus on writing clean, maintainable, and scalable solutions. In real-world projects, I’ve enhanced operational tracking efficiency by 35% using real-time systems and modular backend design.

I’ve built full-stack applications across multiple domains including e-learning, blogging, and hosting platforms, with a strong focus on performance, security, and user experience.

Security and reliability are core to my work — I’ve implemented JWT authentication and role-based access control (RBAC) to secure 50+ user accounts.

During my internship at The Sparks Foundation, I contributed to improving transaction tracking efficiency by 25%, gaining hands-on experience in building practical, scalable solutions.`,
  linkedin: "https://www.linkedin.com/in/ahmedeid11",
  github: "https://github.com/ahmedeid101",
  email: "ahmedgebrel101@gmail.com",
  whatsapp: "https://wa.me/201092887320",
  resumeUrl:
    "https://drive.google.com/file/d/1zajnLiOzCD0ttDr9hYB2nwGoKAsNkVsV/view?usp=drive_link",
};

export const workExperiences = [
  {
    year: "2026 - Present",
    title: "Full Stack Developer / MERN Stack",
    organization: "Digilians",
    location: "Onsite",
    challenge:
      "The company needed scalable web applications with real-time features, secure user authentication, and efficient data management to serve a growing user base of 10,000+ active users.",
    action:
      "Architected and developed full-stack solutions using MERN stack. Implemented JWT-based authentication with refresh tokens, created RESTful APIs with Express, designed MongoDB schemas for optimal query performance, and set up CI/CD pipelines using GitHub Actions. Integrated real-time features using Socket.IO and optimized React components with memoization and lazy loading.",
    result:
      "Delivered 3 major production applications with 99.9% uptime. Reduced API response time by 40% through database indexing and query optimization. Improved user engagement by 25% with real-time features. Streamlined deployment process reducing release time from 2 hours to 30 minutes.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "GitHub Actions",
      "Docker",
    ],
    highlights: [
      "Team Collaboration",
      "Code Reviews",
      "Agile Methodology",
      "Documentation",
    ],
  },
  {
    year: "2023 - 2025",
    title: "Full Stack Developer / MERN Stack",
    organization: "Freelance & Training Projects",
    location: "Freelance",
    challenge:
      "Clients required custom web applications with diverse features including e-commerce functionality, learning management systems, content management, and user engagement tools, all within tight deadlines.",
    action:
      "Independently developed and deployed 5+ full-stack MERN applications. Built E-Learning Platform with video streaming and quiz system, Blog Website with SEO optimization, Page Turner (book tracking app) with reading statistics. Implemented Redux for complex state management, Stripe for payment processing, and deployed on Vercel and Heroku.",
    result:
      "Successfully delivered all projects on time with 100% client satisfaction. Applications achieved average 85+ Lighthouse scores. Gained reputation leading to 3 repeat clients. Built reusable component library reducing development time by 30% for subsequent projects.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "Vercel",
    ],
    highlights: [
      "Client Communication",
      "Project Management",
      "Problem Solving",
      "Time Management",
    ],
  },
  {
    year: "2022 - 2023",
    title: "Web Developer",
    organization: "The Sparks Foundation",
    location: "Remote Internship",
    challenge:
      "Creating engaging user interfaces that are both visually appealing and highly functional while ensuring cross-browser compatibility and responsive design across all devices.",
    action:
      "Developed responsive web applications using React functional components and hooks. Implemented responsive layouts with Tailwind CSS and Flexbox/Grid. Optimized images and assets for faster loading. Conducted cross-browser testing and fixed compatibility issues. Participated in daily stand-ups and code reviews.",
    result:
      "Completed 4 major frontend projects with zero critical bugs. Improved First Contentful Paint by 35% through performance optimizations. Received 'Best Intern' award for code quality and initiative. Contributed to open-source components used by the organization.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Git",
      "Figma",
    ],
    highlights: [
      "UI/UX Design",
      "Performance Optimization",
      "Cross-browser Testing",
      "Team Collaboration",
    ],
  },
];

export const skills = [
  // Frontend
  { name: "React", level: 100, category: "frontend" },
  { name: "TypeScript", level: 100, category: "frontend" },
  { name: "Redux", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "HTML5", level: 100, category: "frontend" },
  { name: "CSS3", level: 100, category: "frontend" },

  // Backend
  { name: "Node.js", level: 100, category: "backend" },
  { name: "Express", level: 100, category: "backend" },
  { name: "Nest", level: 100, category: "backend" },
  { name: "GraphQL", level: 100, category: "backend" },
  { name: "REST APIs", level: 100, category: "backend" },

  // Database
  { name: "MySQL", level: 100, category: "database" },
  { name: "MongoDB", level: 100, category: "database" },
  { name: "Firebase", level: 100, category: "database" },
  { name: "PostgreSQL", level: 100, category: "database" },

  // Tools & Workflow
  { name: "Git", level: 100, category: "tools" },
  { name: "Docker", level: 100, category: "tools" },
  { name: "Jest", level: 100, category: "tools" },
  { name: "Webpack", level: 100, category: "tools" },
  { name: "Postman", level: 100, category: "tools" },

  // Soft Skills (no level percentage, just presence)
  { name: "Team Collaboration", category: "softskills" },
  { name: "Communication", category: "softskills" },
  { name: "Time Management", category: "softskills" },
  { name: "Problem Solving", category: "softskills" },
  { name: "Leadership", category: "softskills" },
  { name: "Adaptability", category: "softskills" },
  { name: "Critical Thinking", category: "softskills" },
  { name: "Empathy", category: "softskills" },
  { name: "Conflict Resolution", category: "softskills" },
  { name: "Continuous Learning", category: "softskills" },
  { name: "Mentoring", category: "softskills" },
  { name: "Project Management", category: "softskills" },
];

export const timeline = [
  {
    year: "2026 - Present",
    title: "Full Stack Developer / MERN Stack",
    organization: "Digilians",
    description:
      "Worked on multiple MERN stack projects, gaining experience in React, Node.js, MongoDB, authentication, and deployment workflows.",
  },
  {
    year: "2023 - 2025",
    title: "Full Stack Developer / MERN Stack",
    organization: "Freelance & Training Projects",
    description:
      "Building full-stack applications including E-Learning Platform, Blog Website, Page Turner, and other MERN projects, using React, Node.js, Express, MongoDB, Redux, and Tailwind CSS.",
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    organization: "The Sparks Foundation",
    description:
      "Built responsive and modern web interfaces using React and Tailwind CSS, focusing on usability and UI/UX design.",
  },
  {
    year: "2018-2023",
    title: "B.Sc. System And Computer Engineering",
    organization: "Al-Azhar University",
    description: "Graduated with honors, specialized in web technologies.",
  },
];
