import { 
  FiMonitor, 
  FiServer, 
  FiDatabase, 
  FiSettings,
} from 'react-icons/fi';

export const categories = {
  frontend: {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    description: 'Crafting responsive, interactive user interfaces with modern frameworks and libraries.',
  },
  backend: {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    description: 'Building robust server-side applications with scalable APIs and business logic.',
  },
  database: {
    title: 'Database & APIs',
    icon: '🗄️',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    description: 'Designing efficient database schemas and implementing real-time data synchronization.',
  },
  tools: {
    title: 'Tools & Workflow',
    icon: '🛠️',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    description: 'Streamlining development workflows with modern CI/CD pipelines and containerization.',
  }
};

export const techCategories = ['frontend', 'backend', 'database', 'tools'];

// Skills categories
export const skillCategories = [
    { name: "Frontend", icon: FiMonitor, color: "blue", tech: "React, Next.js, Tailwind" },
    { name: "Backend", icon: FiServer, color: "green", tech: "Node.js, Express, Python" },
    { name: "Database", icon: FiDatabase, color: "yellow", tech: "MongoDB, PostgreSQL, Redis" },
    { name: "DevOps", icon: FiSettings, color: "purple", tech: "Docker, AWS, CI/CD" }
];