import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Sansel Systems - We're here to help you</p>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions about our courses? Want to know more about Sansel Systems? 
                We'd love to hear from you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@sanselsystems.com</p>
                    <p>support@sanselsystems.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                    <p>+91 98765 43211</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Address</h3>
                    <p>Sansel Systems Training Center</p>
                    <p>123, Tech Park, MG Road</p>
                    <p>Bangalore, Karnataka - 560001</p>
                    <p>India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-text">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="map-section">
              <h2>Find Us</h2>
              <div className="map-placeholder">
                <div className="map-content">
                  <p className="map-icon">🗺️</p>
                  <p>Map View</p>
                  <p className="map-note">
                    Visit us at our training center in Bangalore
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-contact">
            <h2>Quick Enquiry</h2>
            <p>For course enquiries, please fill out our detailed enquiry form</p>
            <a href="/enquiry" className="enquiry-button">Go to Enquiry Form</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
