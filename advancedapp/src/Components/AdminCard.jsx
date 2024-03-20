import React from 'react';
import '../assets/AdminCard.css'
import { Link } from 'react-router-dom';
function AdminCard() {
  return (
    <div>
      <div className="aa1card card">
        <img className="aa1im product-image" src="https://cdn-icons-png.flaticon.com/512/1236/1236603.png" alt="Denim Jeans" />
        <div className="aa1contain">
          <h1>Add Courses</h1>
         <Link to="/adminadd/edit"><button className="viewbut">View</button></Link> 
        </div>
      </div>

      <div className="aa2card card">
        <img className="aa2im product-image" src="https://cdn-icons-png.flaticon.com/512/2833/2833663.png" alt="Denim Jeans" />
        <div className="aa2contain">
          <h1>Edit Courses</h1>
          <Link to="/adminadd/edit"><button className="viewbut">View</button></Link>
        </div>
      </div>

      <div className="aa3card card">
        <img className="aa3im product-image" src="https://icons.veryicon.com/png/o/education-technology/plush-three-year-old-icon-gallery/course-management-2.png" alt="Denim Jeans" />
        <div className="aa3contain">
          <h1>View Courses</h1>
         <Link to ="/admintable"><button className="viewbut">View</button></Link> 
        </div>
      </div>

      <div className="aa4card card">
        <img className="aa4im product-image" src="https://svgsilh.com/svg/1691287.svg" alt="Denim Jeans" />
        <div className="aa4contain">
          <h1>Delete Courses</h1>
          <Link to ="/admintable"><button className="viewbut">View</button></Link>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
