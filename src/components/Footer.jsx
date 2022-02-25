import React from "react";
import { Link } from "react-router-dom";
import app from "../img/pay/app.jpg";
import play from "../img/pay/play.jpg";
import pay from "../img/pay/pay.png";

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <Link to="/" className="logo-link">
          <h1 className="logo">FaShiona</h1>
        </Link>
        <h4>Contact</h4>
        <p>
          <strong>Address</strong>: 574 Jacob Street Pretoria
        </p>
        <p>
          <strong>Phone</strong>: +27 81 743 9255
        </p>
        <p>
          <strong>Hours</strong>: 09h00 to 18h00, Monday - Saturday
        </p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <Link to="/">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <Link to="/">About Us</Link>
        <Link to="/">Delivery Informations</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">Terms & Conditions</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="col">
        <h4>MyAccount</h4>
        <Link to="/">Sign In</Link>
        <Link to="/">View Cart</Link>
        <Link to="/">My Whishlist</Link>
        <Link to="/">Track My order</Link>
        <Link to="/">Help</Link>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={app} alt="" />
          <img src={play} alt="" />
        </div>
        <p>Secure Payment Gateaways</p>
        <img src={pay} alt="" />
      </div>
      <div className="copyright">
        <p>&copy; 2022, Lambo Digital Web Development</p>
      </div>
    </footer>
  );
};

export default Footer;
