import "./Styles/index.css";
import Home from "./Components/Home";
import Details from "./Components/Details";
import DetailsPlanets from "./Components/DetailsPlanets";
import DetailsVehicles from "./Components/DetailsVehicles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./Components/Context";



function App() {
  


  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details/:index" element={<Details />}></Route>
            <Route path="/detailsPlanets/:index" element={<DetailsPlanets />}></Route>
            <Route path="/detailsVehicles/:index" element={<DetailsVehicles />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
