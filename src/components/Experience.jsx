import { motion } from "framer-motion";

export default function Experience() {
  // Hover variants for timeline items
  const itemHover = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  // Hover variants for bullet points
  const bulletHover = {
    hover: {
      scale: 1.2,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <section id="experience" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-10"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Professional Experience
              </span>
            </motion.span>
          </h2>

          <div className="relative space-y-12">
            <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-secondary to-accent -translate-x-1/2"></div>

            {/* Item 1 - Right Aligned */}
            <motion.div
              className="relative group"
              variants={itemHover}
              whileHover="hover"
            >
              <motion.div
                className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"
                variants={bulletHover}
                whileHover="hover"
              />
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-end">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-2xl p-6 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <motion.h3
                        className="text-lg font-bold text-secondary hover:text-accent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Internship
                      </motion.h3>
                      <motion.span
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        XYZ Tech Solutions • Jun-Aug 2024
                      </motion.span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Developed web apps with JavaScript, React, and Node.js",
                        "Collaborated with cross-functional teams",
                        "Participated in code reviews and debugging",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 hover:text-secondary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-secondary mt-1"
                            whileHover={{ scale: 1.5 }}
                          >
                            •
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js"].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#FACC15",
                            color: "#1E293B",
                            boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
                            transition: { type: "spring", stiffness: 400 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 2 - Left Aligned */}
            <motion.div
              className="relative group"
              variants={itemHover}
              whileHover="hover"
            >
              <motion.div
                className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"
                variants={bulletHover}
                whileHover="hover"
              />
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-start">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-2xl p-6 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <motion.h3
                        className="text-lg font-bold text-secondary hover:text-accent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        University Project
                      </motion.h3>
                      <motion.span
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Online Learning Platform • Jan-May 2024
                      </motion.span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Led team of 4 to build platform with Python/Django",
                        "Implemented auth, courses, and messaging",
                        "Applied Agile methodologies",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 hover:text-secondary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-secondary mt-1"
                            whileHover={{ scale: 1.5 }}
                          >
                            •
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {["Python", "Django", "Agile"].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#FACC15",
                            color: "#1E293B",
                            boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
                            transition: { type: "spring", stiffness: 400 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 3 - Right Aligned */}
            <motion.div
              className="relative group"
              variants={itemHover}
              whileHover="hover"
            >
              <motion.div
                className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"
                variants={bulletHover}
                whileHover="hover"
              />
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-end">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-2xl p-6 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <motion.h3
                        className="text-lg font-bold text-secondary hover:text-accent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Open Source Contributor
                      </motion.h3>
                      <motion.span
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        GitHub • Mar 2023-Present
                      </motion.span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Contributed bug fixes and features",
                        "Engaged with developer community",
                        "Improved documentation and tutorials",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 hover:text-secondary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-secondary mt-1"
                            whileHover={{ scale: 1.5 }}
                          >
                            •
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {["JavaScript", "Python", "Git"].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#FACC15",
                            color: "#1E293B",
                            boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
                            transition: { type: "spring", stiffness: 400 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Item 4 - Left Aligned */}
            <motion.div
              className="relative group"
              variants={itemHover}
              whileHover="hover"
            >
              <motion.div
                className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"
                variants={bulletHover}
                whileHover="hover"
              />
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-start">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <motion.div
                    className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 hover:border-secondary/50 rounded-2xl p-6 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <motion.h3
                        className="text-lg font-bold text-secondary hover:text-accent transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Hackathon Participant
                      </motion.h3>
                      <motion.span
                        className="text-accent text-sm hover:text-secondary transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Tech Innovate 2023 • Nov 2023
                      </motion.span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Built social good app in 48 hours",
                        "Used Flutter and Firebase",
                        "Presented to judges, received positive feedback",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2 hover:text-secondary transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="text-secondary mt-1"
                            whileHover={{ scale: 1.5 }}
                          >
                            •
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {["Flutter", "Firebase", "Prototyping"].map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#FACC15",
                            color: "#1E293B",
                            boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
                            transition: { type: "spring", stiffness: 400 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}