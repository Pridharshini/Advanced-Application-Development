import React from 'react';
import '../assets/AdminPayment.css';
import AdminNavBar from '../Components/AdminNavBar';

function AdminEnquiry() {
  return (
    <div>
      <div>
        <AdminNavBar />
      </div>
      <table className="payment-history-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Enquiry Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>British English Certification</td>
            <td>This course provides comprehensive training in British English, covering grammar, vocabulary, pronunciation, and cultural nuances. Students will learn essential language skills required for effective communication in both formal and informal contexts.</td>
            <td>mala@gmail.com</td>
            <td>Complaints</td>
            <td><button onClick={() => handleDeleteClick('bec@gmail.com')}>Respond</button></td>
          </tr>

          <tr>
            <td>English Certification</td>
            <td>This course provides comprehensive training in British English, covering grammar, vocabular.</td>
            <td>ram@gmail.com</td>
            <td>Complaints</td>
            <td><button onClick={() => handleDeleteClick('becc@gmail.com')}>Respond</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  // Function to handle delete button click
  function handleDeleteClick(email) {
    // Your logic to handle delete action
    console.log('Delete clicked for email:', email);
    // Add your logic here to perform the delete action
  }
}

export default AdminEnquiry;
