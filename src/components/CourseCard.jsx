import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <h3 className="course-title">{course.title}</h3>
      </div>
      <div className="course-card-body">
        <p className="course-description">{course.description}</p>
        <div className="course-info">
          <div className="info-item">
            <span className="info-label">Duration:</span>
            <span className="info-value">{course.duration}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Fees:</span>
            <span className="info-value">{course.fees}</span>
          </div>
        </div>
      </div>
      <div className="course-card-footer">
        <Link to={`/courses/${course.id}`} className="course-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
