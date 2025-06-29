import { motion } from "framer-motion";
import { FiUser, FiAward, FiCode, FiMail } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-[#1E293B]/5 to-[#020617]/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Visual Section with Rotating Border */}
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

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* Tagline */}
            <h3 className="text-2xl md:text-3xl font-semibold text-secondary mb-6">
              Software Engineering student passionate about building efficient
              and impactful digital experiences.
            </h3>

            {/* Main Text */}
            <div className="prose prose-invert max-w-none text-text/90 space-y-4">
              <p>
                I'm a curious and driven Software Engineering student who loves
                turning ideas into functional, well-crafted applications. From
                the moment I built my first simple app, I became fascinated by
                the creative power of technology.
              </p>
              <p>
                My interests lie at the intersection of development, design, and
                problem-solving. I enjoy working with modern web technologies,
                exploring full-stack development, and continually improving my
                coding practices to write clean, scalable code.
              </p>
              <p>
                Outside of coursework, I actively engage in self-driven
                projects, contribute to open-source, and stay updated with the
                latest tools, frameworks, and tech trends. Whether it's
                front-end polish or back-end architecture, I strive to build
                with both performance and user experience in mind.
              </p>
            </div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-xl border border-neutral/10 flex items-center space-x-3">
                <FiAward className="text-secondary text-xl" />
                <span className="font-medium">5+ Projects</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-xl border border-neutral/10 flex items-center space-x-3">
                <FiCode className="text-secondary text-xl" />
                <span className="font-medium">Full Stack</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-xl border border-neutral/10 flex items-center space-x-3">
                <FiUser className="text-secondary text-xl" />
                <span className="font-medium">Open Source</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-xl border border-neutral/10 flex items-center space-x-3">
                <FiMail className="text-secondary text-xl" />
                <span className="font-medium">Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
