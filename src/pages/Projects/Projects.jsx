"use client";

import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    
  {
    title: "SaaSTargo Technologies",
    desc: "I built this website entirely from scratch using pure HTML, CSS, and JavaScript. I handled full frontend development, performance optimization, and SEO, achieving 100% SEO score and ultra-fast loading times.",
    tech: ["HTML", "CSS", "JavaScript", "SEO", "Performance"],
    link: "https://saastargo.com/",
  },
  {
    title: "Nandanandi Gaushala",
    desc: "A React-based trust website where I implemented donation forms, payment integrations, and all frontend functionalities. I developed the project from start to finish, ensuring a responsive and user-friendly interface.",
    tech: ["React", "JavaScript", "CSS", "Payment Integration", "Responsive Design"],
    link: "https://www.nandanandi.com/",
  },
  {
    title: "Design Convergence",
    desc: "An interior design project built on Wix. I managed the full website creation, including design, layout, and content integration, ensuring it perfectly represents the brand online.",
    tech: ["Wix", "UI/UX Design", "Content Integration", "Branding"],
    link: "https://www.designconvergence.co.in/",
  },
  {
    title: "LEAD Co.",
    desc: "A PHP website where I executed complete UI redesigns, optimized page speed, and added new blog functionalities. I worked on all pages from start to finish to improve performance and user experience.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "Performance Optimization", "UI/UX"],
    link: "http://www.lead.co.in/",
  },

     {
      title: "Pentad Academy",
      desc: "Implemented UI changes, added blogs, integrated payment gateways, and created offer banners for a seamless user experience on every page. Managed full development workflow independently.",
      tech: ["React", "UI/UX", "Payment Integration", "Blogs", "Offers"],
      link: "https://www.pentadacademy.com/",
    },


  ];

  return (
    <div className="projects-page">

      {/* PAGE TITLE */}
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="projects-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        A collection of projects I have built using modern technologies.
      </motion.p>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Title */}
            <h2 className="project-title">{p.title}</h2>

            {/* Description */}
            <p className="project-description">{p.desc}</p>

            {/* Tech */}
            <div className="project-tech">
              {p.tech.map((t, i) => (
                <span key={i} className="tech-item">
                  {t}
                </span>
              ))}
            </div>

            {/* Link Button */}
            <a
              href={p.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
