import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <h4>Trade-in-offer</h4>
      <h2>Super Value Deals</h2>
      <h1>On All Products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </section>
  );
};

export default Hero;
