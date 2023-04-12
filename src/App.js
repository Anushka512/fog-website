import "./style.scss";
import Navbar from './Components/Navbar.js';
// import { Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js"
import Footer from "./Components/Footer/Footer.js"
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Error />
      <Footer />
    
    </div>
  );
}

export default App;
