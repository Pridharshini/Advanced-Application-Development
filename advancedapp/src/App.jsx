import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavigationBar from './Components/NavigationBar';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Policy from './Components/Policy';

import LandingPage from './Pages/LandingPage';
import AdminCard from './Components/AdminCard';
import AdminPage from './Pages/AdminPage';
import AdminAddCoursePage from './Pages/AdminAddCoursePage';
import AdminTable from './Pages/AdminTable';
//import StudentPage from './Pages/StudentPage';
import AdminPayment from './Pages/AdminPayment';
import AdminEnquiry from './Pages/AdminEnquiry';
import UserHome from './Pages/UserHome';
import Enquiry from './Pages/Enquiry';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Content1 from './Pages/Content1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<NavigationBar/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/adminadd/edit" element={<AdminAddCoursePage/>}/>
          <Route path="/admintable" element={<AdminTable/>}/>
          
          <Route path="/adminpayment" element={<AdminPayment/>}/>
          <Route path="/adminenquiry" element={<AdminEnquiry/>}/>
          <Route path="/user" element={<UserHome/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/userpay" element={<Payment/>}/>
          <Route path="/content1" element={<Content1/>}/>
          
          
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;