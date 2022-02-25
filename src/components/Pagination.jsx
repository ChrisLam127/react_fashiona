import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <section id="pagination" className="section-p1">
      <Link to="/">1</Link>
      <Link to="/">2</Link>
      <Link to="/">
        <i className="fas fa-long-arrow-alt-right"></i>
      </Link>
    </section>
  );
};

export default Pagination;
