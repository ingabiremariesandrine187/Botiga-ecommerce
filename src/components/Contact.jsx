import React from 'react';
import '../styles/Contact.css'
import Navbar from './Navbar';
function Contact() {
  return (
    <div className="contact-container">
<iframe  
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.53268484482!2d30.08825227240952!3d-1.939479936683539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6bf81ce491f%3A0xd8377a6f4534fd79!2s336Q%2B8R7%2C%20KG%20573%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1738306039346!5m2!1sen!2srw" 
                width="95%" 
                height="450" 
                style={{ border: 0 ,marginTop:"30px",marginLeft:"30px" }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
    <div className="contact-grid">
      <div className="form-section">
        <h2 className="section-title">Leave Us a Message</h2>
        <form className="contact-form">
          <div className="name-grid">
            <div className="form-group">
              <label>
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label>Comment or Message</label>
            <textarea
              rows={6}
              className="form-textarea"
            />
          </div>
          
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>

      
      <div className="store-section">
        <div className="store-card">
          <div className="card-header">
            <h2 className="section-title">Our Store</h2>
          </div>
          <div className="card-content">
            <p className="store-address">
              501-521 Fashion Ave, New York, NY 10018, USA
            </p>
            
            <div className="info-group">
              <h3 className="info-title">PHONE:</h3>
              <p className="info-text">+1 212 244 2681</p>
            </div>
            
            <div className="info-group">
              <h3 className="info-title">E-MAIL:</h3>
              <p className="info-text">office@example.org</p>
            </div>
            
            <div className="store-hours">
              <h3 className="hours-title">Store Hours</h3>
              <div className="hours-content">
                <p>Sun: Closed</p>
                <p>Mon to Sat: 10 AM – 5:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Contact