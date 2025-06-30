import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col justify-center items-center min-h-screen text-center px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float-delay"></div>
      </div>

      {/* Main content - now centered since we removed the profile picture */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Hi, I'm <span className="whitespace-nowrap">Reduan Ahmad</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-text/80"
        >
          I am a{" "}
          <span className="text-blue-500">
            <Typewriter
              words={[
                "Web Developer",
                "React Developer",
                "Full Stack Developer",
                "Software Engineer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-text/70"
        >
          Passionate about building efficient and scalable applications with modern web technologies.
          Currently focused on creating accessible, human-centered products.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-full bg-secondary hover:bg-accent text-primary px-8 py-3 font-semibold shadow-lg transition-all duration-300"
          >
            Contact Me
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="rounded-full border-2 border-secondary hover:bg-accent hover:text-primary px-8 py-3 font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FiDownload className="text-lg" />
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 text-2xl mt-8 justify-center"
        >
          <a href="https://github.com/reduanahmadswe" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/reduanahmadswe/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com/reduanahmadswe" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/reduanahmadswe" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-secondary group">
          <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="h-6 w-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;