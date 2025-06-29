import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-primary bg-opacity-80 backdrop-blur border-b border-neutral shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tight text-secondary"
        >
          Reduan Ahmad
        </motion.span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {['about', 'skills', 'projects', 'education', 'experience', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`link-underline transition px-2 py-1 ${
                activeSection === section ? 'text-secondary font-medium' : 'hover:text-secondary'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary bg-opacity-95 backdrop-blur-lg pb-4 px-6"
        >
          <div className="flex flex-col space-y-3">
            {['about', 'skills', 'projects', 'education', 'experience', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={`py-2 px-3 rounded transition ${
                  activeSection === section
                    ? 'bg-secondary bg-opacity-10 text-secondary font-medium'
                    : 'hover:bg-secondary hover:bg-opacity-5'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;