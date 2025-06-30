import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/reduanahmadswe/', icon: <FaLinkedin /> },
    { name: 'GitHub', url: 'https://github.com/reduanahmadswe', icon: <FaGithub /> },
    { name: 'Twitter', url: '#', icon: <FaTwitter /> }
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-secondary to-accent blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Let's Connect
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Contact Information</h3>
              <p className="mb-8 text-neutral-300 flex-grow">I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!</p>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <motion.a
                  whileHover={{ x: 5, backgroundColor: 'rgba(30, 58, 138, 0.1)' }}
                  href="mailto:reduanahmadswe@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/50 transition-all"
                >
                  <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full">
                    <FaEnvelope className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-300">Email</h4>
                    <p className="text-secondary">reduanahmadswe@gmail.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  whileHover={{ x: 5, backgroundColor: 'rgba(30, 58, 138, 0.1)' }}
                  href="tel:+8801538363737"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/50 transition-all"
                >
                  <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full">
                    <FaPhone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-300">Phone</h4>
                    <p className="text-secondary">+880 1538 363737</p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ x: 5, backgroundColor: 'rgba(30, 58, 138, 0.1)' }}
                  href="https://api.whatsapp.com/send/?phone=%2B8801538363737&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/50 transition-all"
                >
                  <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full">
                    <FaWhatsapp className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-300">WhatsApp</h4>
                    <p className="text-secondary">Chat with me</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/20 hover:bg-neutral-800/50 transition-all"
                >
                  <div className="flex-shrink-0 bg-secondary/10 p-3 rounded-full">
                    <FaMapMarkerAlt className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-300">Location</h4>
                    <p className="text-secondary">Bijoynagar, Brahmanbaria</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <h4 className="text-xl font-semibold mb-4 text-secondary">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ 
                        y: -3, 
                        scale: 1.1,
                        backgroundColor: 'rgba(59, 130, 246, 0.2)'
                      }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-800/20 rounded-full hover:bg-secondary/20 transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Improved version */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Send Me a Message</h3>
              <form className="flex flex-col h-full">
                <div className="space-y-5 flex-grow">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">Your Name</label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="text"
                        id="name"
                        placeholder="Reduan "
                        className="w-full px-4 py-3 bg-neutral-800/20 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-black placeholder-neutral-500 transition-all"
                        required
                      />
                    </motion.div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">Email Address</label>
                    <motion.div whileHover={{ scale: 1.01 }}>
                      <input
                        type="email"
                        id="email"
                        placeholder="reduan@example.com"
                        className="w-full px-4 py-3 bg-neutral-800/20 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-black placeholder-neutral-500 transition-all"
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">Your Message</label>
                    <motion.div whileHover={{ scale: 1.01 }} className="h-full">
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Hello, I'd like to talk about..."
                        className="w-full h-full min-h-[120px] px-4 py-3 bg-neutral-800/20 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent text-black placeholder-neutral-500 transition-all resize-none"
                        required
                      ></textarea>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: '0 15px 15px -3px rgba(59, 130, 246, 0.3)'
                    }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full sm:w-auto sm:flex-grow py-3 px-6 bg-gradient-to-r from-secondary to-accent text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="h-4 w-4" />
                    Send Message
                  </motion.button>
                
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}