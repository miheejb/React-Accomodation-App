import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">
          Tourism New Zealand
        </Link>
        <div className="navItems">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
