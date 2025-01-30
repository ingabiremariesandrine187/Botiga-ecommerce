import React from 'react';
import '../styles/Blog.css'
import image31 from '../assets/Images/Blog1.webp'
import image32 from '../assets/Images/Blog2.webp'
import image33 from '../assets/Images/Blog3.webp'
import image34 from '../assets/Images/Blog4.webp'
import image35 from '../assets/Images/Blog5.webp'
import image36 from '../assets/Images/Blog6.webp'
const blogPosts = [
    {
      id: 1,
      image:image31,
      title: 'Sed magna dui, dignissim id felis vitae, consectetur',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
    },
    {
      id: 2,
      image: image32,
      title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
    },
    {
      id: 3,
      image: image33 ,
      title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]'
    },
  {
      id: 4,
      image: image34 ,
      title: 'Nam pharetra fringilla justo, et commodo lacus molestie ut',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]'
    },
    {
      id: 5,
      image: image35 ,
      title: 'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [-]'
    },
    {
      id: 6,
      image: image36,
      title: 'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [..]'
    }
  ];
  const Blog = () => {
    return (
        <div>
    <h1 className="blog-title">Blog</h1>
    <div className="blog-container">
      {blogPosts.map((post) => (
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
    )
  }
    
    export default Blog