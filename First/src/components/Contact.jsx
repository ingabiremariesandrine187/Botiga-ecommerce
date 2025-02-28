import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import '../styles/Contact.css'
import Navbar from './Navbar';
import { data } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit } = useForm();
  // const send = async (data) => {
  //   const { Name, Email, Subject, Message } = data;
  //   const formData = new FormData();

  //   formData.append('Name', Name);
  //   formData.append('Email', Email);
  //   formData.append('Subject', Subject);
  //   formData.append('Message', Message);

  //   try {
  //     const results = await axios.post(
  //       `https://botiga-kvf9.onrender.com/contact/createContact`,
  //       formData, // Pass formData as the first argument
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log("Success:", results.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };


  const send = async (data) => {
    try {
      const response = await axios.post(
        `https://botiga-kvf9.onrender.com/contact/createContact`,
        data, // Send data as JSON
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="contact-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.53268484482!2d30.08825227240952!3d-1.939479936683539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6bf81ce491f%3A0xd8377a6f4534fd79!2s336Q%2B8R7%2C%20KG%20573%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1738306039346!5m2!1sen!2srw"
        width="95%"
        height="450"
        style={{ border: 0, marginTop: "30px", marginLeft: "30px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-grid">
        <div className="form-section">
          <h2 className="section-title">Leave Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit(send)}>
            <div className="name-grid">
              <div className="form-group">
                <label>
                  Name <span className="required">*</span>
                </label>
                <input
                  type="String"
                  required
                  className="form-input"
                  {...register('Name', { required: true })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="String"
                  className="form-input"
                  {...register('Email', { required: true })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                Subject <span className="required">*</span>
              </label>
              <input
                type="String"
                required
                className="form-input"
                {...register(' Subject', { required: true })}
              />
            </div>

            <div className="form-group">
              <label> Message</label>
              <textarea
                rows={6}
                className="form-textarea"
                {...register('Message', { required: true })}
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