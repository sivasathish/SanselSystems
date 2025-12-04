import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sansel Systems</h3>
          <p>Empowering Your Technical Future</p>
          <p className="footer-tagline">Professional technical training for industry-ready skills</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@sanselsystems.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Bangalore, India</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sansel Systems. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
