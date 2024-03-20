import React from 'react';
import '../assets/Services.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Services() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <section className="services" id="services">
        <ul className="s-cards">
          <li className="s-card">
            <img src="https://penntoday.upenn.edu/sites/default/files/2021-06/covid-education-teaser-social.jpg" alt="Online Learning" />
            <h3>Interactive Learning Modules</h3>
            <p>Engage with interactive learning modules covering grammar, vocabulary, and pronunciation.</p>
          </li>
          <li className="s-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaBKr-Ms1KbUm_sWYBOOaJb8D6mkMmLbs0_g&usqp=CAU" alt="Certification" />
            <h3>British English Certification</h3>
            <p>Obtain recognized certification upon successful completion of our British English proficiency exams.</p>
          </li>
          <li className="s-card">
            <img src="https://www.literacyworldwide.org/images/default-source/reading-today/eighttipsforonlinesuccess_w680.jpg?sfvrsn=d443bc8e_2" alt="Personalized Learning" />
            <h3>Personalized Learning Paths</h3>
            <p>Customize your learning experience with personalized learning paths to achieve your language goals effectively.</p>
          </li>
          <li className="s-card">
            <img src="https://images.pexels.com/photos/8423452/pexels-photo-8423452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Assessment" />
            <h3>Language Proficiency Assessment</h3>
            <p>Assess your language proficiency level through our comprehensive assessment tests.</p>
          </li>
         
         
        </ul>
      </section>
      
    </div>
  );
}

export default Services;
