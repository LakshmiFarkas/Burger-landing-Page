import "./header.css";
import React from "react";
import { Subheader } from "../../components";

const Header = () => {
  return (
    <>
      <div className="app-header content_width section_padding">
        <div className="app-header-info">
          <Subheader
            title="fill your hunger with cheesy classic burger"
            text="Don't resist when your stomach is asking you, just get what he wants"
          />
        </div>
        <div className="app-header-image"></div>
      </div>
    </>
  );
};

export default Header;
