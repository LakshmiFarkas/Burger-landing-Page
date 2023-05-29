import "./subheader.css";
import React from "react";

function Subheader({ title }) {
  return (
    <div className="app-subheader">
      <p>{title}</p>
      <div className="box"></div>
    </div>
  );
}

export default Subheader;
