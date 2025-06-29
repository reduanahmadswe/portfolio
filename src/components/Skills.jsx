import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-20 px-4" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          Skills & Technologies
        </span>
      </h2>

      <div className="glass-card rounded-3xl p-8 backdrop-blur-sm border border-neutral/10 shadow-2xl">
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
  );
}