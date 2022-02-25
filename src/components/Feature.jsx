import React from "react";
import img1 from "../img/features/f1.png";
import img2 from "../img/features/f2.png";
import img3 from "../img/features/f3.png";
import img4 from "../img/features/f4.png";
import img5 from "../img/features/f5.png";
import img6 from "../img/features/f6.png";

const Feature = () => {
  return (
    <section id="feature" className="section-p1">
      <div className="fe-box">
        <img src={img1} alt="" />
        <h6>Free Shipping</h6>
      </div>
      <div className="fe-box">
        <img src={img2} alt="" />
        <h6>Online Order</h6>
      </div>
      <div className="fe-box">
        <img src={img3} alt="" />
        <h6>Save Money</h6>
      </div>
      <div className="fe-box">
        <img src={img4} alt="" />
        <h6>Promotions</h6>
      </div>
      <div className="fe-box">
        <img src={img5} alt="" />
        <h6>Happy Sell</h6>
      </div>
      <div className="fe-box">
        <img src={img6} alt="" />
        <h6>24/7 Support</h6>
      </div>
    </section>
  );
};

export default Feature;
