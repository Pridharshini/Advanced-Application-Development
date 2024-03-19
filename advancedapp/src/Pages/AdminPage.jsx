import React from 'react'
import AdminCard from '../Components/AdminCard'
import AdminNavBar from '../Components/AdminNavBar'

import AdminSideBar from '../Components/AdminSideBar'

function AdminPage() {
  return (
    <div>
        <AdminNavBar/>
        <AdminSideBar/>
        <AdminCard/>
    </div>
  )
}

export default AdminPage