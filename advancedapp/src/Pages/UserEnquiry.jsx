import React from 'react';
import '../assets/AdminPayment.css';
import NavBar from '../Components/NavBar';

function UserEnquiry() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <table className="payment-history-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Enquiry Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>British English Certification</td>
            <td>This course provides comprehensive training in British English, covering grammar, vocabulary, pronunciation, and cultural nuances.</td>
            <td>pri@gmail.com</td>
            <td>Complaints</td>
            <td>Responded</td>
            <td><button onClick={() => handleResponseClick('bec@gmail.com')}>Delete</button></td> {/* Button with onClick handler */}
          </tr>

          <tr>
            <td>English Certification</td>
            <td>This course provides comprehensive training in British English, covering grammar, vocabular.</td>
            <td>pri@gmail.com</td>
            <td>Complaints</td>
            <td>Not Responded</td>
            <td><button onClick={() => handleResponseClick('becc@gmail.com')}>Delete</button></td> {/* Button with onClick handler */}
          </tr>
        </tbody>
      </table>
    </div>
  );

  // Function to handle button click
  function handleResponseClick(email) {
    // Your logic to handle response action
    console.log('Response clicked for email:', email);
    // Add your logic here to perform the response action
  }
}

export default UserEnquiry;
