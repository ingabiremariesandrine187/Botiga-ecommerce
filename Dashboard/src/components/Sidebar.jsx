import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Import the CSS file
import { FaRegDotCircle, FaUser } from "react-icons/fa";
import { LuChartBarBig } from "react-icons/lu";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";
import avatar from "../assets/Avatal.jpg";
import OverviewDashboard from './Contentoth';

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isLayoutsOpen, setIsLayoutsOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleLayouts = () => {
    setIsLayoutsOpen(!isLayoutsOpen);
  };
  const toggleCourse = () => {
    setIsCourseOpen(!isCourseOpen);
  };
  const toggleMember = () => {
    setIsMemberOpen(!isMemberOpen);
  };


  return (
    <aside className="sidebar">
      <div className="logo-container">
        <span className="logo-text">
          <span className="logo-main">Able</span>
          <span className="logo-pro">pro</span>
        </span>
        <span className="version">v1.1.0</span>
      </div>

      <div className="profile-card">
        <img 
          src={avatar} 
          alt="User Avatar" 
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name">Jonh Smith</h2>
          <p className="profile-title">Administrator</p>
        </div>
      </div>

      <nav className="navigation">
        <h3 className="nav-heading">NAVIGATION</h3>
        <ul>
          {/* Dashboard Section */}
          <li className="nav-item" onClick={toggleDashboard} style={{ cursor: 'pointer' }}>
            <span className="nav-icon"><MdSpaceDashboard/></span>
            <span>Dashboard</span>
            <span className="badge">2</span>
            <span className="arrow">{isDashboardOpen ? '▼' : '▶'}</span>
          </li>

          {/* Dashboard Submenu */}
          {isDashboardOpen && (
            <>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#default">Default</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot-blue"></span>
                <a href="#analytics">Analytics</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">Finance</a>
              </li>
            </>
          )}

          {/* Layouts Section */}
          <li className="nav-item" onClick={toggleLayouts} style={{ cursor: 'pointer' }}>
            <span className="nav-icon-layout"><FaNoteSticky/></span>
            <span>Layouts</span>
            <span className="another"></span>
            <span className="arrow">{isLayoutsOpen ? '▼' : '▶'}</span>
          </li>

          {/* Layouts Submenu */}
          {isLayoutsOpen && (
            <>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#vertical">Vertical</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#horizontal">Horizontal</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#layout2">Layout 2</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#compact">Compact</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#tab">Tab</a>
              </li>
            </>
          )}
        </ul>
        <h3 className="nav-heading">WIDGET</h3>
        <div>
          <p> <FaRegDotCircle/> Statistics</p>
          <p><LuChartBarBig/>Data</p>
         <p> <HiOutlinePresentationChartBar/>Chart</p>
        </div>
        <h3 className="nav-heading">ADMIN PANEL</h3>
        <div>
                <ul>
          {/* Dashboard Section */}
          <li className="nav-item" onClick={toggleCourse} style={{ cursor: 'pointer' }}>
            <span className="nav-icon"><SiBookstack/></span>
            <span>Online Course</span>
            <span className="another"></span>
            <span className="arrow">{isCourseOpen ? '▼' : '▶'}</span>
          </li>

          {/* Dashboard Submenu */}
          {isCourseOpen && (
            <>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#default">Dashboard</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot-blue"></span>
                <a href="#analytics">Teacher</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">Student</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">courses</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">Pricing</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">Site</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#finance">Settings</a>
              </li>
            </>
          )}

          {/* Layouts Section */}
          <li className="nav-item" onClick={toggleMember} style={{ cursor: 'pointer' }}>
            <span className="nav-icon-layout"><FaUser/></span>
            <span>Membership</span>
            <span className="another"></span>
            <span className="arrow">{isMemberOpen ? '▼' : '▶'}</span>
          </li>

          {/* Layouts Submenu */}
          {isMemberOpen && (
            <>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#vertical">Dashboard</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#horizontal">List</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#layout2">Pricing</a>
              </li>
              <li className="nav-item">
                <span className="nav-dot"></span>
                <a href="#compact">Setting</a>
              </li>
              
            </>
          )}
        </ul>
       
        </div>
        <h3>UI components</h3>
        <div>
            
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
