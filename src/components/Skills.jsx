import { motion } from 'framer-motion';

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

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="container mx-auto py-20 px-4"
    >
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          Skills & Technologies
        </span>
      </motion.h2>

      <div className="glass-card rounded-3xl p-8 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl shadow-primary/10">
        <div className="overflow-x-auto pb-4">
          <motion.table 
            className="w-full min-w-[800px] md:min-w-0"
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
                    className="pb-6 text-xl font-semibold text-secondary"
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
                    className={`p-4 border border-neutral/20 ${index === 0 ? 'rounded-l-lg' : ''} ${index === skillCategories.length - 1 ? 'rounded-r-lg' : ''}`}
                  >
                    <div className="flex justify-center flex-wrap gap-6">
                      {category.skills.map((skill) => (
                        <motion.div 
                          key={skill.name}
                          whileHover={{ scale: 1.2, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="relative group"
                        >
                          <img 
                            src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                            alt={skill.name} 
                            className="h-12 w-12 transition-all duration-300" 
                          />
                          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
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
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-secondary">
            Soft Skills & Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary hover:text-primary transition-all cursor-default shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}