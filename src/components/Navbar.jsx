import React from "react";
import logo from "../img/E-STORE.png";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <section id="header">
      <Link to="/" className="logo-link">
        <h1 className="logo">FaShiona</h1>
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Cart />
          </li>
          <Link to="/" id="close">
            <i className="far fa-times"></i>
          </Link>
        </ul>
      </div>
      <div id="mobile">
        <Cart />
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
};

export default Navbar;
