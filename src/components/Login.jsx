import React from "react";
import '../styles/Login.css';
import { IoClose } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = ({ handleForm }) => {
  return (
    <div className="modal">
      <div className="form-Login">
        <div class="login-close">
        <IoClose className="close-icon" onClick={handleForm}/>
        <h2>Login</h2>
          </div>
          <div class="Login">
          <input type="text" placeholder="First Name"class="input-name" required />
        <input type="text" placeholder="Last Name" class="input-lname" required/>
        <input type="email" placeholder="Email" class="input-email" required />
        <button type="submit">Login</button>
          </div>
        <div><Link to="/Sign-up">Signup</Link></div>
        <div class="login-description">
          <div class="description-login">
          
          <div><FaTwitter /></div>
          <div><FcGoogle /></div>
          <div><FaGithub /></div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
