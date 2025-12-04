import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Sansel Systems</h1>
        <p>Your trusted partner for industry-ready technical training</p>
      </div>

      <div className="about-content">
        <div className="container">
          <section className="about-section">
            <h2>Who We Are</h2>
            <p>
              Sansel Systems is a professional technical training provider specializing in hands-on, 
              industry-ready programs. We focus on practical learning, real project experience, and 
              career-oriented skill development.
            </p>
            <p>
              Founded with a mission to bridge the gap between academic learning and industry requirements, 
              we have successfully trained hundreds of students and professionals, helping them advance 
              their careers in technology.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Sansel Systems delivers high-quality technical training designed to help students and 
              professionals grow their careers. Our mission is to provide affordable, practical, and 
              industry-aligned training programs that empower individuals with the skills they need to succeed.
            </p>
          </section>

          <section className="about-section">
            <h2>What Makes Us Different</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3>Hands-On Learning</h3>
                  <p>We believe in learning by doing. All our courses include practical projects and real-world scenarios.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3>Industry Expert Trainers</h3>
                  <p>Learn from professionals with extensive industry experience who bring real insights to the classroom.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3>Career-Focused Curriculum</h3>
                  <p>Our courses are designed based on current industry needs and job market requirements.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-number">04</div>
                <div className="feature-content">
                  <h3>Affordable Excellence</h3>
                  <p>Quality education shouldn't break the bank. We offer competitive pricing without compromising on quality.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section cta-section">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join the Sansel Systems family and take the next step in your professional journey.</p>
            <a href="/enquiry" className="cta-button">Get Started Today</a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
