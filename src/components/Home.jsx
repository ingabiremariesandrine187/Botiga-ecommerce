import React from 'react';
import '../styles/Home.css';
import Image1 from '../assets/Images/First one.webp';
import Image2 from '../assets/Images/second one.webp';
import Image3 from '../assets/Images/third one.webp';
import Image4 from '../assets/Images/Forth one.webp';
import Image5 from '../assets/Images/fifth one.webp';
import Image6 from '../assets/Images/sixth one.webp';
import Image7 from '../assets/Images/seventh image.webp';
import Image8 from '../assets/Images/eight one.webp';
import Image9 from '../assets/Images/nineth one.webp';
import image20 from '../assets/Images/vendor one.webp'
import image21 from '../assets/Images/vendor two.webp'
import image22 from '../assets/Images/Vendor three.webp'
import image23 from '../assets/Images/pic1.webp'
import image24 from '../assets/Images/pic2.webp'
import image25 from '../assets/Images/pic3.webp'
import { IoIosStarOutline } from "react-icons/io";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from "react-router-dom"

function Home()
{
const home= [
{
id: 1,
      image: image20,
      title: 'Sancta Monicas store',
      content: 'New york ny',
},
{
id:2,
image:image21,
title:'Joe does store',
content:'New york ny'
},
{
    id:3,
    image:image22,
    title:'Digital goods store',
    content:'New york ny'
    },
    {
        id: 4,
              image: image23,
              title: 'Sancta Monicas store',
              content: 'New york ny',
        },
        
        {
        id:5,
        image:image24,
        title:'Joe does store',
        content:'New york ny'
        },
        {
            id:6,
            image:image25,
            title:'Digital goods store',
            content:'New york ny'
            },
          ];
            const homepost= [
              {
                id:7,
                image:Image7,
                title:'All In One Bottle',
                content:'$22.00 – $55.00'
                },
                {
                  id:8,
                  image:Image8,
                  title:'Amazon Alexa',
                  content:'$49.00 – $69.00'
                  },
                  {
                    id:9,
                    image:Image9,
                    title:'Headset Gamer Legion',
                    content:'$22.00 – $55.00'
                    },
     
            ];
return(
<>
<div class="container2">
<nav className="category-nav">
      <ul className="category-list">
        <li className="category-item">
          <Link to="/electronics" className="category-link">
            Electronics
          </Link>
        </li>
        <li className="category-item">
          <Link to="/computer-gadget" className="category-link">
            Computer Gadget
          </Link>
        </li>
        <li className="category-item">
          <Link to="/fashion" className="category-link">
            Fashion
          </Link>
        </li>
        <li className="category-item">
          <Link to="/body-lotion" className="category-link">
            Body Lotion
          </Link>
        </li>
        <li className="category-item">
          <Link to="/sports" className="category-link">
            Sports
          </Link>
        </li>
        <li className="category-item">
          <Link to="/woman-clothes" className="category-link">
            Woman Clothes
          </Link>
        </li>
        <li className="category-item">
          <Link to="/shoes" className="category-link">
            Shoes
          </Link>
        </li>
        <li className="category-item">
          <Link to="/watches" className="category-link">
            Watches
          </Link>
        </li>
      </ul>
    </nav>
<div>
 <h1>
    <div class="description-1">explore our latest and</div> 
    <div class="description-2">greatest electronics</div>
 </h1>
 <button>Shop now</button>
</div>
</div>
<div class="images">
<div class="images1">
    <h1>Popular categories</h1>
    <div class="Image-first">
      <div class="image-1">
      <div><img src={Image1} alt='Image1' class="img1"></img></div> 
      <h4>Body lotion</h4>
      </div>
       <div class="image-2">
       <div><img src={Image2} alt='Image2' class="img2"></img></div>
       <h4>Sports</h4>
       </div>
        <div class="image-3">
        <div><img src={Image3} alt='Image3'class="img3"></img></div>
        <h4>Computer gadget</h4>
        </div>
        <div class="image-4">
        <div><img src={Image4} alt='Image4'class="img4"></img></div>
        <h4>Electronics</h4>
        </div>
<div class="image-5">
<div><img src={Image5} alt='Image5'class="img5"></img></div>
<h4>Watch</h4>
  </div>        
<div class="image-6">
<div><img src={Image6} alt='Image6'class="img6"></img></div>
<h4>Woman clothes</h4>
</div>
    </div>
</div>
<div class="images2">
 <h1>New arrival products</h1>
</div>
<div class="image-second">
<div class="description1"><img src={Image7} alt='Image7' class="img7"></img>
<div class="bottle" >All in one bottle</div>
<div class="bottle-price">$22.00-$55.00</div>
<div class="star-icons">
<div><IoIosStarOutline  class="yellow"/></div>
<div><IoIosStarOutline class="yellow"/></div>
<div><IoIosStarOutline class="yellow"/></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
</div>
</div>
<div class="description2" ><img src={Image8} alt='Image8' class="img8"></img>
<div class="bottle1">Amazone alexa</div>
<div class="bottle1-price">$49.00-$69.00</div>
<div class="star-icons">
<div><IoIosStarOutline  class="yellow"/></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
</div>
</div>
<div class="description3"><img src={Image9} alt='Image9' class="img9"></img>
<div class="bottle2">Headset gamer legion</div>
<div class="bottle2-price">$22.00-$55.00</div>
<div class="star-icons3">
<div><IoIosStarOutline class="yellow"/></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
<div><IoIosStarOutline /></div>
</div>
</div>
</div>
<div class="second-button"><button>SHOP NOW</button></div>
<div class="arrays-pictures">
    <div class="Vendor"><h1>Our Vendor list</h1></div>
    <div class="Vendor-container">
    {home.map((post) => (
        <div key={post.id} className="home-card">
          <img src={post.image} alt={post.title} />
          <div className="Vendor-content">
            <div>
            <h2>{post.title}</h2>  
            <p>{post.content}</p>
            </div>
            <div><TfiArrowCircleRight /></div>
          </div>
        </div>
      ))}
    </div>
</div>
<div class="see-button"><button> SEE ALL VENDORS</button>
</div>
<div class="reason-heading"><h1>Why peaple choose us</h1></div>
    <div class="reasons-icons">
    <div>
        <div class="first-reason"><h2>Easy returns</h2>
        <p>Our return policy is simple and that is why customers love our shop.</p>
        </div>
    </div>
    <div>

    <div class="first-reason"><h2>Customer services</h2>
        <p>Our return policy is simple and that is why customers love our shop.</p>
        </div>
    </div>
    <div>
    <div class="first-reason"><h2>High quality</h2>
        <p>Our return policy is simple and that is why customers love our shop.</p>
        </div>
    </div>
    </div>
    <div class="explore-contain">
    <h1>
      Explore our products
    </h1>
    </div>
    <div class="expore-container">
    {homepost.map((post) => (
        <div key={post.id} className="home-card">
          <img src={post.image} alt={post.title} />
          <div className="Home-content">
            <h2>{post.title}</h2>  
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
 <div class="Follow-us">
  <h1>Follow us on @ instangram</h1>
 </div>
<div class="instagram-pic">
hhhhhh
</div>


</div> 


</>
)
}
export default Home;