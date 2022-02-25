import React from "react";

const PageHeader = (props) => {
  const { title, desc, className } = props;
  return (
    <section id="page-header" className={className}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  );
};

export default PageHeader;
