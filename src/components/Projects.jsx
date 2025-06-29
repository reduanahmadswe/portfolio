import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-28 px-4 relative">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="relative inline-block">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Featured Projects
            </span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'E-Commerce Platform',
              desc: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database that handles 10,000+ monthly transactions.',
              img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1170&q=80',
              tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
              github: 'https://github.com/your-repo',
              live: 'https://your-live-demo.com',
            },
            {
              title: 'Task Management App',
              desc: 'A productivity application with drag-and-drop functionality, team collaboration features, and real-time updates.',
              img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1171&q=80',
              tech: ['React', 'Firebase', 'Tailwind', 'DnD', 'Zustand'],
              github: 'https://github.com/your-repo-task-app',
              live: 'https://your-task-demo.com',
            },
            {
              title: 'AI Image Generator',
              desc: 'Web application that generates high-quality images from text prompts using Stable Diffusion models.',
              img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1170&q=80',
              tech: ['Python', 'Flask', 'TensorFlow', 'React', 'Tailwind'],
              github: 'https://github.com/your-repo-ai-gen',
              live: 'https://your-ai-gen-demo.com',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-neutral-800 hover:border-secondary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/90 backdrop-blur-sm z-10"></div>
              <div className="relative z-20 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-secondary">{project.title}</h3>
                    <p className="text-neutral-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-neutral-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234..." />
                      </svg>
                      Source Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0..." />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/projects"}
            className="inline-flex items-center px-6 py-3 border border-secondary text-secondary rounded-full font-medium hover:bg-secondary hover:text-primary transition-all duration-300 group"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}