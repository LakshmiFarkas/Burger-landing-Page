import "./navbar.css";
import React, { useState } from "react";
import images from "../../constants/images";
import { FaHamburger } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const newLocal = "navbar-cross";
  return (
    <>
      <div className="app-navbar">
        <div className="app-navbar-wrapper content_width">
          <div className="app-navbar-logo">
            <img src={images.logo} />
          </div>
          <ul className="app-navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="app-navbar-login-register">
            <a href="#">Login</a>&nbsp;|&nbsp;<a href="#">Register</a>
          </div>
          <div className="navbar-small-screen">
            {<FaHamburger size="28px" onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
              <div className="navbar-small-screen-overlay">
                <RxCross1
                  size="28px"
                  className={newLocal}
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="app-navbar-small-screen-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
