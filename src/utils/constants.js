export const personalInfo = {
  name: "Ahmed Eid",
  role: "Full Stack Developer",
  tagline: "Building scalable web applications with MERN stack",
  image: "/assets/images/ahmed.png",
  bio: `Engineer by training, developer by passion. I'm a Full-Stack Developer with hands-on experience building and deploying scalable web applications using JavaScript, 
  TypeScript, Java, and Python.I’ve developed everything from dynamic RESTful APIs to full-stack apps with secure authentication, responsive UIs, and cloud-hosted backends. 
  I’m comfortable working across the stack with frameworks like Node.js, Angular, React, Spring Boot, and databases like PostgreSQL, MongoDB, and MySQL.`,
  linkedin: "https://www.linkedin.com/in/ahmedeid11",
  github: "https://github.com/ahmedeid101",
  email: "ahmedgebrel101@gmail.com",
  whatsapp: "https://wa.me/201092887320",
  resumeUrl: "https://drive.google.com/file/d/1zajnLiOzCD0ttDr9hYB2nwGoKAsNkVsV/view?usp=drive_link"
};

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
  { name: "MongoDB", level: 100, category: "database" },
  { name: "Firebase", level: 100, category: "database" },
  { name: "PostgreSQL", level: 100, category: "database" },
  
  // Tools & Workflow
  { name: "Git", level: 100, category: "tools" },
  { name: "Docker", level: 100, category: "tools" },
  { name: "Jest", level: 100, category: "tools" },
  { name: "Webpack", level: 100, category: "tools" },
  { name: "Postman", level: 100, category: "tools" },

  // { name: "React", level: 90, icon: "⚛️", category: "frontend" },
  // { name: "Node.js", level: 90, icon: "🟢", category: "backend" },
  // { name: "Express", level: 85, icon: "🚂", category: "backend" },
  // { name: "Nest", level: 85, icon: "🟥", category: "backend" },
  // { name: "MongoDB", level: 85, icon: "🍃", category: "database" },
  // { name: "Postgresql", level: 85, icon: "🐘", category: "database" },
  // { name: "Tailwind CSS", level: 90, icon: "🎨", category: "frontend" },
  // { name: "Redux", level: 85, icon: "🔄", category: "frontend" },
  // { name: "JavaScript", level: 90, icon: "🟨", category: "language" },
  // { name: "TypeScript", level: 85, icon: "📘", category: "language" },
  // { name: "Java", level: 85, icon: "♨️", category: "language" },
  // { name: "Git", level: 90, icon: "📦", category: "tools" },
  // { name: "Docker", level: 85, icon: "🐳", category: "tools" },
  // { name: "REST APIs", level: 90, icon: "🔌", category: "backend" },
  // { name: "JWT Auth", level: 80, icon: "🔐", category: "security" }
];

export const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "Full-stack online learning platform with course management, lessons, assessments, and student enrollment.",
    image: "/assets/images/project1.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Tailwind CSS"],
    github: "https://github.com/ahmedeid101/E-learning-Platform",
    live: "https://elearning-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Blog Website",
    description: "Full-stack blog platform with user authentication, post creation, comments, and responsive UI.",
    image: "/assets/images/project2.webp",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/ahmedeid101/Blog-Website-MERN",
    live: "https://blog-website-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Page Turner",
    description: "Interactive reading and note-taking web app with page flipping animations and user libraries.",
    image: "/assets/images/project3.webp",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ahmedeid101/Page_Turner",
    live: "https://pageturner-store.netlify.app/",
    featured: true
  }
];

export const timeline = [
  {
    year: "2026 - Present",
    title: "Full Stack Developer / MERN Stack",
    organization: "Digiliance",
    description: "Building full-stack applications including E-Learning Platform, Blog Website, Page Turner, and other MERN projects, using React, Node.js, Express, MongoDB, Redux, and Tailwind CSS."
  },
  {
    year: "2023 - 2025",
    title: "Full Stack Developer / MERN Stack",
    organization: "Freelance & Training Projects",
    description: "Worked on multiple MERN stack projects, gaining experience in React, Node.js, MongoDB, authentication, and deployment workflows."
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    organization: "The Sparks Foundation",
    description: "Built responsive and modern web interfaces using React and Tailwind CSS, focusing on usability and UI/UX design."
  },
  {
    year: "2018-2023",
    title: "B.Sc. System And Computer Engineering",
    organization: "Al-Azhar University",
    description: "Graduated with honors, specialized in web technologies."
  }
];