"use client";

import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend Development",
      items: ["Node.js (Basics)", "Express.js", "SQL", "APIs"],
    },
    {
      title: "CMS & Builders",
      items: ["WordPress", "Wix", "WooCommerce", "Elementor"],
    },
    {
      title: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <div className="skills-container">
      {/* Heading */}
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Skills</span>
      </motion.h1>

      {/* Sub Text */}
      <motion.p
        className="skills-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Technologies I work with to build powerful, modern web experiences.
      </motion.p>

      {/* Skill Blocks */}
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <h2 className="skill-card-title">{cat.title}</h2>

            <div className="skill-items">
              {cat.items.map((skill, i) => (
                <span key={i} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
