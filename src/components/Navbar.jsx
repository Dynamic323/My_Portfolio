import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();


  
  return (
    <nav class="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">
            <button
              className={`navbar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              About
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/resume">
            <button
              className={`navbar-link ${
                location.pathname === "/resume" ? "active" : ""
              }`}
            >
              Resume
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/portfolio">
            <button
              className={`navbar-link ${
                location.pathname === "/portfolio" ? "active" : ""
              }`}
            >
              Portfolio
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link to="/contact">
            <button
              className={`navbar-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
