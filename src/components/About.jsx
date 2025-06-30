import { motion } from "framer-motion";
import { FiUser, FiAward, FiCode, FiMail } from "react-icons/fi";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          // Calculate the position to center the section
          const viewportHeight = window.innerHeight;
          const sectionHeight = aboutSection.offsetHeight;
          const scrollPosition = aboutSection.offsetTop - (viewportHeight - sectionHeight) / 2;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
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
      id="about"
      className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-[#1E293B]/5 to-[#020617]/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary mb-4">
            About Me
          </h2>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image/Visual Section */}
          <motion.div
            whileHover={{ y: -10 }}
            className="relative w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden group">
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
            className="flex-1 w-full"
          >
            {/* Tagline */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary mb-4 sm:mb-6">
              Software Engineering student passionate about building efficient
              and impactful digital experiences.
            </h3>

            {/* Main Text */}
            <div className="prose prose-invert max-w-none text-text/90 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                I'm a curious and driven Software Engineering student who loves
                turning ideas into functional, well-crafted applications. From
                the moment I built my first simple app, I became fascinated by
                the creative power of technology.
              </p>
              <p className="text-sm sm:text-base">
                My interests lie at the intersection of development, design, and
                problem-solving. I enjoy working with modern web technologies,
                exploring full-stack development, and continually improving my
                coding practices to write clean, scalable code.
              </p>
              <p className="text-sm sm:text-base">
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
              className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="bg-primary/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-neutral/10 flex items-center space-x-2 sm:space-x-3">
                <FiAward className="text-secondary text-lg sm:text-xl" />
                <span className="font-medium text-sm sm:text-base">5+ Projects</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-neutral/10 flex items-center space-x-2 sm:space-x-3">
                <FiCode className="text-secondary text-lg sm:text-xl" />
                <span className="font-medium text-sm sm:text-base">Full Stack</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-neutral/10 flex items-center space-x-2 sm:space-x-3">
                <FiUser className="text-secondary text-lg sm:text-xl" />
                <span className="font-medium text-sm sm:text-base">Open Source</span>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-neutral/10 flex items-center space-x-2 sm:space-x-3">
                <FiMail className="text-secondary text-lg sm:text-xl" />
                <span className="font-medium text-sm sm:text-base">Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;