import React from 'react';
import '../styles/Headerbar.css'; // Import the CSS file
import { FaBars, FaSearch, FaSun, FaCog, FaBolt, FaBell } from 'react-icons/fa'; // Import react-icons
import { BiText } from "react-icons/bi";

const Headerbar = () => {
  return (
    <header className="headerbar">
      <div className="headerbar-left">
        <FaBars className="headerbar-icon" />
        <div className="search-input-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Ctrl + K" className="search-input" />
        </div>
      </div>

      <div className="headerbar-right">
        <FaSun className="headerbar-icon" />
        <BiText className="headerbar-icon"/>
        <FaCog className="headerbar-icon" />
        <FaBolt className="headerbar-icon" />
        <div className="notification-container">
          <FaBell className="headerbar-icon" />
          <span className="notification-badge">3</span>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/585/322/original/default-avatar-photo-placeholder-vector.jpg"
          alt="User Avatar"
          className="headerbar-avatar"
        />
      </div>
    </header>
  );
};

export default Headerbar;