import React from "react";
import "./_style/navbar.css";
import stacklineLogo from "../../assets/stackline_logo.svg";
import { Row, Col } from "react-bootstrap";
const NavBar: React.FC = () => {
   return (
      <Row id="navbar">
         <Col>
            <img id="stackline-logo" src={stacklineLogo}></img>
         </Col>
      </Row>
   );
};

export default NavBar;
