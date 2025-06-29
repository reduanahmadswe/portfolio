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
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-primary min-h-screen text-text font-sans bg-gradient-to-br from-primary via-[#1E293B] to-[#020617] bg-[length:200%_200%] animate-gradient">
      {/* nav bar */}
       <Nav />


      {/* Hero Section */}
      <section id="hero" className="flex flex-col justify-center items-center h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Hi, I'm Reduan Ahmad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          A Software Engineering student passionate about building efficient and scalable applications.
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-full bg-secondary text-primary px-6 py-2 font-semibold shadow-lg btn-glow hover:bg-blue-500 transition-all duration-300"
          >
            Contact
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="rounded-full border-2 border-secondary text-secondary px-6 py-2 font-semibold shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            Download Resume
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 animate-bounce"
        >
          <a href="#about" className="text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </section>

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