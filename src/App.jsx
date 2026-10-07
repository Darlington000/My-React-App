import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Contactus from "./Pages/Contactus";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
