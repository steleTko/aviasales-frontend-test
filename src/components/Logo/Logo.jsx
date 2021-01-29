import React from "react";
import "./Logo.css";
import logo from "./img/Logo.svg";

export default function Logo() {
  return (
    <div className="wrapper">
      <div className="content__logo">
        <a href="/" className="content__logo-link">
          <img className="content__logo-pic" src={logo} alt="Aviasales" />
        </a>
      </div>
    </div>
  );
}
