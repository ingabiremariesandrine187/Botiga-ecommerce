import React from 'react'
import '../styles/Signup.css'
function Signup() {
  return (
    <div className="modal">
      <div className="modal-content">        
        <h2 className="header">Signup</h2>
        <form>
          <input type="text" placeholder="Enter your names" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Create password" required />
          <input type="password" placeholder="Confirm password" required />
          <div class="signup"><button type="submit">Signup</button></div> 
        </form>
        
        
      </div>
    </div>




    
  )
}
export default Signup