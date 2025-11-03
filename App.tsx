
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PaperDoors from './components/PaperDoors';
import NavTrail from './components/NavTrail';
import BackToTop from './components/BackToTop';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    if (!hasEntered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-50% 0px -50% 0px' 
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
        sections.forEach(section => observer.unobserve(section));
    };
  }, [hasEntered]);

  const handleEnter = () => {
    setHasEntered(true);
  };

  const handleNavigate = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!hasEntered) {
    return <PaperDoors onEnter={handleEnter} />;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-slate-100 -z-10"></div>
      <Header />
      <NavTrail activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="container mx-auto px-6 md:px-12">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;