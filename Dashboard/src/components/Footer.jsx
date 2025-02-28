import React from 'react';
import '../styles/Footer.css';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Import react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        Able Pro <FaHeart className="heart-icon" /> crafted by Team Phoenixcoded
      </div>

      <div className="footer-right">
        <a href="#home">Home</a>
        <a href="#documentation">Documentation</a>
        <a href="#support">Support</a>
        <button className="buy-now-button">
          <FaShoppingCart className="cart-icon" /> Buy Now
        </button>
      </div>
    </footer>
  );
};

export default Footer;