import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand" to="/">
      Clicky Game
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
