import React from "react";
import "./menu.css";
import { Subheader } from "../../components";
import { data, images } from "../../constants";

const Menu = () => {
  return (
    <div className="app-menu">
      <div className="app-menu-wrapper content_width section_padding">
        <div className="app-menu-title">
          <Subheader title="Menu that fits your stomach" />
          <h2>Today's special</h2>
        </div>
        <div className="app-menu-burgers">
          {data.burgers.map((burger, index) => (
            <div className="app-menu-burger" key={burger.title}>
              <div className="menu-img-wrapper">
                <img src={burger.img_src} />
              </div>
              <div className="menu-details">
                <p className="menu-title">{burger.title}</p>
                <p className="menu-ingr">{burger.ingr}</p>
                <p className="menu-prize">{burger.prize}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
