import React, { useContext, useState } from "react";
import Product from "./Product";

import { ProductsContext } from "../context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Designs</p>
      <div className="pro-container">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
