import React from "react";
import "./menu.css";
import { Subheader } from "../../components";

const Menu = () => {
  return (
    <div className="app-menu">
      <div className="app-menu-wrapper content_width section_padding">
        <div className="app-menu-title">
          <Subheader title="Menu that fits your stomach" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
