import React from "react";
import { Row, Col } from "react-bootstrap";
import "./_style/sales-graph.css";
import {
   CartesianGrid,
   Legend,
   Line,
   LineChart,
   ResponsiveContainer,
   XAxis,
   YAxis,
   Tooltip,
} from "recharts";
import { useAppSelector } from "../../app/hooks/hooks";

const SalesGraph: React.FC = () => {
   const product = useAppSelector((state) => state.product);
   console.log("product.sales: ", product);

   const tickFormatter = (tick: string) => {
      const date = new Date(tick);
      return new Intl.DateTimeFormat("en-US", {
         month: "short",
      }).format(date);
   };
   return (
      <Row id="sales-graph">
         <Col>
            <p id="sales-graph-title">Retail Sales</p>
            <ResponsiveContainer width="100%" height={450}>
               <LineChart data={product.sales}>
                  <XAxis
                     dataKey="weekEnding"
                     tickFormatter={tickFormatter}
                     interval={3}
                  />
                  <YAxis interval={"preserveStartEnd"} />
                  <Line
                     type="monotone"
                     dataKey="retailSales"
                     stroke="#0384fc"
                     strokeWidth={2}
                     name={"Retail Sales"}
                  />
                  <Line
                     type="monotone"
                     dataKey="wholesaleSales"
                     stroke="#97b0c7"
                     strokeWidth={2}
                     name={"Wholesale Sales"}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip isAnimationActive={true} />
               </LineChart>
            </ResponsiveContainer>
         </Col>
      </Row>
   );
};

export default SalesGraph;
