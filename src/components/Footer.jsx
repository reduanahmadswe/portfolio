import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/reduanahmadswe", color: "hover:text-gray-800" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/reduanahmadswe/", color: "hover:text-blue-600" },
    { icon: <FaTwitter />, url: "https://twitter.com/reduanahmadswe", color: "hover:text-blue-400" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-b from-primary to-primary-dark pt-7 pb-5 border-t border-neutral-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/10 blur-3xl opacity-20"></div>
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl p-4 rounded-full bg-white/5 backdrop-blur-sm ${link.color} transition-all`}
                whileHover={{ 
                  y: -5,
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-300">
            &copy; {new Date().getFullYear()} <span className="text-secondary font-medium">Reduan Ahmad</span>. All rights reserved.
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-secondary/10 text-secondary hover:bg-accent hover:text-primary transition-all group"
            whileHover={{ 
              y: -3,
              scale: 1.05,
              boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="group-hover:text-black"
            >
              <FaArrowUp />
            </motion.span>
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;