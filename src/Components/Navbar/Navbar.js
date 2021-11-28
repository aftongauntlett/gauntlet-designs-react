import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="services">Services</Link>
          <Link to="portfolio">Portfolio</Link>
          <Link to="contact">Contact</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
