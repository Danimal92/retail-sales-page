import { Container, Row } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import RetailPage from "./pages/RetailPage/RetailPage";
import { setProduct } from "./app/features/product/productSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { fetchProductData } from "./api/mockApi";
import { useAppDispatch } from "./app/hooks/hooks";

const App: React.FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      fetchProductData()
         .then((data) => dispatch(setProduct(data.data)))
         .catch((error) => console.error("Error fetching data:", error));
   }, [dispatch]);

   return (
      <div id="app">
         <Container id="app-container" fluid>
            <Row>
               <NavBar />
            </Row>
            <Row>
               <RetailPage />
            </Row>
         </Container>
      </div>
   );
};

export default App;
