import React from 'react';
import '../Components/NavBar.css';

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

        <a href="#explore" className="active">Explore</a> {/* Added class "active" */}
        <a href="#teach">Teach on BEC</a>
        <a href="#learning">My Learning</a>
        <a href="#wishlist">WishList</a>
        <a href="#cart">Cart</a>
        <a href="#cart">Notifications</a>
        <a href="#profile">Profile</a>
      </div>
    </div>
  );
}

export default NavBar;
