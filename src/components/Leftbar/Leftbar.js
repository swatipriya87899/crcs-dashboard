import React from "react";
import "./Leftbar.css";
import logo from "./../../images/logo.png";
import Hr from "../Hr/Hr";
import LeftMenu from "../LeftMenu/LeftMenu";

const Leftbar = () => {
  return (
    <div className="leftbar">


      {/* CRCS logo*/}
      <div className="crcs_info">
        <img src={logo} alt="crcs_logo"></img>
      </div>

      <Hr/>
      <LeftMenu/>
    </div>
  );
};

export default Leftbar;
