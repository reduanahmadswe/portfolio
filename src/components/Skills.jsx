import { motion } from 'framer-motion';
import { useEffect } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { icon: "c", name: "C" },
      { icon: "cpp", name: "C++" },
      { icon: "java", name: "Java" },
      { icon: "js", name: "JavaScript" },
      { icon: "ts", name: "TypeScript" },
      { icon: "python", name: "Python" }
    ]
  },
  {
    title: "Database Technologies",
    skills: [
      { icon: "mysql", name: "MySQL" },
      { icon: "postgresql", name: "PostgreSQL" },
      { icon: "sqlite", name: "SQLite" },
      { icon: "mongodb", name: "MongoDB" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { icon: "react", name: "React" },
      { icon: "tailwind", name: "Tailwind" },
      { icon: "bootstrap", name: "Bootstrap" },
      { icon: "flask", name: "Flask" },
      { icon: "flutter", name: "Flutter" },
      { icon: "spring", name: "Spring" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: "git", name: "Git" },
      { icon: "github", name: "GitHub" },
      { icon: "firebase", name: "Firebase" },
      { icon: "vercel", name: "Vercel" },
      { icon: "postman", name: "Postman" },
      { icon: "figma", name: "Figma" }
    ]
  }
];

const softSkills = [
  'Problem Solving', 'Teamwork', 'Communication', 
  'Time Management', 'Leadership', 'Creativity', 
  'Adaptability', 'Critical Thinking'
];

const techHover = {
  hover: {
    scale: 1.2,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const softSkillHover = {
  hover: {
    y: -5,
    scale: 1.05,
    backgroundColor: "#FACC15",
    color: "#1E293B",
    boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
};

const cardHover = {
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export default function Skills() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
          skillsSection.scrollIntoView({ 
            behavior: "smooth", 
            block: "center" // Changed to center the section
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
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center" // Added flex centering
    >
      <div className="w-full">
        <motion.div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-96 left-1/2 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem]">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-secondary to-accent opacity-30" 
              style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
            />
          </div>
        </motion.div>

        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Skills & Technologies
          </span>
        </motion.h2>

        <motion.div 
          className="glass-card rounded-3xl p-6 sm:p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl shadow-primary/10 mx-auto max-w-6xl" // Added max-width and mx-auto
          variants={cardHover}
          whileHover="hover"
        >
          <div className="overflow-x-auto pb-4">
            <motion.table 
              className="w-full min-w-[600px] md:min-w-full"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <thead>
                <tr className="text-center">
                  {skillCategories.map((category) => (
                    <motion.th 
                      key={category.title}
                      variants={item}
                      className="pb-4 sm:pb-6 text-lg sm:text-xl font-semibold text-secondary hover:text-accent transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.title}
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {skillCategories.map((category, index) => (
                    <motion.td 
                      key={category.title}
                      variants={item}
                      className={`p-3 sm:p-4 border border-neutral/20 ${index === 0 ? 'rounded-l-lg' : ''} ${index === skillCategories.length - 1 ? 'rounded-r-lg' : ''}`}
                    >
                      <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
                        {category.skills.map((skill) => (
                          <motion.div 
                            key={skill.name}
                            variants={techHover}
                            whileHover="hover"
                            whileTap={{ scale: 0.9 }}
                            className="relative group"
                          >
                            <img 
                              src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                              alt={skill.name} 
                              className="h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300" 
                            />
                            <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-accent text-black text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.td>
                  ))}
                </tr>
              </tbody>
            </motion.table>
          </div>

          <motion.div 
            className="mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-secondary">
              Soft Skills & Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={softSkillHover}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-secondary/10 text-secondary rounded-full text-xs sm:text-sm font-medium cursor-default shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}