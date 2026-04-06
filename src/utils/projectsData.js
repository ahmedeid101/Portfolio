export const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    image: "/assets/images/project1.jpg",
    challenge: "Educational institutions needed a scalable platform to deliver online courses, track student progress, and manage assessments efficiently, but existing solutions were either too expensive or lacked essential features.",
    action: "Architected and developed a full-stack MERN application featuring: React with Redux for state management, JWT authentication for security, MongoDB for flexible data modeling, and Tailwind CSS for responsive UI. Implemented course creation tools, lesson organization, quiz systems, enrollment workflows, and progress dashboards with real-time analytics.",
    result: "Platform launched successfully with 500+ beta users. Achieved 40% reduction in course creation time, 95% user satisfaction rating, and 60% increase in student engagement. System handles 100+ concurrent users with sub-2 second response times.",
    metrics: {
      users: "500+",
      satisfaction: "95%",
      engagement: "+60%",
      responseTime: "<2s"
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Tailwind CSS"],
    github: "https://github.com/ahmedeid101/E-learning-Platform",
    live: "https://elearning-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Blog Website",
    image: "/assets/images/project2.webp",
    challenge: "Content creators needed an intuitive platform to publish and manage blog posts, engage with readers through comments, and optimize content for search engines without technical complexity.",
    action: "Built a feature-rich MERN blog platform including: user authentication with roles (admin/author/reader), rich text editor for post creation, comment system with moderation, search functionality, category/tag filtering, and SEO optimization. Implemented responsive design ensuring perfect display on all devices.",
    result: "Platform gained 200+ registered users within 3 months, published 500+ blog posts across 10 categories, and processed 1,000+ user comments. Achieved 90+ Lighthouse scores and 40% improvement in page load speed through code splitting and lazy loading.",
    metrics: {
      users: "200+",
      posts: "500+",
      comments: "1,000+",
      lighthouse: "90+"
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/ahmedeid101/Blog-Website-MERN",
    live: "https://blog-website-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Page Turner",
    image: "/assets/images/project3.webp",
    challenge: "Readers wanted an engaging digital reading experience that mimics physical books with smooth page transitions, while also providing modern features like notes, bookmarks, and personal libraries.",
    action: "Created an immersive reading platform using React and Framer Motion for smooth page-flipping animations. Implemented user authentication, personal library management, note-taking system, bookmark synchronization, and reading progress tracking. Added dark mode for comfortable night reading and offline support for saved content.",
    result: "Launched to 300+ active readers who added 1,000+ books to their libraries and created 5,000+ notes. Smooth page-flipping animations received 98% positive feedback. Achieved 45% daily active user rate and 30-minute average reading sessions.",
    metrics: {
      users: "300+",
      books: "1,000+",
      notes: "5,000+",
      satisfaction: "98%"
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ahmedeid101/Page_Turner",
    live: "https://pageturner-store.netlify.app/",
    featured: true
  }
];