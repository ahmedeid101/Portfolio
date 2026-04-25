import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
import EducationCertifications from '../components/education/EducationCertifications';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  const location =  useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  
  return (
    <main>
      <Hero />
      <About />
      <EducationCertifications /> 
      <Skills />
      <Services />
      <Projects />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;