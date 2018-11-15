import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar">
    <a href="/">Clicky Game</a>
  </nav>
);

export default Navbar;
