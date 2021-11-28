import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        {Navbar()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}
