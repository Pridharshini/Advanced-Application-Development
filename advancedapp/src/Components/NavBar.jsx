import React from 'react';
import '../Components/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://logos.textgiraffe.com/logos/logo-name/Bec-designstyle-kiddo-m.png" alt="App Logo" className="logo" />
      </div>
      <div className="search-section">
        <input type="text" className="search-bar" placeholder="What do you want to learn?" />
      </div>
      <div className="right-section">

        <Link to="/user">View Courses</Link> {/* Added class "active" */}
        <Link to="/enquiry">Add Enquiry</Link>
        <Link to="/userenquiry">View Enquiry</Link>
        <Link to="/cart">WishList</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/user">Student</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default NavBar;
