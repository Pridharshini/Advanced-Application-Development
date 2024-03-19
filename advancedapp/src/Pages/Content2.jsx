import React from 'react';
import '../Pages/Content1.css';
import '../Components/NavBar';
import NavBar from '../Components/NavBar';

const Content2 = () => {
  return (
    <div>
    <NavBar/>
    <div className="container">
      <div className="course-details">
        <h1>IELTS </h1>
        <p className="instructor">Instructor:Experienced IELTS Tutor</p>
        
        <div className="details-section">
          <div className="section-box">
            <h2>What you'll learn:</h2>
            <p>Develop the necessary skills to excel in all four sections of the IELTS exam: Listening, Reading, Writing, and Speaking.</p>
            <p>Understand the format and requirements of each section of the IELTS exam.</p>
            <P>Learn effective strategies and techniques to improve your performance in the exam.</P>
          </div>
        </div>
        
        <div className="details-section">
          <div className="section-box">
            <h2>Skills you'll gain:</h2>
            <ul>
              <li>Listening comprehension and note-taking skills.</li>
              <li>Reading comprehension and vocabulary expansion.</li>
              <li>Writing coherence, cohesion, and task achievement.</li>
              <li>Speaking fluency, coherence, and pronunciation.</li>
            </ul>
          </div>
        </div>
        
        <div className="course-includes">
          <div className="section-box">
            <h2>This course includes:</h2>
            <ul>
              <li>40 hours on-demand video lectures covering all aspects of the IELTS exam.</li>
              <li>Practice exercises and quizzes for each section of the exam.</li>
              <li>Sample questions and model answers for Writing and Speaking tasks.</li>
              <li>Full-length practice tests with answer keys and scoring guides</li>
              <li>Downloadable study materials and resources.</li>
              <li>Closed captions and audio descriptions for accessibility.</li>
              <li>Certificate of completion upon finishing the course.</li>
            </ul>
          </div>
        </div>
        
        <div className="duration-cost">
          <div className="section-box">
            <p><strong>Duration:</strong> 2 months</p>
            <p><strong>Cost:</strong> ₹7000-₹10000</p>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="add-to-wishlist">Add to WishList</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content2;