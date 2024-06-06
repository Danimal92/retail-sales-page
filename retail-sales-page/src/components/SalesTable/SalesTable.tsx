import React from "react";
import { Row, Col } from "react-bootstrap";
import "./_style/sales-table.css";
import { useAppSelector } from "../../app/hooks/hooks";
import DataTable from "react-data-table-component";
import { SalesInfo } from "../../types";

const SalesTable: React.FC = () => {
   const product = useAppSelector((state) => state.product);

   const columns = [
      {
         name: "Week Ending",
         selector: (row: SalesInfo) => row.weekEnding,
         sortable: true,
      },
      {
         name: "Retail Sales",
         selector: (row: SalesInfo) => row.retailSales,
         sortable: true,
      },
      {
         name: "Wholesale Sales",
         selector: (row: SalesInfo) => row.wholesaleSales,
         sortable: true,
      },
      {
         name: "Units Sold",
         selector: (row: SalesInfo) => row.unitsSold,
         sortable: true,
      },
      {
         name: "Retailer Margin",
         selector: (row: SalesInfo) => row.retailerMargin,
         sortable: true,
      },
   ];
   return (
      <Row id="sales-table">
         <Col id="sales-table-component">
            <div>
               <DataTable
                  columns={columns}
                  data={product.sales}
                  selectableRows
                  pagination
               />
            </div>
         </Col>
      </Row>
   );
};

export default SalesTable;
