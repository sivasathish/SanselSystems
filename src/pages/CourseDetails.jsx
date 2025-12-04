import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/coursesData';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course Not Found</h2>
        <Link to="/courses" className="back-button">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-details-page">
      <div className="course-details-header">
        <div className="container">
          <Link to="/courses" className="back-link">← Back to Courses</Link>
          <h1>{course.title}</h1>
          <p className="course-tagline">{course.description}</p>
        </div>
      </div>

      <div className="course-details-content">
        <div className="container">
          <div className="details-grid">
            <div className="details-main">
              <div className="info-section">
                <h2>Course Overview</h2>
                <p>{course.description}</p>
                <p>
                  This comprehensive program is designed to equip you with practical, 
                  industry-relevant skills. You'll work on real-world projects and gain 
                  hands-on experience that employers value.
                </p>
              </div>

              <div className="info-section syllabus-section">
                <div className="syllabus-header" onClick={() => setSyllabusExpanded(!syllabusExpanded)}>
                  <h2>Course Syllabus</h2>
                  <span className={`expand-icon ${syllabusExpanded ? 'expanded' : ''}`}>▼</span>
                </div>
                
                {syllabusExpanded && (
                  <ul className="syllabus-list">
                    {course.syllabus.map((topic, index) => (
                      <li key={index} className="syllabus-item">
                        <span className="syllabus-number">{index + 1}</span>
                        <span className="syllabus-topic">{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="details-sidebar">
              <div className="course-info-card">
                <h3>Course Information</h3>
                <div className="info-row">
                  <span className="info-icon">⏱️</span>
                  <div>
                    <div className="info-title">Duration</div>
                    <div className="info-data">{course.duration}</div>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon">💰</span>
                  <div>
                    <div className="info-title">Course Fees</div>
                    <div className="info-data">{course.fees}</div>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon">📚</span>
                  <div>
                    <div className="info-title">Topics Covered</div>
                    <div className="info-data">{course.syllabus.length} modules</div>
                  </div>
                </div>
                
                <Link to="/enquiry" className="enquire-btn">Enquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
