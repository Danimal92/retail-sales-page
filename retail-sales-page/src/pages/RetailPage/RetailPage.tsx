import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import SalesGraph from "../../components/SalesGraph/SalesGraph";
import "./_style/retail-page.css";
import SalesTable from "../../components/SalesTable/SalesTable";

const RetailPage: React.FC = () => {
   return (
      <Row id="retail-page">
         <Col id={"side-bar-col"} md={3}>
            <SideBar />
         </Col>
         <Col id={"graph-table-col"}>
            <SalesGraph />
            <SalesTable />
         </Col>
      </Row>
   );
};

export default RetailPage;
