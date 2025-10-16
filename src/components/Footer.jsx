import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Pet Adoption</h5>
            <p>
              We are dedicated to giving every animal a loving home. Adopt,
              donate, or volunteer — your small act can save a life.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/adopt" className="footer-link">Adopt a Pet</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Aurangabad, Maharashtra</p>
            <p>info@petadoption.org</p>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <hr className="mt-4 mb-3 text-white-50" />

        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Pet Adoption</strong> | Made with ❤️ by Vishavdip Vaidya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
