import React from "react";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import BlogPost from "../components/BlogPost";
import blogData from "../blogData";
import Pagination from "../components/Pagination";

const Blog = () => {
  return (
    <div>
      <PageHeader
        className="blog-heeader"
        title="#read more"
        desc="Read all case studies about our products!"
      />
      <section id="blog">
        {blogData.map((blog) => (
          <BlogPost
            key={blog.id}
            img={blog.img}
            title={blog.title}
            desc={blog.desc}
            date={blog.date}
            id={blog.id}
          />
        ))}
      </section>

      <Pagination />

      <NewsLetter />
    </div>
  );
};

export default Blog;
