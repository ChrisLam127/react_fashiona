import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import Product from "./Product";
import { CartContext } from "../context/CartContext";

const HomeProduct1 = () => {
  const { products } = useContext(ProductsContext);
  const { cartItems, addProduct } = useContext(CartContext);

  const productItems = products.filter((product, index) => index < 8);
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

export default HomeProduct1;
