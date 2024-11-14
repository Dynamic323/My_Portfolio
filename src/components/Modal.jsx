import React, { useState } from "react";

function Modal({ project, onClose }) {
  if (!project) return null;

  const [mainImage, setMainImage] = useState(project.imgSrc);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <div className="modal-grid">
          <div className="main-image-container">
            <img src={mainImage} alt={project.alt} className="main-image" />
          </div>

          <div className="project-info">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-category">{project.category}</p>
            <p className="modal-description">{project.description}</p>

            <div className="languages-container">
              <h3>Languages used:</h3>
              <div className="languages-list">
                {project.languages.map((lang, index) => (
                  <span key={index} className="language-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="button-container">
              <a
                href={
                  project.url === "" || !project.url
                    ? "https://dy-commingsoon.vercel.app"
                    : project.url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-button visit-button"
              >
                Visit Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a
                href={
                  project.githubUrl === "" || !project.githubUrl
                    ? "https://github.com/Dynamic323"
                    : project.githubUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-button github-button"
              >
                View on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="additional-images">
            <h3>Project Screenshots:</h3>
            <div className="image-scroll-container">
              {project.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  onClick={() => setMainImage(image)}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
