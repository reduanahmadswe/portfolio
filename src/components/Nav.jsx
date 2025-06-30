import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  // Handle scroll to update navbar style and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ["about", "skills", "experience", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/95 backdrop-blur-lg shadow-lg border-b border-neutral/10"
          : "bg-base-100/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-blue-500 hover:text-blue-600 transition-colors">Reduan</span>
            <span className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">Ahmad</span>
          </motion.button>

          {/* Desktop Navigation and Resume Button - Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-bold text-lg px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "text-blue-500"
                        : "text-base-content hover:text-blue-500"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="h-0.5 bg-blue-500 mt-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </motion.button>
                </li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
              >
                <FaDownload className="text-sm" />
                <span className="text-sm font-medium">Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden ml-4 p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-base-100/95 backdrop-blur-lg"
            >
              <ul className="px-4 py-3 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.2,
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
                          ? "bg-blue-500/10 text-blue-500"
                          : "text-base-content hover:bg-neutral/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.2 }}
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  >
                    <FaDownload />
                    <span>Download Resume</span>
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;