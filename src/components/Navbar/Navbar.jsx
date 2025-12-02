"use client";

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="container nav-inner">
        
        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Anil<span className="dot">.</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <span className={open ? "bar rotate1" : "bar"}></span>
          <span className={open ? "bar hide" : "bar"}></span>
          <span className={open ? "bar rotate2" : "bar"}></span>
        </button>

        {/* NAVIGATION LINKS */}
        <nav className={`nav ${open ? "nav-open" : ""}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink 
            to="/skills" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Skills
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>

          
             <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
