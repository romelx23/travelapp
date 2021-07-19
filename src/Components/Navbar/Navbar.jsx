import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/search">Search</Link>
          </li>
          <li className="navbar__item">
            <Link to="/tours">Tours</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
