import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Services from '../components/Services';
import EducationCertifications from '../components/education/EducationCertifications';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <EducationCertifications /> 
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default HomePage;