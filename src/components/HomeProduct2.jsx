import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import Product from "./Product";

const HomeProduct2 = () => {
  const { products } = useContext(ProductsContext);

  const productItems = products.filter((product, index) => index > 7);
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Designs</p>
      <div className="pro-container">
        {productItems.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default HomeProduct2;
