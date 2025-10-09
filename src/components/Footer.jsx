import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold"> Pet Adoption</h5>
            <p>
              We are dedicated to giving every animal a loving home. Adopt,
              donate, or volunteer — your small act can save a life.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/adopt" className="footer-link">
                  Adopt a Pet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i>Aurangabad,
              Maharashtra
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i>info@petadoption.org
            </p>
            <p>
              <i className="fa fa-phone me-2"></i>+91 98765 43210
            </p>

            <div className="social-icons mt-3">
              <a href="#" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-3 text-white-50" />

        <div className="text-center small">
          © {new Date().getFullYear()} <strong>Pet Adoption</strong> | Made with
          ❤️ by Vishavdip Vaidya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
