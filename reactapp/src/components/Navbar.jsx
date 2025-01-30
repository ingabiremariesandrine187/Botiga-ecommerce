import React from 'react';
import '../styles/Navbar.css';

function Navbar()
{
  return(
    <>
    <body>
    <header>
        <nav>
            <ul class="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li class="Hire"><a href="#" onclick="navigateToHireMe()">Hire Me</a></li>
            </ul>
        </nav>
    </header>
    </body>   
    </>
  )   
}
export default Navbar;