import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import image40 from '../assets/Images/v1.webp'
import image41 from '../assets/Images/v2.webp'
import image42 from '../assets/Images/v3.webp'
import image43 from '../assets/Images/v4.webp'
import image44 from '../assets/Images/v5.webp'
import image45 from '../assets/Images/v6.webp'
import { AiOutlineRightCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import '../styles/Vendor.css'
function Vendor  ()  {
 const vendor= [
  {
    id:1,
    image:image40,
    title:'',
  },

  {
    id:2,
    image:image41,
    title:'',
  },

  {
    id:3,
    image:image42,
    title:'',
  },
  {
    id:4,
    image:image43,
    title:'',
  },
  {
    id:5,
    image:image44,
    title:'',
  },
  {
    id:6,
    image:image45,
    title:'',
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
<div className="blog-container">
      {vendor.map((post) => (
        <div key={post.id} className="v-card">
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <AiOutlineRightCircle class="icon-vendor"/>
          </div>
        </div>
      ))}
    </div>



  </div>
  
  );
}
export default Vendor;


