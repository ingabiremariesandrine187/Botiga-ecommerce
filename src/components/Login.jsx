import React from "react";
import '../styles/Login.css';
import { IoClose } from "react-icons/io5";

const Login = ({ handleForm }) => {
  return (
    <div className="modal">
      <div className="form-Login">
        <IoClose className="close-icon" onClick={handleForm} />
        <h2>Login</h2>
        <input type="text" placeholder="First Name"class="input-name" required  />
        <input type="text" placeholder="Last Name" class="input-lname" required />
        <input type="email" placeholder="Email" class="input-email" required />
        <button type="submit">Login</button>
        <div class="login-description">
          <div class="description-login">
          <h6>or sign up using </h6>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
