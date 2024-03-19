import React, { useState } from 'react';
import '../Pages/Login.css';
// Inside the Login component
import { Link } from 'react-router-dom';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Submitted:', { username, password });
  };

  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={handleSubmit}>
        <h2>SIGN IN</h2>
        <div className="inputBox">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Not a Member</a>
          <Link to="/register">SIGNUP</Link>
          
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
