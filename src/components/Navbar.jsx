import React from 'react';
import '../styles/Navbar.css';
import { RiAccountCircle2Line } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="container">
      <div className="container1">
        <div className='logo'>
          <h2>Botiga</h2>
        </div>

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
      <div className="navbar">
        <div className="categoriesBar">
          <div class="trending">Trending categories</div>
          <MdExpandMore />
        </div>
        <div className='menu'>
          <div>
            <Link to="/">
              Home
            </Link>
          </div>
          <div>
            <Link to="/shop">
              Shop
            </Link>
          </div>
          <div>
            <Link to="/vendors">
              Vendors
            </Link>
          </div>
          <div>
            <Link to="/Blog">
              Blog
            </Link>
          </div>
          <div>
            <Link to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="numbers">800-123-4567</div>
      </div>
    </div>
  )
}
export default Navbar;
