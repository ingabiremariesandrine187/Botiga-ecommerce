import React from 'react';
import Image15 from '../assets/Images/Shop.webp'
import { Link } from "react-router-dom"
function Shop() {
  return (
    <div class="shop-container">
      <div class="image-wrapper">
        <img src={Image15} alt='Image15'></img>
        </div>
    <div class="Shop-categories">
    <div class="categorie-title"><h4>Categories</h4></div>  
   <div class="Category-link">
<ul>
<li>
    <Link>
    Body lotion
    </Link>
  </li>
  <li><Link>Computer Gadget</Link></li>
  <li><Link>Electronics</Link></li>
  <li><Link>Fashion</Link></li>
  <li><Link>General</Link></li>
  <li><Link>Sports</Link></li>
  <li><Link>watch</Link></li>
  <li><Link>Woman clothes</Link></li>
  <li><Link></Link></li>
</ul>
   </div>
    </div>
    </div>
  );
}
export default Shop;