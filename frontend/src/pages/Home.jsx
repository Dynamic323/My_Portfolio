import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";
import { images, icons } from "../assets";

function Home() {
  const [activeSkill, setActiveSkill] = useState("frontend");

  const handleSkillSelection = (selectedSkill) => {
    setActiveSkill(selectedSkill);
  };

  const skillsList = ["frontend", "Backend" ];

  const frontendSkills = [
    {
      Name: "Javascript",
      icon: <i className="fab fa-js-square"></i>,
    },
    {
      Name: "CSS",
      icon: <i className="fab fa-css3-alt"></i>,
    },
    {
      Name: "HTML",
      icon: <i className="fab fa-html5"></i>,
    },
    {
      Name: "React",
      icon: <i className="fab fa-react"></i>,
    },
    {
      Name: "TypeScript",
      icon: <i className="fas fa-film"></i>,
    },
    {
      Name: "Tailwindcss",
      icon: <i className="fas fa-code"></i>,
    },
    {
      Name: "Bootstrap",
      icon: <i className="fab fa-bootstrap"></i>,
    },
    {
      Name: "FramerMotion",
      icon: <i className="fas fa-film"></i>,
    },
  ];

  const appSkills = [
    {
      Name: "React Native",
      icon: <i className="fab fa-react"></i>,
    },
    // {
    //   Name: "Flutter",
    //   icon: <i className="fas fa-mobile-alt"></i>,
    // },
    // {
    //   Name: "NodeJS",
    //   icon: <i className="fab fa-node-js"></i>,
    // },
  ];

  const backendSkills = [
    {
      Name: "Node.js",
      icon: <i className="fab fa-node-js"></i>,
    },
    {
      Name: "Express.js",
      icon: <i className="fas fa-server"></i>,
    },
    {
      Name: "Php",
      icon: <i className="fab fa-php"></i>,
    },
    {
      Name: "SQL",
      icon: <i className="fas fa-database"></i>,
    },
    {
      Name: "Laravel",
      icon: <i className="fab fa-laravel"></i>,
    },
  ];

  const sharedSkills = [
    {
      Name: "Git",
      icon: <i className="fab fa-git"></i>,
    },
    {
      Name: "GitHub",
      icon: <i className="fab fa-github"></i>,
    },
    {
      Name: "Docker",
      icon: <i className="fab fa-docker"></i>,
    },
    {
      Name: "CI/CD",
      icon: <i className="fas fa-sync-alt"></i>,
    },
    {
      Name: "Figma",
      icon: <i className="fab fa-figma"></i>,
    },
  ];
  return (
    <div className="">
      <Navbar />
      <Pagebg title="About me">
        <section className="about-text">
          <p className="h3">Hello ! 👋,</p>
          <p>
            I'm Israel a full-stack developer who brings ideas to life on the
            web and mobile 📱💻. With 3 years of experience, I craft seamless
            user experiences with React.js and React Native, and build reliable
            backends using Laravel and Node.js. I’m all about delivering
            top-notch solutions that make an impact and continually sharpening
            my skills to stay ahead.
          </p>
        </section>

        <section>
          <h3 className="h3 myskillh3">My Skills</h3>
          <div className="text-stack">
            {skillsList.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillSelection(skill)}
                className={`${activeSkill === skill ? "active" : ""}`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="stack-container">
            {/* Wrap the skill list with motion.ul for animation */}
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {activeSkill === "frontend" &&
                frontendSkills.map((tech) => (
                  <motion.li
                    key={tech.Name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`frontend ${tech.Name.toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/\./g, "-")}`}
                  >
                    {tech.icon} {tech.Name}
                  </motion.li>
                ))}
              {activeSkill === "Backend" &&
                backendSkills.map((tech) => (
                  <motion.li
                    key={tech.Name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`backend ${tech.Name.toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/\./g, "-")}`}
                  >
                    {tech.icon} {tech.Name}
                  </motion.li>
                ))}
              {/* {activeSkill === "App" &&
                appSkills.map((tech) => (
                  <motion.li
                    key={tech.Name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`backend ${tech.Name.toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/\./g, "-")}`}
                  >
                    {tech.icon} {tech.Name}
                  </motion.li>
                ))} */}
            </motion.ul>
          </div>
        </section>

        <section className="skill">
          <h3 className="h3 service-title">Skills Overview</h3>
          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Front End</h5>
                <data value="80">90%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Back end</h5>
                <data value="75">75%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Mobile App</h5>
                <data value="60">65%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </li>
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </li>
          </ul>
        </section>
      </Pagebg>
    </div>
  );
}

export default Home;
