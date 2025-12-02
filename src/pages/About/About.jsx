import React, { useEffect, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Anil Kumar 👋";

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">

      {/* PARALLAX BACKGROUND */}
      <div className="parallax-bg"></div>

      {/* Header */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">A Passionate Full-Stack Developer & Designer</p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="/anil-profile.jpg"
          className="about-photo"
          alt="Anil Kumar"
          animate={{ boxShadow: [
              "0 0 20px #6a5af966",
              "0 0 40px #00eaff77",
              "0 0 20px #6a5af966"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="about-info">

          {/* Typewriter heading */}
          <motion.h2
            className="typewriter-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {typedText}
          </motion.h2>

          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I'm a professional Full-Stack & Front-End Developer with strong
            experience in React, JavaScript, UI/UX Design, SQL, Python &
            WordPress. I build attractive, high-performance digital experiences.
          </motion.p>

          <motion.p
            className="about-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I specialize in modern UI design, animation-rich interfaces, and
            responsive websites. My goal is to create stunning, recruiter-stopping 
            digital experiences.
          </motion.p>

          {/* SKILLS with floating animation */}
          <motion.div
            className="about-skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {["React", "JavaScript", "SQL", "Python", "Node.js", "WordPress", "UI/UX"].map(
              (skill, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>

          {/* SVG LINE ANIMATION */}
          <svg className="animated-line" width="300" height="50">
            <motion.line
              x1="0"
              y1="25"
              x2="300"
              y2="25"
              stroke="#6a5af9"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
          </svg>

        </div>
      </motion.div>
    </div>
  );
}
