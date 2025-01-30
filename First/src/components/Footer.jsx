import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-router-dom"
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h2>Stay up to date</h2>
          <p>Subscribe to our newsletter and get a 20% discount on your first order.</p>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>
        </div>
        <div className="contact-info">
          <h2>Happy to help</h2>
          <p>1279 Thorn Street, NY</p>
          <p>Phone: 307-549-2480</p>
          <p>Mail: demo@gmail.com</p>
          <div className="social-icons">
            <FaFacebookF />
            <IoMdClose />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h3>SHOP</h3>
          <ul>
          <li><Link>Body lotion</Link></li>
            <li><Link>Computer gadget</Link></li>
            <li><Link>Electronics</Link></li>
            <li><Link>Fashion</Link></li>
            <li><Link>General</Link></li>
          <li><Link>Shoes</Link></li>
          </ul>
        </div>
        <div>
          <h3>COMPANY</h3>
          <ul>
            <li><Link>About</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Help</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>ABOUT</h3>
          <ul>
            <li><Link>Who We Are</Link></li>
            <li><Link>Reviews</Link></li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
