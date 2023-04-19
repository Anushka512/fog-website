import "./style.scss";

import Navbar from "./Components/Navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Faq from "./Pages/FAQ/Faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/badreq" element={<Error />} />
        {/* <Route path="/faq" element={<Faq />} /> */}
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
