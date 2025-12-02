"use client";

import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contact-container particles">
      
      {/* Title */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="contact-subtext"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Let's work together. I am always open for new opportunities.
      </motion.p>

      <div className="contact-content">
        
        {/* Left Info Card */}
        <motion.div
          className="contact-info-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2>📌 Get in Touch</h2>

          <p className="info-item">
            📧 <span>Email:</span>  
            anilgosipothula9@gmail.com
          </p>

          <p className="info-item">
            📱 <span>Phone:</span>  
            +91 88862 66718
          </p>

          <p className="info-item">
            📍 <span>Location:</span>  
            Hyderabad, India
          </p>

          <div className="social-links">
           <a href="https://www.linkedin.com/in/anil-kumar-gosipothula/" className="social-btn">LinkedIn</a>
            <a href="https://github.com/anilkumarg20/" className="social-btn">GitHub</a>
            <a href="#" className="social-btn">Instagram</a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="contact-btn shine">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}

