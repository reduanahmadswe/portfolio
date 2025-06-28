import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
   <div className="bg-primary min-h-screen text-text font-sans bg-gradient-to-br from-primary via-[#1E293B] to-[#020617] bg-[length:200%_200%] animate-gradient">
      {/* nav bar */}
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
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="link-underline hover:text-secondary transition px-2 py-1">About</a>
            <a href="#skills" className="link-underline hover:text-secondary transition px-2 py-1">Skills</a>
            <a href="#projects" className="link-underline hover:text-secondary transition px-2 py-1">Projects</a>
            <a href="#education" className="link-underline hover:text-secondary transition px-2 py-1">Education</a>
            <a href="#experience" className="link-underline hover:text-secondary transition px-2 py-1">Experience</a>
            <a href="#contact" className="link-underline hover:text-secondary transition px-2 py-1">Contact</a>
            {/* Other nav links */}
          </div>
        </div>
      </nav>

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


      {/* About Section */}
      <section id="about" className="container mx-auto py-28 px-4 relative">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                About Me
              </span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full"></span>
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-primary/80 to-primary/90 backdrop-blur-sm rounded-3xl p-1 shadow-2xl border border-neutral/10">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-sm opacity-50 -z-10"></div>

            {/* Profile image with floating effect */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative lg:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden group">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHteH2xSxx_Ew/profile-displayphoto-shrink_400_400/B56ZPgEeigH0As-/0/1734631090780?e=1756339200&v=beta&t=oOmGlKkzS3ZElzPqhuAd1DiduX9GhwbxDGmfP1nPizY"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute -inset-4 border-2 border-secondary/30 rounded-2xl group-hover:border-secondary/50 transition-all duration-500"></div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  <span className="border-b-2 border-accent pb-1">Software Engineer</span>
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  Hi, I'm Reduan Ahmad, a passionate Software Engineering student at Daffodil International University, Dhaka, Bangladesh.
                  I’m deeply interested in building impactful digital solutions through innovative technology. Currently, I’m actively exploring and
                  learning modern tools and technologies to sharpen my skills in coding, problem-solving, and full-cycle software development. I aim
                  to contribute meaningfully to the tech industry by turning ideas into efficient, scalable, and user-friendly applications.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Web Development</span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">UI/UX Design</span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">Cloud Computing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Experience</h4>
                    <p className="text-sm text-neutral-300">3+ years building web applications</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Specialization</h4>
                    <p className="text-sm text-neutral-300">Full-stack development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements for decoration */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl opacity-50 -z-10"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl opacity-50 -z-10"></div>
        </motion.div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="container mx-auto py-20 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Skills & Technologies
          </span>
        </h2>

        <div className="glass-card rounded-3xl p-8 backdrop-blur-sm border border-neutral/10 shadow-2xl">
          {/* Technical Skills Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-center">
                  <th className="pb-6 text-xl font-semibold text-secondary">Programming Languages</th>
                  <th className="pb-6 text-xl font-semibold text-secondary">Database Technologies</th>
                  <th className="pb-6 text-xl font-semibold text-secondary">Frameworks & Libraries</th>
                  <th className="pb-6 text-xl font-semibold text-secondary">Tools & Platforms</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-neutral/20 rounded-l-lg">
                    <div className="flex justify-center flex-wrap gap-4">
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=c" alt="C" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=java" alt="Java" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=python" alt="Python" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </td>
                  <td className="p-4 border border-neutral/20">
                    <div className="flex justify-center flex-wrap gap-4">
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=sqlite" alt="SQLite" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </td>
                  <td className="p-4 border border-neutral/20">
                    <div className="flex justify-center flex-wrap gap-4">
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=react" alt="React" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=flask" alt="Flask" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=spring" alt="Spring" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </td>
                  <td className="p-4 border border-neutral/20 rounded-r-lg">
                    <div className="flex justify-center flex-wrap gap-4">
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=git" alt="Git" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                      <a href="https://github.com/reduanahmadswe" className="skill-icon">
                        <img src="https://skillicons.dev/icons?i=figma" alt="Figma" className="h-12 w-12 hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Soft Skills Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-secondary">
              Soft Skills & Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Teamwork', 'Communication', 'Time Management', 'Leadership',
                'Creativity', 'Adaptability', 'Critical Thinking'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -5 }}
                    className="px-5 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

{/* Projects Section */}
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
      {/* Project Card Template */}
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
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
            </div>

            {/* Content */}
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

    {/* View More Projects Button */}
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


      {/* Education Section */}
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
              {/* Degree Card */}
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

              {/* Certifications Card */}
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

            {/* Decorative elements */}
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/10 blur-xl opacity-50 -z-10"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
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
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full"></span>
              </span>
            </h2>

            <div className="relative space-y-12">
              {/* Timeline bar */}
              <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-secondary to-accent -translate-x-1/2"></div>

              {/* Experience 1 - Left */}
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

              {/* Experience 2 - Right */}
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

              {/* Experience 3 - Left */}
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

              {/* Experience 4 - Right */}
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

      {/* Contact Section */}
      <section id="contact" className="relative py-28 px-4 overflow-hidden">
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
                  Let's Connect
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full"></span>
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Get in Touch</h3>
                  <p className="mb-8 text-lg">I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!</p>

                  <div className="space-y-6">
                    {/* Email */}
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="mailto:reduanahmadswe@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50 transition-all"
                    >
                      <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-300">Email</h4>
                        <p className="text-secondary">reduanahmadswe@gmail.com</p>
                      </div>
                    </motion.a>

                    {/* Phone */}
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="tel:+8801538363737"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-800/50 transition-all"
                    >
                      <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-300">Phone</h4>
                        <p className="text-secondary">+880 1538 363737</p>
                      </div>
                    </motion.a>

                    {/* Location */}
                    <div className="flex items-center gap-4 p-4 rounded-xl">
                      <div className="flex-shrink-0 bg-secondary/10 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-300">Location</h4>
                        <p className="text-secondary">Bijoynagar, Brahmanbaria</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-10">
                    <h4 className="text-xl font-semibold mb-4 text-secondary">Follow Me</h4>
                    <div className="flex gap-4">
                      {[
                        {
                          name: 'LinkedIn',
                          url: 'https://www.linkedin.com/in/reduanahmadswe/',
                          icon: <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        },
                        {
                          name: 'GitHub',
                          url: 'https://github.com/reduanahmadswe',
                          icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        },
                        {
                          name: 'Twitter',
                          url: '#',
                          icon: <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        }
                      ].map((social) => (
                        <motion.a
                          key={social.name}
                          whileHover={{ y: -3 }}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-neutral-800/50 rounded-full hover:bg-secondary hover:text-primary transition-all"
                          aria-label={social.name}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            {social.icon}
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">Send Me a Message</h3>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-neutral-300">Your Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          placeholder="Reduan Ahmad"
                          className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-white placeholder-neutral-500 transition-all"
                          required
                        />
                        <div className="absolute inset-0 rounded-lg border border-secondary opacity-0 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-neutral-300">Email Address</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          placeholder="reduan@example.com"
                          className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-black placeholder-neutral-500 transition-all"
                          required
                        />
                        <div className="absolute inset-0 rounded-lg border border-secondary opacity-0 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium text-neutral-300">Your Message</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows="5"
                          placeholder="Hello, I'd like to talk about..."
                          className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-black placeholder-neutral-500 transition-all"
                          required
                        ></textarea>
                        <div className="absolute inset-0 rounded-lg border border-secondary opacity-0 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-secondary to-accent text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-text bg-primary border-t border-neutral">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Reduan Ahmad. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;