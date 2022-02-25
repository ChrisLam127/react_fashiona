import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ id, img, title, desc, date }) => {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <img src={img} alt="blog image3" />
      </div>
      <div className="blog-details">
        <h4>{title}</h4>
        <p>{desc}</p>
        <Link to={`/blog/${id}`}>CONTINUE READING</Link>
      </div>
      <h1>{date}</h1>
    </div>
  );
};

export default BlogPost;
