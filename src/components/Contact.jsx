import { motion } from 'framer-motion';

export default function Contact() {
  return (
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
            <motion.div
              whileHover={{ y: -5 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-accent rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary/90 to-primary/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Get in Touch</h3>
                <p className="mb-8 text-lg">I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!</p>

                <div className="space-y-6">
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
  );
}