import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/coursesData';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Training Programs</h1>
        <p>Explore our comprehensive technical training courses designed for your career growth</p>
      </div>
      
      <div className="courses-container">
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
