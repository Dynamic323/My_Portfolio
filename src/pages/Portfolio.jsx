import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";
import { images } from "../assets";
import Modal from "../components/Modal";
import projects from "../Project_data";
function Portfolio() {
  const [current, setCurrent] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCurrent = (category) => {
    setCurrent(category);
  };

  const handelModal = (item) => {
    setSelectedProject(item);
  };
  const portfolio = ["All", "Frontend", "Fullstack", "Mobile", "Backend"];

  return (
    <>
      <Navbar />
      <Pagebg title="Portfolio">
        <section className="projects">
          {/* Select Box and Projects Filter */}
          <ul className="filter-list">
            {portfolio.map((item) => (
              <li className="filter-item" key={item}>
                <button
                  className={current === item ? "active" : ""}
                  onClick={() => handleCurrent(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="filter-select-box">
            <button
              className={`filter-select ${isDropdownVisible ? "active" : ""}`}
              onClick={toggleDropdown}
            >
              <div className="select-value">{current}</div>
              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>
            <ul className="select-list">
              {portfolio.map((item) => (
                <li className="select-item" key={item}>
                  <button onClick={() => handleCurrent(item)}>{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects List */}
          <ul className="project-list">
            {projects
              .filter(
                (project) => current === "All" || project.category === current
              )
              .map((project, index) => (
                <li className="project-item active" key={index}>
                  {/* <a href=""> */}
                  <div className="">
                    <figure className="project-img">
                      <button onClick={() => handelModal(project)}>
                        <div className="project-item-icon-box">
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>
                      </button>
                      <img
                        src={`${project.imgSrc}`}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </div>
                  {/* </a> */}
                </li>
              ))}
          </ul>

          {projects.filter(
            (project) => current === "All" || project.category === current
          ).length === 0 && (
            <p className="no-projects">
              No projects found for the selected category.
            </p>
          )}
        </section>

        {/* Modal Display */}
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Pagebg>
    </>
  );
}

export default Portfolio;
