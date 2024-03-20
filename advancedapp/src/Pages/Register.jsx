


import React, { useState } from 'react';
import '../assets/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavigationBar from '../Components/NavigationBar';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password match admin credentials
    if (email === 'admin@gmail.com' && password === 'Admin@12345') {
      // Navigate to admin page
      navigate('/login');
      
    } else if(email.length===0|| password.length===0||confirmPassword.length===0) toast("fill details")
    else {
      // Navigate to user page
      navigate('/login');
    }
  };

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className="custom-box">
        <span className="custom-borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP</h2>
          <div className="custom-inputBox">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="custom-inputBox">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="custom-inputBox">
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span>Confirm Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Already a Member</a>
            <Link to="/login">SIGIN</Link>
          </div>
          <ToastContainer autoClose={5000} position='bottom-right'/>
          <input type="submit" value="Register" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
};

export default Register;
