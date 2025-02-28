import React, { useState } from 'react';
import '../styles/Navbar.css';
import { RiAccountCircle2Line } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import Login from '../components/Login';

function Navbar() {
  const [form, setForm] = useState(false);

  const handleForm = () => {
    setForm(!form);
  };

  return (
    <div className="container">
      {form && (
        <div className="modal-overlay">
          <Login handleForm={handleForm} />
        </div>
      )}
      <div className="container1">
      
        <div className='logo'>
          <h2>Botiga</h2>
          
        </div>
        <div className="input">
          <input type="text" placeholder="All categories" className="input-1" />
          <input type="text" placeholder="Search product" className="input-2" />
        </div>
        <div className="icons">
          <div><RiAccountCircle2Line onClick={handleForm} /></div>
          <div style={{ position: "relative" }}>
            <LuMessageSquare />
            <span className="icon-badge">0</span>
          </div>
          <div style={{ position: "relative" }}>
            <GoHeart />
            <span className="icon-badge">1</span>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="categoriesBar">
          <div className="trending">Trending categories</div>
          <MdExpandMore />
        </div>
        <div className='menu'>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/homeproduct">Homeproduct</Link>
        </div>
        <div className="numbers">800-123-4567</div>
      </div>
    </div>

  );
}
export default Navbar;
