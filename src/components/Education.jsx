import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Education() {
  // Hover variants for cards
  const cardHover = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  // Hover variants for certification items
  const certHover = {
    hover: {
      x: 5,
      borderLeftWidth: "4px",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Tech badge hover effect
  const techHover = {
    hover: {
      scale: 1.1,
      backgroundColor: "#FACC15",
      color: "#1E293B",
      boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 400 
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#education") {
        const educationSection = document.getElementById("education");
        if (educationSection) {
          educationSection.scrollIntoView({ 
            behavior: "smooth", 
            block: "center" // Center the section in the viewport
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section 
      id="education" 
      className="relative min-h-screen py-16 md:py-28 px-4 sm:px-6 overflow-hidden flex items-center justify-center"
    >
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-10"></div>

      <div className="container mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Education & Credentials
              </span>
            </motion.span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Education Card */}
            <motion.div 
              className="relative group"
              variants={cardHover}
              whileHover="hover"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-3xl p-6 sm:p-8 h-full transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-secondary hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                  </motion.div>
                  <div className="w-full">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-secondary mb-2 hover:text-accent transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      B.Sc. in Software Engineering
                    </motion.h3>
                    <p className="text-base sm:text-lg font-medium mb-3 hover:text-secondary transition-colors">Daffodil International University</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <motion.span 
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium"
                        whileHover={techHover.hover}
                      >
                        2023 - Present
                      </motion.span>
                      <motion.span 
                        className="px-2 py-1 sm:px-3 sm:py-1 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium"
                        whileHover={techHover.hover}
                      >
                        GPA: 3.8/4.0
                      </motion.span>
                    </div>

                    <h4 className="font-semibold text-secondary mb-3 hover:text-accent transition-colors">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Database Systems', 'Software Architecture',
                        'Machine Learning', 'Web Development', 'Cloud Computing', 'AI Fundamentals'].map((course) => (
                          <motion.span 
                            key={course} 
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-neutral-800 rounded-full text-xs sm:text-sm"
                            whileHover={techHover.hover}
                          >
                            {course}
                          </motion.span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div 
              className="relative group"
              variants={cardHover}
              whileHover="hover"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-3xl p-6 sm:p-8 h-full transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-secondary hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </motion.div>
                  <div className="w-full">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-secondary mb-4 hover:text-accent transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      Certifications
                    </motion.h3>

                    <div className="space-y-4 sm:space-y-5">
                      <motion.div 
                        className="border-l-2 border-secondary hover:border-accent pl-3 sm:pl-4 transition-all"
                        variants={certHover}
                        whileHover="hover"
                      >
                        <h4 className="font-bold text-base sm:text-lg hover:text-secondary transition-colors">Full Stack Web Development</h4>
                        <p className="text-xs sm:text-sm text-neutral-300 hover:text-secondary transition-colors">Coursera • 2023</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {['React', 'Node.js', 'MongoDB'].map((tech) => (
                            <motion.span 
                              key={tech}
                              className="px-2 py-1 bg-neutral-800 rounded-full text-xs"
                              whileHover={techHover.hover}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border-l-2 border-secondary hover:border-accent pl-3 sm:pl-4 transition-all"
                        variants={certHover}
                        whileHover="hover"
                      >
                        <h4 className="font-bold text-base sm:text-lg hover:text-secondary transition-colors">AWS Cloud Practitioner</h4>
                        <p className="text-xs sm:text-sm text-neutral-300 hover:text-secondary transition-colors">Amazon Web Services • 2024</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {['AWS', 'Cloud', 'DevOps'].map((tech) => (
                            <motion.span 
                              key={tech}
                              className="px-2 py-1 bg-neutral-800 rounded-full text-xs"
                              whileHover={techHover.hover}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        className="border-l-2 border-secondary hover:border-accent pl-3 sm:pl-4 transition-all"
                        variants={certHover}
                        whileHover="hover"
                      >
                        <h4 className="font-bold text-base sm:text-lg hover:text-secondary transition-colors">React Advanced Concepts</h4>
                        <p className="text-xs sm:text-sm text-neutral-300 hover:text-secondary transition-colors">Frontend Masters • 2023</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {['Hooks', 'Performance', 'Testing'].map((tech) => (
                            <motion.span 
                              key={tech}
                              className="px-2 py-1 bg-neutral-800 rounded-full text-xs"
                              whileHover={techHover.hover}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/10 blur-xl opacity-50 hover:opacity-70 transition-opacity duration-500 -z-10"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl opacity-50 hover:opacity-70 transition-opacity duration-500 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}