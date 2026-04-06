  import { 
  FiStar,
  FiTrendingUp,
  FiBriefcase,
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiAmazonaws,
} from 'react-icons/si';
  
  // Pricing packages data
  export const packages = [
    {
      id: 'basic',
      name: 'Basic',
      icon: <FiBriefcase className="w-6 h-6 text-white" />,
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      monthlyPrice: '100-300',
      yearlyPrice: '800-1200',
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
      icon: <FiTrendingUp className="w-6 h-6 text-white" />,
      description: 'Ideal for growing businesses that need advanced features and scalability.',
      monthlyPrice: '700-1000',
      yearlyPrice: '1200-1600',
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
      icon: <FiStar className="w-6 h-6 text-white" />,
      description: 'For large organizations requiring custom solutions and dedicated support.',
      monthlyPrice: '2000-3000',
      yearlyPrice: '5000-7000',
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
  export const individualServices = [
    {
      name: 'Frontend Development',
      price: '$150 - $300',
      duration: '1-2 weeks',
      icon: <SiReact className="w-5 h-5" style={{ color: '#61DAFB' }} />,
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      popular: true
    },
    {
      name: 'Backend Development',
      price: '$300 - $500',
      duration: '2-3 weeks',
      icon: <SiNodedotjs className="w-5 h-5" style={{ color: '#339933' }} />,
      description: 'Node.js, Express, NestJS, GraphQL',
      popular: false
    },
    {
      name: 'Database Design',
      price: '$200 - $300',
      duration: '1-3 weeks',
      icon: <SiMongodb className="w-5 h-5" style={{ color: '#47A248' }} />,
      description: 'MongoDB, PostgreSQL, Firebase, Redis',
      popular: false
    },
    {
      name: 'API Development',
      price: '$300 - $600',
      duration: '2-4 weeks',
      icon: <SiExpress className="w-5 h-5" style={{ color: '#000000' }} />,
      description: 'RESTful APIs, GraphQL, Webhooks',
      popular: true
    },
    {
      name: 'Cloud Deployment',
      price: '$300 - $600',
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
  export const addons = [
    { name: 'SEO Optimization', price: '$300', description: 'On-page and technical SEO' },
    { name: 'Performance Audit', price: '$300', description: 'Comprehensive performance review' },
    { name: 'Security Audit', price: '$400', description: 'Security vulnerability assessment' },
    { name: 'Content Writing', price: '$50/page', description: 'Professional copywriting' },
    { name: 'Logo Design', price: '$300', description: 'Custom logo design' },
    { name: 'Maintenance Plan', price: '$200/month', description: 'Monthly updates and support' }
  ];

  // FAQ data
  export const faqs = [
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