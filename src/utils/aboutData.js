import { personalInfo } from './constants';
export const openWhatsApp = () => {
    const phoneNumber = personalInfo.whatsapp || '+201092887320';
    const message = encodeURIComponent("Hi! I'm interested in working with you.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  export const subjects = [
    "Web Development Project",
    "Mobile App Development",
    "API Integration",
    "Database Design",
    "Consultation",
    "Other"
  ];

  export const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet"
  ];

  export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };