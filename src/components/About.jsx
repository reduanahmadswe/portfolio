import { motion } from 'framer-motion';

export default function About() {
  return (
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
          <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-sm opacity-50 -z-10"></div>

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

          <div className="lg:w-2/3 p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                <span className="border-b-2 border-accent pb-1">Software Engineer</span>
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm Reduan Ahmad, a passionate Software Engineering student at Daffodil International University, Dhaka, Bangladesh.
                I'm deeply interested in building impactful digital solutions through innovative technology. Currently, I'm actively exploring and
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

        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl opacity-50 -z-10"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl opacity-50 -z-10"></div>
      </motion.div>
    </section>
  );
}