// App.js
import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Pages/Login';
// import Register from './Pages/Register';
//import LandingPage from './Pages/LandingPage';
//import UserHome from './Pages/UserHome';
//import NavBar from './Components/NavBar';
import Content1 from './Pages/Content1';

const App = () => {
  return (
    <div>
    <Content1/>
    </div>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route exact path="/" element={<Login />} />
  //       <Route path="/register" element={<Register/>} />
  //   </Routes>
  // </BrowserRouter>
  );
};

export default App;
