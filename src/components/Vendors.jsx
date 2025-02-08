import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import image40 from '../assets/Images/v1.webp'
import image41 from '../assets/Images/v2.webp'
import image42 from '../assets/Images/v3.webp'
import image43 from '../assets/Images/v4.webp'
import image44 from '../assets/Images/v5.webp'
import image45 from '../assets/Images/v6.webp'
import profile1 from '../assets/Images/Small1.webp'
import profile2 from '../assets/Images/Small2.webp'
import profile3 from '../assets/Images/Small3.webp'
import profile4 from '../assets/Images/Small4.webp'
import profile5 from '../assets/Images/Small5.webp'
import profile6 from '../assets/Images/Small6.png'
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../styles/Vendor.css'
function Vendor  ()  {
 const vendor= [
  {
    id: 1,
    image: image40,
    title: "John Doe's Store",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    smallImage: profile1,
  },

  {
    id: 2,
    image: image41,
    title: "Jessica's Store",
    rating: 4,
    location: "Central Park, New York, United States (US)",
    smallImage: profile2,
  },

  {
    id: 3,
    image: image42,
    title: "Santa Monica's Store",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    smallImage: profile3,
  },
  {
    id: 4,
    image: image43,
    title: "Digital Good's Store",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    smallImage: profile4,
  },
  {
    id: 5,
    image: image44,
    title: "The Glass Store",
    rating: 4,
    location: "Central Park, New York, United States (US)",
    smallImage: profile5,
  },
  {
    id: 6,
    image: image45,
    title: "Josh Doe's Store",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    phone: "123456789",
    smallImage: profile6,
  },

]
   
   
  return (
  <div class="class-vendor">
<div class="vendor-header"><h1>Store list</h1></div>
<div class="vendor-input">
    <div class="total">
        <h4>Total store showing equal 6</h4>
    </div>
    <div class="store-content">
        <div><input type="text" placeholder="Filter"class="input-3"/></div>
        <div>Sort by:</div>
        <div><input type="text" placeholder="Most recent"class="input-4"/></div>
        <div class="icons-vendor"><AiFillAppstore />
        <AiOutlineMenu />
        </div>
    </div>
</div>
<div className="Vendor-container">
      {vendor.map((post) => (
        <div key={post.id} className="v-card">
          <img src={post.image} alt={post.title} />
          <div className="vendor-content">
            <h2>{post.title}</h2>
            <div className="ratings">
              {"★".repeat(post.rating)} {/* Display dynamic stars */}
            </div>
            <p>{post.location}</p>
            {post.phone && ( 
              <p className="phone"><FaPhoneAlt /> {post.phone}</p>
            )}
            <div className="small-overlay-img">
              <img src={post.smallImage} alt="profile icon" />
            </div>
          </div>
          <div><AiOutlineRightCircle className="icon-vendor" /></div>
        </div>
      ))}
    </div>
  </div>
  );
}
export default Vendor;


