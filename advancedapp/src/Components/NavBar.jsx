import React from 'react';
import '../Components/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://logodix.com/logo/1737108.png" alt="App Logo" className="logo" />
      </div>
      <div className="search-section">
        <input type="text" className="search-bar" placeholder="What do you want to learn?" />
      </div>
      <div className="right-section">

        <Link to="/user">View Courses</Link> {/* Added class "active" */}
        <Link to="/enquiry">Add Enquiry</Link>
        <a href="#learning">View Enquiry</a>
        <a href="#wishlist">WishList</a>
        <Link to="/cart">Cart</Link>
        <Link to="/user">Student</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default NavBar;
