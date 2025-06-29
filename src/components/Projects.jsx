import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database that handles 10,000+ monthly transactions.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1170&q=80',
    tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    desc: 'A productivity application with drag-and-drop functionality, team collaboration features, and real-time updates.',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1171&q=80',
    tech: ['React', 'Firebase', 'Tailwind', 'DnD', 'Zustand'],
    github: '#',
    live: '#',
  },
  {
    title: 'AI Image Generator',
    desc: 'Web application that generates high-quality images from text prompts using Stable Diffusion models.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1170&q=80',
    tech: ['Python', 'Flask', 'TensorFlow', 'React', 'Tailwind'],
    github: '#',
    live: '#',
  },
  {
    title: 'Health Fitness Tracker',
    desc: 'Mobile application for tracking workouts, nutrition, and health metrics with data visualization.',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1170&q=80',
    tech: ['Flutter', 'Firebase', 'Dart', 'BLoC', 'Charts'],
    github: '#',
    live: '#',
  },
  {
    title: 'Blockchain Explorer',
    desc: 'Real-time blockchain data visualization tool with transaction history and wallet tracking.',
    img: 'https://images.unsplash.com/photo-1621413276213-40c9f4d1e8d7?auto=format&fit=crop&w=1170&q=80',
    tech: ['Web3.js', 'Ethers.js', 'React', 'Node.js', 'Ethereum'],
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media Dashboard',
    desc: 'Analytics dashboard for social media managers with cross-platform metrics and reporting.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1074&q=80',
    tech: ['Next.js', 'Tailwind', 'GraphQL', 'Chart.js', 'OAuth'],
    github: '#',
    live: '#',
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28 px-4">
      {/* Background elements */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-20"></div>
      <div className="absolute -right-20 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl opacity-10"></div>
      <div className="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent to-primary blur-3xl opacity-10"></div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Featured Projects
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full origin-left"
              ></motion.span>
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Here are some of my most recent and noteworthy projects. Each one represents unique challenges and solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-neutral-800 hover:border-secondary/50 transition-all duration-500"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-primary/90 to-primary backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{project.title}</h3>
                <p className="text-neutral-300 mb-4">{project.desc}</p>
                
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <motion.span 
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-4 border-t border-neutral-800">
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/projects"}
            className="inline-flex items-center px-6 py-3 border-2 border-secondary text-secondary rounded-full font-medium transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}