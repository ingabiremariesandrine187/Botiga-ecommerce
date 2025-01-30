import React from 'react';
import '../styles/Home.css';
import Image1 from '../assets/My picccccc.jpg';
import { MdOutlineMessage } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {About} from '../components/About'
function Home() {
  return (
    <>
    <body>
    <main className="hero-section">
        <div className="text-content">
          <p className="greeting">Hi!</p>
          <h1>I’m Marie Sandrine</h1>
          <h2>UI/UX DESIGNER</h2>
          <p className="description">
            I design user-focused solutions that drive engagement, enhance functionality, and support business growth. 
            My work transforms ideas into impactful experiences that boost company success.
          </p>
          <div className="contact">
          <MdOutlineMessage /><div>ingabiremariesandrine187@gmail.com</div>
          </div>
          <a href="#" className="hire-btn">Hire me</a>
          <div className="contact-info">
            <div className="first-contact">
              <div><FaLinkedinIn /></div>
              <div>Marie Sandrine<br />Ingabire</div>
            </div>
            <div className="second-contact">
              <div><BsFillTelephoneFill /></div>
              <div>0780528972</div>
            </div>
            <div className="third-contact">
              <div><IoLocationOutline /></div>
              <div>Nyarugenge</div>
            </div>
          </div>
        </div>
        <div className="image-content">
          <div className="image-wrapper">
            <img src={Image1} alt="Image1" />
          </div>
        </div>
      </main>
    </body>
    </>
  );
}

export default Home;
