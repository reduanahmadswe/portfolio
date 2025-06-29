import { motion } from 'framer-motion';

export default function Experience() {
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
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Professional Experience
              </span>
              
            </span>
          </h2>

          <div className="relative space-y-12">
            <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-secondary to-accent -translate-x-1/2"></div>

            <div className="relative group">
              <div className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"></div>
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-end">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3 className="text-lg font-bold text-secondary">Internship</h3>
                      <span className="text-accent text-sm">XYZ Tech Solutions • Jun-Aug 2024</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Developed web apps with JavaScript, React, and Node.js</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Collaborated with cross-functional teams</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Participated in code reviews and debugging</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {['JavaScript', 'React', 'Node.js'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"></div>
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-start">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3 className="text-lg font-bold text-secondary">University Project</h3>
                      <span className="text-accent text-sm">Online Learning Platform • Jan-May 2024</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Led team of 4 to build platform with Python/Django</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Implemented auth, courses, and messaging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Applied Agile methodologies</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {['Python', 'Django', 'Agile'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"></div>
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-end">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3 className="text-lg font-bold text-secondary">Open Source Contributor</h3>
                      <span className="text-accent text-sm">GitHub • Mar 2023-Present</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Contributed bug fixes and features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Engaged with developer community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Improved documentation and tutorials</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {['JavaScript', 'Python', 'Git'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute left-6 md:left-1/2 h-4 w-4 rounded-full bg-secondary -translate-x-1/2 mt-2 z-10"></div>
              <div className="ml-12 md:ml-0 md:pl-12 md:pr-12 flex flex-col md:items-start">
                <div className="relative w-full md:w-5/12">
                  <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <h3 className="text-lg font-bold text-secondary">Hackathon Participant</h3>
                      <span className="text-accent text-sm">Tech Innovate 2023 • Nov 2023</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Built social good app in 48 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Used Flutter and Firebase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span>Presented to judges, received positive feedback</span>
                      </li>
                    </ul>
                    <div className="mt-3 pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                      {['Flutter', 'Firebase', 'Prototyping'].map(tech => (
                        <span key={tech} className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}