import React from "react";
import Contact from "./Contact/Contact"
import About from "./About/About"
import Home from "./Home/Home"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
             <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />  
          <Route path='/services' element={<Services/>} />  
          <Route path='/portfolio' element={<Portfolio/>} />  
        </Routes>
      </div>
    </Router>
  );
}



