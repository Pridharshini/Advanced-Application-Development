
import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/AdminNavBar.css';
function AdminNavBar() {
  return (
    <div>
        <header>
      <div className='container container-flex-admin'>
        <div className='logo-container-admin'>
          <h1><img src="https://logos.textgiraffe.com/logos/logo-name/Bec-designstyle-kiddo-m.png" alt="Logo" /></h1>
        </div>
        <nav >
          <div className='nav-list-admin'>
            <Link to='/' className='nav-listItem-admin' activeclassname='activeNavitem-admin'>Home</Link>
            <Link to='/admin' className='nav-listItem-admin' activeclassname='activeNavitem-admin'>Admin</Link>
            <Link to='/' className='nav-listItem-admin' activeclassname='activeNavitem-admin'>Logout</Link>
          </div>
        </nav>
       
      </div>
    </header>
    </div>
  )
}

export default AdminNavBar