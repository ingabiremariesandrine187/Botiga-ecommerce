import React from 'react';
import '../styles/About.css';
import Image1 from '../assets/My picccccc.jpg';
function About()
{
return(
<>
<section class="about-section">
        <div class="image-wrapper">
             <img src={Image1} alt="Image1" />
        </div>
        <div class="about-content">
            <div class="tags">
                <div class="tag">UI/UX Designer</div>
                <div class="tag">Web Development</div>
                <div class="tag">Cybersecurity</div>
            </div>
            
            <h2>Need awesome designs? I'm here to help as a UI/UX designer!</h2>
            <div class="second-description">
                I specialize in creating user-friendly and visually stunning 
                designs that bring ideas to life. From wireframe to interactive
                prototypes, I focus on delivering seamless 
                and engaging experiences.
                My goal is to ensure your brand stands out while meeting 
                user needs effectively. Let’s collaborate to build 
                something extraordinary!</div>
        </div>
    </section>
</>
);
}
export default About;