import React, { useState } from 'react';
import { courses } from '../data/coursesData';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just log to console and show confirmation
    console.log('Enquiry Form Submitted:', formData);
    
    // Show confirmation message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        selectedCourse: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-header">
        <h1>Enquire Now</h1>
        <p>Take the first step towards your technical career. Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <div className="enquiry-container">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Thank you for contacting Sansel Systems! Our team will reach out to you shortly.</p>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="selectedCourse">Select Course *</label>
              <select
                id="selectedCourse"
                name="selectedCourse"
                value={formData.selectedCourse}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose a course --</option>
                {courses.map(course => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your background and what you'd like to learn..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EnquiryForm;
