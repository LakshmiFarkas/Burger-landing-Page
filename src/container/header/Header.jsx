import "./header.css";
import React from "react";
import { Subheader } from "../../components";
import { images } from "../../constants";
import { motion } from "framer-motion";
import AnimateDiv from "../AnimateDiv";

const Header = () => {
  return (
    <>
      <div className="app-header " id="home">
        <div className="app-header-wrapper content_width section_padding">
          <AnimateDiv dir="left">
            <div className="app-header-info ">
              <Subheader title="Explore our new taste" />
              <h1>
                Eat burger<br></br> and
                <br /> destroy your hunger
              </h1>
              <p>
                Every day of week explore with us the new flavour that make you
                crave for each bite
              </p>
              <button className="btn btn-outline-light">
                Explore our Menu
              </button>
            </div>
          </AnimateDiv>
          <AnimateDiv dir="right">
            <div className="app-header-image">
              <img
                src={images.burgerCombo}
                alt="burgerCombo"
                className="fancy-borders"
              />
            </div>
          </AnimateDiv>
        </div>
      </div>
    </>
  );
};

export default Header;
