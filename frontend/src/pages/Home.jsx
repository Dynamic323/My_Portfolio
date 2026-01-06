"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";
import { images, icons } from "../assets";

function Home() {
  const [activeSkill, setActiveSkill] = useState("frontend");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleSkillSelection = (selectedSkill) => {
    setActiveSkill(selectedSkill);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const skillsList = ["frontend", "Backend", "devTools"];

  const frontendSkills = [
    {
      Name: "Javascript",
      icon: <i className="fab fa-js-square"></i>,
      color: "#F7DF1E",
      borderColor: "#F7DF1E",
    },
    {
      Name: "CSS",
      icon: <i className="fab fa-css3-alt"></i>,
      color: "#1572B6",
      borderColor: "#1572B6",
    },
    {
      Name: "HTML",
      icon: <i className="fab fa-html5"></i>,
      color: "#E34F26",
      borderColor: "#E34F26",
    },
    {
      Name: "React",
      icon: <i className="fab fa-react"></i>,
      color: "#61DAFB",
      borderColor: "#61DAFB",
    },
    {
      Name: "TypeScript",
      icon: <i className="fas fa-code"></i>,
      color: "#3178C6",
      borderColor: "#3178C6",
    },
    {
      Name: "FramerMotion",
      icon: <i className="fas fa-film"></i>,
      color: "#FF0080",
      borderColor: "#FF0080",
    },
    {
      Name: "Tailwindcss",
      icon: <i className="fas fa-code"></i>,
      color: "#38BDF8",
      borderColor: "#38BDF8",
    },
    {
      Name: "Bootstrap",
      icon: <i className="fab fa-bootstrap"></i>,
      color: "#7952B3",
      borderColor: "#7952B3",
    },
    {
      Name: "Next.js",
      icon: <i className="fab fa-nextjs"></i>,
      color: "#000000",
      borderColor: "#000000",
    },
  ];

  const backendSkills = [
    {
      Name: "Node.js",
      icon: <i className="fab fa-node-js"></i>,
      color: "#68A063",
      borderColor: "#68A063",
    },
    {
      Name: "Express.js",
      icon: <i className="fas fa-server"></i>,
      color: "#000000",
      borderColor: "#000000",
    },
    {
      Name: "Php",
      icon: <i className="fab fa-php"></i>,
      color: "#777BB4",
      borderColor: "#777BB4",
    },
    {
      Name: "SQL",
      icon: <i className="fas fa-database"></i>,
      color: "#00758F",
      borderColor: "#00758F",
    },
    {
      Name: "Laravel",
      icon: <i className="fab fa-laravel"></i>,
      color: "#FF2D20",
      borderColor: "#FF2D20",
    },
    {
      Name: "FastAPI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#009688"
          width="20"
          height="20"
        >
          <circle cx="256" cy="256" r="256" fill="#009688" />
          <path
            d="M271.6 110.2 166.9 326.3h67.9l-24.5 75.5 125.8-194.8h-63.8l-0.7-96.8z"
            fill="#fff"
          />
        </svg>
      ),
      color: "#009688",
      borderColor: "#009688",
    },
  ];

  const devTools = [
    {
      Name: "Coco Base",
      icon: <i className="fas fa-coco"></i>,
      color: "#FF6900",
      borderColor: "#FF6900",
    },
    {
      Name: "Firebase",
      icon: <i className="fas fa-fire"></i>,
      color: "#FFCA28",
      borderColor: "#FFCA28",
    },
    {
      Name: "Webpack",
      icon: <i className="fas fa-box-open"></i>,
      color: "#8DD6F9",
      borderColor: "#8DD6F9",
    },
    {
      Name: "Postman",
      icon: <i className="fas fa-paper-plane"></i>,
      color: "#FF6C37",
      borderColor: "#FF6C37",
    },
    {
      Name: "Git",
      icon: <i className="fab fa-git"></i>,
      color: "#F05032",
      borderColor: "#F05032",
    },
    {
      Name: "GitHub",
      icon: <i className="fab fa-github"></i>,
      color: "#181717",
      borderColor: "#181717",
    },
    {
      Name: "Docker",
      icon: <i className="fab fa-docker"></i>,
      color: "#2496ED",
      borderColor: "#2496ED",
    },
    {
      Name: "CI/CD",
      icon: <i className="fas fa-sync-alt"></i>,
      color: "#20B2AA",
      borderColor: "#20B2AA",
    },
    {
      Name: "Redux",
      icon: <i className="fas fa-layer-group"></i>,
      color: "#764ABC",
      borderColor: "#764ABC",
    },
    {
      Name: "Figma",
      icon: <i className="fab fa-figma"></i>,
      color: "#F24E1E",
      borderColor: "#F24E1E",
    },
  ];

  const appSkills = [
    {
      Name: "React Native",
      icon: <i className="fab fa-react"></i>,
      color: "#61DAFB",
      borderColor: "#61DAFB",
    },
  ];

  return (
    <div>
      <Navbar />
      <Pagebg title="About me">
        <section className="about-text">
          <p className="h3 hello">
            Hello ! <span className="glow_hi">👋 ,</span>
          </p>
          <p>
            I’m Israel Otamere (<strong>DyCoder</strong>) a full-stack web
            developer focused on building
            <strong> premium UI only</strong> and scalable, production ready web
            applications. I specialize in JavaScript, React,
            Next.js, TypeScript, Php, Laravel and Node.js, crafting high-performance
            products for startups, businesses, and founders in Nigeria and
            internationally. As a co-founder of CocoBase (Backend-as-a-Service),
            I work at the intersection of clean systems, performance, and
            real-world impact. I’m available for freelance and contract work.
          </p>
        </section>

        <section onMouseMove={handleMouseMove}>
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
                <motion.div className="skills-row">
                  {(activeSkill === "frontend"
                    ? frontendSkills
                    : activeSkill === "Backend"
                    ? backendSkills
                    : devTools
                  )
                    .slice(0, 4)
                    .map((tech) => (
                      <motion.div
                        key={tech.Name}
                        className={`skill-card ${tech.Name.toLowerCase().replace(
                          /\s+/g,
                          "-"
                        )}`}
                        style={{
                          "--mouse-x": `${mousePosition.x}px`,
                          "--mouse-y": `${mousePosition.y}px`,
                          color: tech.color,
                          borderLeft: `3px solid ${tech.borderColor}`,
                        }}
                      >
                        {tech.icon} <span>{tech.Name}</span>
                      </motion.div>
                    ))}
                </motion.div>
                <motion.div className="skills-row">
                  {(activeSkill === "frontend"
                    ? frontendSkills
                    : activeSkill === "Backend"
                    ? backendSkills
                    : devTools
                  )
                    .slice(4)
                    .map((tech) => (
                      <motion.div
                        key={tech.Name}
                        className={`skill-card ${tech.Name.toLowerCase().replace(
                          /\s+/g,
                          "-"
                        )}`}
                        style={{
                          "--mouse-x": `${mousePosition.x}px`,
                          "--mouse-y": `${mousePosition.y}px`,
                          color: tech.color,
                          borderLeft: `3px solid ${tech.borderColor}`,
                        }}
                      >
                        {tech.icon} <span>{tech.Name}</span>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="skill">
          {" "}
          <h3 className="h3 service-title">Skills Overview</h3>{" "}
          <ul className="skills-list content-card">
            {" "}
            <li className="skills-item">
              {" "}
              <div className="title-wrapper">
                {" "}
                <h5 className="h5">Front End</h5> <data value="80">90%</data>{" "}
              </div>{" "}
              <div className="skill-progress-bg">
                {" "}
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>{" "}
              </div>{" "}
            </li>{" "}
            <li className="skills-item">
              {" "}
              <div className="title-wrapper">
                {" "}
                <h5 className="h5">Back end</h5> <data value="75">75%</data>{" "}
              </div>{" "}
              <div className="skill-progress-bg">
                {" "}
                <div
                  className="skill-progress-fill"
                  style={{ width: "75%" }}
                ></div>{" "}
              </div>{" "}
            </li>{" "}
            <li className="skills-item">
              {" "}
              <div className="title-wrapper">
                {" "}
                <h5 className="h5">Mobile App</h5> <data value="60">65%</data>{" "}
              </div>{" "}
              <div className="skill-progress-bg">
                {" "}
                <div
                  className="skill-progress-fill"
                  style={{ width: "65%" }}
                ></div>{" "}
              </div>{" "}
            </li>{" "}
            <li className="skills-item">
              {" "}
              <div className="title-wrapper">
                {" "}
                <h5 className="h5">WordPress</h5> <data value="50">50%</data>{" "}
              </div>{" "}
              <div className="skill-progress-bg">
                {" "}
                <div
                  className="skill-progress-fill"
                  style={{ width: "50%" }}
                ></div>{" "}
              </div>{" "}
            </li>{" "}
          </ul>{" "}
        </section>
      </Pagebg>
    </div>
  );
}

export default Home;
