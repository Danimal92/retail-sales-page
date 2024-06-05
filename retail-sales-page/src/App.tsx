import "./App.css";
import NavBar from "./components/Navbar";

const App: React.FC = () => {
   return (
      <div>
         <NavBar />
         <div id="app-content">
            <h1>App</h1>
         </div>
      </div>
   );
};

export default App;
