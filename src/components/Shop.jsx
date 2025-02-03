import React from 'react';
import { Link } from "react-router-dom"
import Image15 from '../assets/Images/Shop.webp'
import { GoChevronDown } from "react-icons/go";
import { GoMultiSelect } from "react-icons/go";
import { FaTh } from "react-icons/fa";
import image50 from '../assets/Images/bottle.webp'

import '../styles/Shop.css'

function Shop() {
  const shop= [
  {
  id: 1,
        image: image50,
        title: 'Sancta Monicas store',
        content: 'New york ny',
  },
]
  return (
    <div class="shop-container">
      <div class="image-wrapper">
        <img src={Image15} alt='Image15'></img>
        </div>
    <div class="Shop">
      <div class="shop-link">
      <div class="categorie-title"><h4>Categories</h4></div>
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
      <div class="pictures-input">
          <div>Showing 1–9 of 13 results</div>
          <div class="default-icon">
          <div>Default sorting</div>
          <GoChevronDown />
          <div class="default-second-icon">
          <GoMultiSelect />
          <FaTh />
          </div>
          </div>
        </div>
        <div>
        {shop.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
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