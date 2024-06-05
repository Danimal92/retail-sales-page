import React from "react";
import { Row, Col } from "react-bootstrap";

const RetailPage: React.FC = () => {
   return (
      <Row>
         <Col>{/* SIDEBAR */}</Col>
         <Col>
            <Row>{/* GRAPH */}</Row>
            <Row>{/* TABLE */}</Row>
         </Col>
      </Row>
   );
};

export default RetailPage;
