import { motion, AnimatePresence } from "framer-motion";

// Sample data for skills (expand as needed)
const frontendSkills = [
  { Name: "JavaScript", icon: "🟡" },
  { Name: "React", icon: "🔵" },
  { Name: "TypeScript", icon: "🔷" },
  { Name: "HTML", icon: "🟠" },
  { Name: "CSS", icon: "🔵" },
  { Name: "Tailwind CSS", icon: "🌊" },
  { Name: "Framer Motion", icon: "🎬" },
  { Name: "Next.js", icon: "⚫" },
  { Name: "Redux", icon: "🟣" },
  { Name: "Git", icon: "🟤" },
];

const backendSkills = [
  { Name: "Node.js", icon: "🟢" },
  { Name: "Express.js", icon: "⚫" },
  { Name: "PHP", icon: "🟣" },
  { Name: "Laravel", icon: "🔴" },
  { Name: "SQL", icon: "🔵" },
  { Name: "MongoDB", icon: "🟢" },
  { Name: "Docker", icon: "🐳" },
  { Name: "Firebase", icon: "🔥" },
  { Name: "GraphQL", icon: "🟣" },
  { Name: "Python", icon: "🐍" },
];

const MySkillsSection = ({ activeSkill, handleSkillSelection }) => {
  const skillsList = ["frontend", "Backend"];

  return (
    <section>
      <h3 className="h3 myskillh3">My Skills</h3>
      <div className="text-stack">
        {skillsList.map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillSelection(skill)}
            className={activeSkill === skill ? "active" : ""}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="stack-container" data-active={activeSkill}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill}
            className="skills-slider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="skills-row"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {(activeSkill === "frontend" ? frontendSkills : backendSkills)
                .slice(0, 5)
                .map((tech) => (
                  <motion.div
                    key={tech.Name}
                    className={`skill-card ${tech.Name.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, rotate: -10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.Name}</span>
                  </motion.div>
                ))}
            </motion.div>
            <motion.div
              className="skills-row"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              {(activeSkill === "frontend" ? frontendSkills : backendSkills)
                .slice(5)
                .map((tech) => (
                  <motion.div
                    key={tech.Name}
                    className={`skill-card ${tech.Name.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, rotate: 10 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.Name}</span>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MySkillsSection;
