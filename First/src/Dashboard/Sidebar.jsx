import React from 'react'
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiSettings, FiBarChart2, FiTag, FiDollarSign, FiStar } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import './Dashboard-styles/Sidebar.css'
 const Sidebar=()=> {
  return (
    <aside className="sidebar">
    <h3 className="sidebar-title">Admin Panel</h3>
    <ul className="sidebar-menu">
      <li><FiHome /> Dashboard <IoIosArrowForward /></li>
      <li><FiBox /> All Products <IoIosArrowForward /> </li>
      <li><FiTag /> Categories <IoIosArrowForward /> </li>
      <li><FiShoppingCart /> Orders <IoIosArrowForward /> </li>
      <li><FiDollarSign /> Payments <IoIosArrowForward /> </li>
      <li><FiUsers /> Customers <IoIosArrowForward /> </li>
      <li><FiStar /> Reviews <IoIosArrowForward /> </li>
      <li><FiBarChart2 /> Reports <IoIosArrowForward /> </li>
      <li><FiSettings /> Settings <IoIosArrowForward /> </li>
    </ul>
  </aside>
  )
}
export default Sidebar