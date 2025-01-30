import React from 'react';
import '../styles/Navbar.css';
function Navbar(){
return(
<>
<header>
<nav class="navbar">
    <li>Home</li>
    <Link to="/about">
    {" "}
    <li>About</li>
    </Link>
    <Link to='/services'>
    <li>Services</li>
    </Link>
    <li>about</li>
<button>Login</button>
</nav>
</header>
</>
)
}
export default Navbar