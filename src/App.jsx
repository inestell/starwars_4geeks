import "./Styles/index.css";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./Components/Context";



function App() {
  


  return (
    <>
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/details" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
