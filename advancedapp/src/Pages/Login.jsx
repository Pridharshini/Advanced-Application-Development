
import React, { useState } from 'react';
import '../assets/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../Components/NavigationBar';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password match admin credentials
    if (email === 'admin@gmail.com' && password === 'Admin@12345') {
      // Navigate to admin page
      navigate('/admin');
    } 
    else if(email.length===0|| password.length===0) toast("fill details")
    else {
      // Navigate to user page
      toast.success("Login sucessfully");
      navigate('/user');
    }
  };

  return (
    <div>
    <div>
    <NavigationBar/>
    </div>
    <div className="custom-box">
      <span className="custom-borderLine"></span>
      <form >
        <h2>SIGN IN</h2>
        <div className="custom-inputBox">
          <input
            type="text"
            value={email}
            onChange={handleemailChange}
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
        <div className="links">
          <a href="#">Not a Member</a>
          <Link to="/register">SIGNUP</Link>
        </div>
        <ToastContainer autoClose={5000} position='bottom-right'/>
        <input type="submit" value="Login" onClick={handleSubmit}/>
      </form>

    </div>
    </div>
  );
};

export default Login;


