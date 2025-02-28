import React from 'react'
import Sidebar from './Sidebar'
 import DashboardNavbar from '../Dashboard/DashboardNavbar'
import { Outlet } from 'react-router-dom'
 function  DashboardLayout() {
  return (
    <div>
      <DashboardNavbar/>
<Sidebar/>
<Outlet/>
    </div>
  )
}
export default DashboardLayout