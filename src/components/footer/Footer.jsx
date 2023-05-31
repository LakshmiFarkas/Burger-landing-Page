import React from "react";
import "./footer.css";
import { images } from "../../constants";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTumblr,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="app-footer">
      <div className="app-footer-wrapper section_padding content_width">
        <img src={images.logo} />
        <div className="footer-links">
          <div className="separator"></div>
          <p>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
          </p>
          <p>&copy; 2023 Burger website. All rights reserved.</p>
        </div>
        <div className="footer-social-info">
          <div className="footer-social-icons">
            <SlSocialTwitter />
            <SlSocialInstagram />
            <SlSocialPintarest />
            <SlSocialTumblr />
          </div>

          <p>lakshmi.farkas@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
