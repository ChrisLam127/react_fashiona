import React, { useState } from "react";

const NewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState("");
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up for News letter</h4>
        <p>
          Get E-mail updates about our latest shop and{" "}
          <span>special offers</span>.
        </p>
      </div>
      <div className="form">
        <input
          type="text "
          placeholder="Your Email"
          value={newsLetter}
          onChange={(e) => setNewsLetter(e.target.value)}
        />
        <button type="submit" className="normal">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
