"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/", icon: "fa-user" },
    { name: "Resume", path: "/resume", icon: "fa-file-alt" },
    { name: "Portfolio", path: "/portfolio", icon: "fa-briefcase" },
    { name: "Blog", path: "/blog", icon: "fa-blog" },
    { name: "Contact", path: "/contact", icon: "fa-paper-plane" },
  ];

  return (
    <nav className="navbar floating-nav">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li className="navbar-item" key={item.name}>
              <Link href={item.path} className={`navbar-link ${isActive ? "active" : ""}`}>
                <span className="desktop-nav-label">{item.name}</span>
                <motion.div
                  className="nav-icon-container"
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {isActive && (
                    <>
                      <motion.div
                        layoutId="active-pill"
                        className="active-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -35 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="active-label"
                      >
                        {item.name}
                      </motion.span>
                    </>
                  )}
                  <span className="icon-wrapper">
                    <i className={`fas ${item.icon}`}></i>
                  </span>
                </motion.div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
