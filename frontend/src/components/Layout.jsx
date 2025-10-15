import React, { useEffect, useRef } from "react";
import { images } from "../assets";

function Layout({ children }) {
  const sidebarRef = useRef(null);
  const sidebarBtnRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const sidebarBtn = sidebarBtnRef.current;

    if (sidebar && sidebarBtn) {
      const elementToggleFunc = (elem) => {
        elem.classList.toggle("active");
      };

      sidebarBtn.addEventListener("click", () => {
        elementToggleFunc(sidebar);
      });

      // Cleanup event listener when the component unmounts
      return () => {
        sidebarBtn.removeEventListener("click", () => {
          elementToggleFunc(sidebar);
        });
      };
    }
  }, []);

  return (
    <main>
      <div className="sidebar" data-sidebar ref={sidebarRef}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={images.dp} alt="Richard Hanrick" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard Hanrick">
              Dy coderx
            </h1>
            <button className="title">
              <a
                style={{ backgroundColor: "transparent", color: "white" }}
                href="https://drive.google.com/file/d/10yxOwOi6UnWG1tpcttzrmik6L-OLl-II/view?usp=sharing"
              >
                Acess Cv
              </a>
            </button>
          </div>
  
          <button
            className="info_more-btn"
            data-sidebar-btn
            ref={sidebarBtnRef}
          >
            <span>Show Contacts</span>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>

        <div className="sidebar-info_more">
          {/* <p>Additional sidebar information can be placed here.</p> */}
        </div>

        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:dycoderx70@gmail.com" className="contact-link">
                dycoderx70@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+2349161712483" className="contact-link">
                +234 91 6171 24 83
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-10-08">October 8, 2005</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Benin, Edo-state, Nigeria</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://web.facebook.com/tina.otamere.9"
              className="social-link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/IsraelOtam69481" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/tina.otamere.9/"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/Dynamic323/" className="social-link">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">{children}</div>
    </main>
  );
}

export default Layout;
