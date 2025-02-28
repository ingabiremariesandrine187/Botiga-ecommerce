import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import '../Dashboard/Dashboard-styles/Navbardash.css'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdMoreHoriz } from "react-icons/md";
 const DashboardNavbar=()=> {
  return (
    <div class="Navbar-container">
       <div class="logo-icon">
    <div class="Logo">Botiga</div>
    <div class="icon-dashboard"><TfiMenuAlt /></div>
    </div>
    <div class="search-user">
      <div class="search-icon">
       <div><IoSearchOutline /></div>
       <input type="text" placeholder="Search Now" className="search-input" />
      </div>

      <div class="notification-picture">
      <div class="notification-icon"><IoMdNotificationsOutline /></div>
      <div class="profile-icon"><FaCircleUser /></div>
      <div><MdMoreHoriz /></div>
      </div>
      </div>  
    </div>
  )
}
export default DashboardNavbar