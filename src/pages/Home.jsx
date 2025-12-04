import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Your Technical Future</h1>
          <p className="hero-subtitle">
            Welcome to Sansel Systems, your trusted partner for industry-ready technical training. 
            Build your future with hands-on experience, expert trainers, and real-world projects.
          </p>
          <Link to="/courses" className="hero-button">View Courses</Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Sansel Systems?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>Industry-Ready Training</h3>
              <p>Practical, hands-on programs designed to prepare you for real-world challenges</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍💻</div>
              <h3>Expert Trainers</h3>
              <p>Learn from experienced professionals with years of industry expertise</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Real Projects</h3>
              <p>Work on actual projects to build your portfolio and gain practical experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Affordable Fees</h3>
              <p>Quality education at competitive prices to make learning accessible</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of students who have transformed their careers with Sansel Systems</p>
          <Link to="/enquiry" className="cta-button">Enquire Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
