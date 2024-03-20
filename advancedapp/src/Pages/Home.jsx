import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

function Home() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
     <div>
     <NavigationBar/>
     </div>

      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>BRITLINGO</h1>
            <p>
            Unlock British English Fluency with BritLingo Certification.<br></br>
            Become Fluent, Be Certified: BritLingo - Your Partner in British English Success.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Learn about our team and how we manage BritLingo.</p>
        <div className="row company-info">
          <h3>Our Team</h3>
          <ul>
            <li>Elspeth Henderson - Head Tutor </li>
            <li>Alistair Davies - Curriculum Developer</li>
            <li>Fiona Campbell - Assessment Specialist </li>
            <li>Beatrice Walker - Marketing Manager</li>
          </ul>
        </div>
        <div className="row mission-vision">
          <h3>Our Mission</h3>
          <p>
          At BritLingo, our mission is to empower you with a strong foundation in British English.
          We provide a supportive learning environment and top-notch instruction to equip you with the language skills you need to succeed in a globalized world.
          </p>
          <h3>Our Vision</h3>
          <p>
          Our vision is to be the premier destination for learners seeking a recognized British English certification. 
          We strive to be at the forefront of British English education, offering innovative and effective learning solutions to students worldwide.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col information">
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i>600 Harrison Street, 3rd Floor
              San Francisco, CA 94107</p>
              <p><i className="fas fa-envelope"></i> info@britlingo.com</p>
              <p><i className="fas fa-phone"></i> (42) 9944-0067</p>
            </div>
          </div>
          <div className="col form">
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea placeholder="Message*" required></textarea>
              <button id="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;