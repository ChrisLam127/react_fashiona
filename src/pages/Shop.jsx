import React, { useContext } from "react";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import Product from "../components/Product";
import { ProductsContext } from "../context/ProductContext";
import Pagination from "../components/Pagination";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <PageHeader
        title="PRODUCT RANGE"
        desc="Save more with coupons & up to 70% off!"
      />
      <section id="product1" className="section-p1">
        <h2>Products Collection</h2>
        <p>Full Collection of our New and Modern Designs</p>
        <div className="pro-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Pagination />
      <NewsLetter />
    </div>
  );
};

export default Shop;
