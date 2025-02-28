import React from 'react'
import { useParams } from 'react-router-dom'
import  { blogPosts } from './Blog';
import '../styles/Singleblog.css'
function  Singleblog() {
    const {id}= useParams();
    const singlecard=blogPosts.find((singlecard)=>singlecard.id==id);
  return (
    <div class="image-blog-container">
         <div class="blog-heading-one"><h5>July 18, 2021 rodrigo1 min read</h5></div>
        <div class="blog-heading"><h2>Sed magna dui, dignissim id felis vitae, consectetur</h2></div>
      <div class="image-card"><img src={singlecard.image}/></div>  
      <div class="title">{singlecard.title}</div>
      <div class="content">{singlecard.content}</div>
     <div>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris.
          Cras eu faucibus</p>
          <p> lorem. Integer mattis dolor eu feugiat finibus.
          Class aptent taciti sociosqu ad litora torquent per conubia </p>
          <p> lorem. Integer mattis dolor eu feugiat finibus.
          Class aptent taciti sociosqu ad litora torquent per conubia </p>
          <p>lorem. Integer mattis dolor eu feugiat finibus.
          Class aptent taciti sociosqu ad litora torquent per conubia</p>
      </div> 
    </div>
  )
}
export default Singleblog