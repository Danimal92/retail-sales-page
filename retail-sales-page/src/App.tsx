import { Container, Row } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import RetailPage from "./pages/RetailPage/RetailPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
   // useEffect(() => {
   //   first

   //   return () => {
   //     second
   //   }
   // }, [third])

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
