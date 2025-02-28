import React from "react";
import "../styles/Registration.css";
function Registration() {
  return (
    <div className="form-container">
      <form action="#" method="post">
        <input type="text" name="First name" placeholder="First Name" required />
        <input type="text" name="Last name" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="comment" placeholder="Comment" required></textarea>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
