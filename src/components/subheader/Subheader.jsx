import "./subheader.css";
import React from "react";

function Subheader({ title, text }) {
  return (
    <div className="app-subheader">
      <h1 className="subheader-title">{title}</h1>
      <p className="subheader-text">{text}</p>
      <div className="subheader-btn-name"></div>
    </div>
  );
}

export default Subheader;
