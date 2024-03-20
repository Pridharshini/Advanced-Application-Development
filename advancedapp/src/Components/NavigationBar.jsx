import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/NavigationBar.css';

function NavigationBar() {
  const scrollToAbout = () => {
    window.location.href = '#about';
  };

  const scrollToContact = () => {
    window.location.href = '#contact';
  };

  return (
    <header>
      <div className='container container-flex'>
        <div className='logo-container'>
          <h1><img src="https://logos.textgiraffe.com/logos/logo-name/Bec-designstyle-kiddo-m.png" alt="Logo" /></h1>
        </div>
        <nav>
        <div className='nav-list'>
        <Link to='/' className='nav-listItem' activeclassname='activeNavitem'>Home</Link>
        <Link to="/" onClick={scrollToAbout} className='nav-listItem' activeclassname='activeNavitem'>About</Link>
        <Link to="/" onClick={scrollToContact} className='nav-listItem' activeclassname='activeNavitem'>Contact</Link>
        <Link to='/services' className='nav-listItem' activeclassname='activeNavitem'>Services</Link>
        <Link to='/policy' className='nav-listItem' activeclassname='activeNavitem'>Policy</Link>
        <Link to='/login' className='nav-listItem' activeclassname='activeNavitem'>Sign In</Link>
      </div>
        </nav>
      </div>
    </header>
  );
}

export default NavigationBar;

// <button  className='nav-listItem' onClick={scrollToAbout}>About</button>
//  <button className='nav-listItem' onClick={scrollToContact}>Contact</button>