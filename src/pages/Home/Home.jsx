import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-container">

      {/* BACKGROUND PARTICLES */}
      <div className="particles"></div>

      {/* LEFT TEXT */}
      <motion.div
        className="home-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I’m <span>Anil Kumar</span>
        </motion.h1>

        <motion.h2
          className="role"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer
          <span className="highlight">
            React • WordPress • SQL • Python • PHP
          </span>
        </motion.h2>

        <motion.p
          className="desc"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I create high-quality, modern web applications and websites with 
          optimized performance, SEO-friendly structure, and seamless user experience. 
          From frontend to backend, I handle every aspect of development.
        </motion.p>

        {/* BUTTONS */}
        <motion.div 
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a className="btn-primary shine" href="/projects">View My Work</a>
          <a className="btn-secondary" href="/contact">Hire Me</a>
        </motion.div>
      </motion.div>

      {/* RIGHT PROFILE SECTION */}
      <motion.div
        className="home-profile"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >

        {/* ROTATING RING */}
        <motion.div
          className="ring"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        ></motion.div>

        {/* FLOATING IMAGE */}
        <motion.img
          src="/anil-profile.jpg" 
          className="profile-img"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          alt="profile"
        />

        {/* FLOATING TECH ICONS */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          className="tech react" alt="react" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          className="tech js" alt="javascript" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          className="tech python" alt="python" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          className="tech mysql" alt="mysql" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
          className="tech wordpress" alt="wordpress" />
      </motion.div>
    </div>
  );
}
