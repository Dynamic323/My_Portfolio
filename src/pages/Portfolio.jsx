import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Pagebg from "../components/Pagebg";
import { images } from "../assets";

function Portfolio() {
  const [current, setCurrent] = useState("All");

  const handleCurrent = (category) => {
    setCurrent(category);
  };

  const portfolio = ["All", "Web design", "Applications", "Web development"];

  const projects = [
    {
      title: "Mexanto",
      category: "Web development",
      imgSrc: images.mexanto,
      alt: "mexanto",
    },
    {
      title: "Movieo",
      category: "Web development",
      imgSrc: images.movieweb,
      alt: "movieo",
    },
    {
      title: "Fundo",
      category: "Web design",
      imgSrc: images.net_downloader,
      alt: "fundo",
    },
    {
      title: "Brawlhalla",
      category: "Applications",
      imgSrc: images.movie_screenshot3,
      alt: "brawlhalla",
    },
    {
      title: "DSM.",
      category: "Web design",
      imgSrc: "./assets/images/project-5.png",
      alt: "dsm",
    },
    {
      title: "MetaSpark",
      category: "Web design",
      imgSrc: "./assets/images/project-6.png",
      alt: "metaspark",
    },
  ];

  return (
    <>
      <Navbar />
      <Pagebg title="Portfolio">
        <section className="projects">
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
              className="filter-select"
              onClick={() => handleCurrent("All")}
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

          <ul className="project-list">
            {projects
              .filter(
                (project) => current === "All" || project.category === current
              )
              .map((project, index) => (
                <li className="project-item  active" key={index}>
                  <a href="#">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img
                        src={`${project.imgSrc}`}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </a>
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
      </Pagebg>
    </>
  );
}

export default Portfolio;
