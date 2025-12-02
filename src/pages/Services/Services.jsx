"use client";

import React from "react";
import "./Services.css";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full Stack Development",
      desc: "Building modern, responsive web applications using React, Next.js, Node.js, and SQL/Python backend integration.",
      icon: "💻",
    },
    {
      title: "WordPress & WooCommerce",
      desc: "Custom WordPress websites, Elementor design, WooCommerce integration, and performance optimization.",
      icon: "🌐",
    },
    {
      title: "UI / UX Design",
      desc: "Clean, interactive, and responsive interfaces with smooth animations and user-focused design principles.",
      icon: "🎨",
    },
    {
      title: "E-commerce Solutions",
      desc: "End-to-end online store development with payment gateway integration, dynamic catalogs, and promotions.",
      icon: "🛒",
    },
    {
      title: "Website Optimization",
      desc: "Speed improvements, SEO enhancements, Core Web Vitals fixes, and full frontend/backend optimization.",
      icon: "⚡",
    },
    {
      title: "Portfolio & Personal Websites",
      desc: "Custom portfolios with React, animations, transitions, and responsive layouts to showcase skills and projects.",
      icon: "📁",
    },
  ];

  return (
    <div className="services-page">
      <motion.h1
        className="services-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h1>

      <motion.p
        className="services-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I deliver professional web solutions from start to finish, focusing on performance, usability, and modern technologies.
      </motion.p>

      <div className="services-grid">
        {services.map((s, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h2 className="service-title">{s.title}</h2>
            <p className="service-desc">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
