import React, { useState } from 'react';
import '../Pages/Register.css';
// Inside the Register component
import { Link } from 'react-router-dom';

// Inside the JSX



const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Submitted:', { username, email, password });
  };

  return (
    <div className="box">
      <span className="borderLine"></span>
      <form onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
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
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <span>Email</span>
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
          <a href="#">Already have an account?</a>
          <Link to="/"> SIGNIN</Link>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
