import React from "react";
import "./aboutus.css";
import images from "../../constants/images";

const Aboutus = () => {
  return (
    <div className="app-aboutUs" id="about">
      <div className="app-aboutUs-wrapper content_width section_padding">
        <div className="app-aboutUs-content">
          <h2>About Us</h2>
          <div className="box"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur totam cupiditate harum est, illo vitae optio tempora
            perferendis facilis, quas soluta laboriosam maxime amet sed quasi.
            Vitae, repudiandae libero!
          </p>
          <button className="btn btn-warning btn-sm"> Read more</button>
        </div>
        <div className="app-aboutUs-img">
          <img src={images.fallingBurger} />
        </div>

        <div className="app-aboutUs-history">
          <h2>Our history</h2>
          <div className="box"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            consequuntur totam cupiditate harum est, illo vitae optio tempora
            perferendis facilis, quas soluta laboriosam maxime amet sed quasi.
            Vitae, repudiandae libero!
          </p>
          <button className="btn btn-warning btn-sm">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
