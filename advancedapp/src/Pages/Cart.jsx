// Cart.jsx
import React from 'react';
import '../Pages/Cart.css';
import NavBar from '../Components/NavBar';

const Cart = () => {
  return (
    <div>
    <NavBar/>
    <div className="cart-container">
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cambridge English: Key (KET)</td>
            <td>A basic-level exam testing fundamental English language skills.</td>
            <td>6 months</td>
            <td>₹10,000-₹15,000</td>
            <td>
              <button>Make Payment</button>
            </td>
          </tr>
          <tr>
            <td>TOEFL Preparation Course</td>
            <td>Prepares students to take the TOEFL (Test of English as a Foreign Language).</td>
            <td>3 months</td>
            <td>₹15,000-₹20,000</td>
            <td>
              <button>Make Payment</button>
            </td>
          </tr>
          <tr>
            <td>IELTS Preparation Course</td>
            <td>Prepares students to take the IELTS (International English Language Testing System).</td>
            <td>4 months</td>
            <td>₹12,000-₹18,000</td>
            <td>
              <button>Make Payment</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Cart;
