import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-4 overflow-hidden">
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
                Education & Credentials
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">B.Sc. in Software Engineering</h3>
                    <p className="text-lg font-medium mb-3">Daffodil International University</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">2023 - Present</span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">GPA: 3.8/4.0</span>
                    </div>

                    <h4 className="font-semibold text-secondary mb-3">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Database Systems', 'Software Architecture',
                        'Machine Learning', 'Web Development', 'Cloud Computing', 'AI Fundamentals'].map((course) => (
                          <span key={course} className="px-3 py-1 bg-neutral-800 rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 h-full">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-4">Certifications</h3>

                    <div className="space-y-5">
                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-bold text-lg">Full Stack Web Development</h4>
                        <p className="text-sm text-neutral-300">Coursera • 2023</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">React</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">Node.js</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">MongoDB</span>
                        </div>
                      </div>

                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-bold text-lg">AWS Cloud Practitioner</h4>
                        <p className="text-sm text-neutral-300">Amazon Web Services • 2024</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">AWS</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">Cloud</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">DevOps</span>
                        </div>
                      </div>

                      <div className="border-l-2 border-secondary pl-4">
                        <h4 className="font-bold text-lg">React Advanced Concepts</h4>
                        <p className="text-sm text-neutral-300">Frontend Masters • 2023</p>
                        <div className="mt-2 flex gap-2">
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">Hooks</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">Performance</span>
                          <span className="px-2 py-1 bg-neutral-800 rounded-full text-xs">Testing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/10 blur-xl opacity-50 -z-10"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl opacity-50 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}