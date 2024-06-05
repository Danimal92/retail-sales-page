import React from "react";
import "./_style/navbar.css";
import stacklineLogo from "../assets/stackline_logo.svg";
const NavBar: React.FC = () => {
   return (
      <div id="navbar">
         <img src={stacklineLogo}></img>
      </div>
   );
};

export default NavBar;
