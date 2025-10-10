import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-buttom  shadow-sm">
      <div className="container">
        <Link className="navbar-brand neon-text" to="/">
          Pet Adoption
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text" to="/adopt">
                Adopt Pet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
