import React from "react";
import { Col, Row } from "react-bootstrap";
import "./_style/sidebar.css";
import { useAppSelector } from "../../app/hooks/hooks";
import Spinner from "react-bootstrap/Spinner";
const SideBar: React.FC = () => {
   const product = useAppSelector((state) => state.product);
   console.log("product: ", product);
   return (
      <Row id="sidebar">
         <Col>
            <div id="sidebar-image-container">
               {product.image ? (
                  <img
                     id="sidebar-image"
                     src={product.image}
                     alt="picture of product"
                  />
               ) : (
                  <Spinner
                     style={{ width: "5rem", height: "5rem", marginTop: "10%" }}
                     animation="border"
                  />
               )}
            </div>
            <p id="sidebar-product-title">{product.title}</p>
            <p id="sidebar-product-subtitle">{product.subtitle}</p>
            <div className="sidebar-line"></div>
            <div id="sidebar-tags">
               {product.tags.map((tag, index) => (
                  <span key={index} className="tag">
                     {tag}
                  </span>
               ))}
            </div>
            <div className="sidebar-line"></div>
         </Col>
      </Row>
   );
};

export default SideBar;
