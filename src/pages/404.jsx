import React from "react";
import "./404.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="nf-animate-container">
      <h1 className="nf-animate-title">404</h1>

      <p className="nf-animate-text">Oops! Page Not Found</p>

      <Link to="/" className="nf-animate-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
