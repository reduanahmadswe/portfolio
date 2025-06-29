import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-primary min-h-screen text-text font-sans bg-gradient-to-br from-primary via-[#1E293B] to-[#020617] bg-[length:200%_200%] animate-gradient">
      {/* nav bar */}
       <Nav />
       <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;