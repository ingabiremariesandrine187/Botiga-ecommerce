import React from 'react';
import { Link } from "react-router-dom";
import Image15 from '../assets/Images/Shop.webp';
import { GoChevronDown, GoMultiSelect } from "react-icons/go";
import { FaTh } from "react-icons/fa";
import '../styles/Shop.css';

function Shop() {
  const shop = [];

  return (
    <div className="shop-container">
      {/* Image Section */}
      <div className="image-wrapper">
        <img src={Image15} alt="Shop Banner" />
      </div>
      <div className="overlay-text">Shop</div>

      <div className="Shop">
        {/* Sidebar Categories */}
        <div className="shop-link">
          <div className="categorie-title">
            <h4>Categories</h4>
          </div>
          <Link to="/" className="category-link">Body Lotion</Link>
          <Link to="/computer-gadget" className="category-link">Computer Gadget</Link>
          <Link to="/electronics" className="category-link">Electronics</Link>
          <Link to="/fashion" className="category-link">Fashion</Link>
          <Link to="/general" className="category-link">General</Link>
          <Link to="/shoes" className="category-link">Shoes</Link>
          <Link to="/sports" className="category-link">Sports</Link>
          <Link to="/watch" className="category-link">Watch</Link>
          <Link to="/woman-clothes" className="category-link">Woman Clothes</Link>
        </div>

        {/* Products Header - Results Count & Sorting */}
        <div className="shop-header">
          <span className="results-text">Showing 1–9 of 13 results</span>
          <div className="sorting-section">
            <span className="default-sorting">Default sorting</span>
            <GoChevronDown />
            <div className="view-icons">
              <GoMultiSelect />
              <FaTh />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          {shop.map((post) => (
            <div key={post.id} className="shop-card">
              <img src={post.image} alt={post.title} />
              <div className="shop-content">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
