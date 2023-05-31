import React from "react";
import "./contactUs.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill, BsFillSendFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="app-contactUs" id="contact">
      <div className="app-contactUs-wrapper  content_width section_padding ">
        <div className="app-contactUs-left">
          <h4>Write to us</h4>
          <input type="text" placeholder="Name" id="custumer-contact-name" />
          <input type="email" placeholder="Email" id="custumer-contact-email" />
          <textarea placeholder="Enter message" rows={6}></textarea>
          <button className="btn btn-outline-warning">Submit</button>
        </div>
        <div className="app-contactUs-right">
          <h4>Contact Info</h4>
          <p>We are always open for any queries</p>
          <div className="app-contact-details">
            <p>
              <IoLocationSharp />
              <span>Address: </span>#24 street, BR colony 14, New York
            </p>
            <p>
              <BsTelephoneFill />
              <span>Phone: </span>+421 432939843
            </p>
            <p>
              <BsFillSendFill />
              <span>Mail: </span>lakshmi.burger@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
