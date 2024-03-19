// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Pages/Login';
// import Register from './Pages/Register';
//import LandingPage from './Pages/LandingPage';
//import UserHome from './Pages/UserHome';
//import NavBar from './Components/NavBar';
//import Content1 from './Pages/Content1';
//import Enquiry from './Pages/Enquiry';
//import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Enquiry from './Pages/Enquiry';
import UserHome from './Pages/UserHome';
import Cart from './Pages/Cart';
import Content1 from './Pages/Content1';
import Content2 from './Pages/Content2';
//import Registration from './Pages/Registration'

const App = () => {
  return (
    <div>
   
  
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserHome/>}/>
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/content1" element={<Content1/>} />
        <Route path="/content2" element={<Content2/>} />

    </Routes>
  </BrowserRouter>
  </div>
  );
};

export default App;
