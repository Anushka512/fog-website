import "./style.scss";
import React from "react";
// import Navbar from './Components/Navbar.js';
// import { Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js"
import Footer from "./Components/Footer/Footer.js"

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
       <Error />
      <Footer />
      Hii
    </div>
  );
}

export default App;
