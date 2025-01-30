import React from 'react';
import '../styles/Navbar.css';
import { RiAccountCircle2Line } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div class="container">
      <div class="container1">
        <h2>Botiga</h2>
        <div class="input">
          <div><input type="text" placeholder="all categories" class="input-1" /></div>
          <div><input type="text" placeholder="Search product" class="input-2" /></div>
        </div>
        <div class="icons">
          <RiAccountCircle2Line />
          <LuMessageSquare />
          <GoHeart />
        </div>
      </div>
      <nav class="navbar">
        <div class="display-icon">
          <div class="trending">Trending categories</div>
          <MdExpandMore />
        </div>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/shop">
          <li>Shop</li>
        </Link>

        <Link to="/vendors">
          <li>Vendors</li>
        </Link>
        <Link to="/Blog">
          <li>Blog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <div class="numbers">800-123-4567</div>
      </nav>
    </div>
  )
}
export default Navbar;
