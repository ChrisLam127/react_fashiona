import React, { useContext, useEffect, useState, useRef } from "react";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import Product from "../components/Product";
import { ProductsContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct } = useContext(CartContext);
  const { id } = useParams();
  const [input, setInput] = useState(1);
  const [product, setProduct] = useState(null);
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [product3, setProduct3] = useState(null);
  const navigate = useNavigate();
  const imgRef = useRef(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    const product1 = products.find(
      (item) => Number(item.id) === Number(id) + 1
    );
    const product2 = products.find(
      (item) => Number(item.id) === Number(id) + 2
    );
    const product3 = products.find(
      (item) => Number(item.id) === Number(id) + 3
    );

    if (!product) {
      return navigate("/shop");
    }
    if (!product1) {
      return navigate("/shop");
    }
    if (!product2) {
      return navigate("/shop");
    }
    if (!product3) {
      return navigate("/shop");
    }
    setProduct(product);
    setProduct1(product1);
    setProduct2(product2);
    setProduct3(product3);
  }, [id, product, product1, product2, product3, products]);

  if (!product) {
    return null;
  }
  if (!product1) {
    return null;
  }
  if (!product2) {
    return null;
  }
  if (!product3) {
    return null;
  }
  // Filter products array to display only few Feature Product
  const featureProducts = products.filter((product, index) => index % 4 === 0);

  const { brand, desc, price, img, description } = product;

  const handleClick = (index) => {
    if (index === 0) {
      imgRef.current.src = product.img;
      navigate(`/products/${product.id}`);
    }
    if (index === 1) {
      imgRef.current.src = product1.img;
      navigate(`/products/${product1.id}`);
    }
    if (index === 2) {
      imgRef.current.src = product2.img;
      navigate(`/products/${product2.id}`);
    }
    if (index === 3) {
      imgRef.current.src = product3.img;
      navigate(`/products/${product3.id}`);
    }
  };

  return (
    <div>
      <PageHeader
        title="#It is always a Pleasure"
        desc="Do not forget to check our feature products below, and send us your suggestions regarding whatever"
      />

      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img ref={imgRef} src={img} width="100%" id="MainImg" alt="" />
          <div className="small-img-group">
            <div className="small-img-col" onClick={() => handleClick(0)}>
              <img src={img} width="100%" className="small-img" alt="" />
            </div>
            <div className="small-img-col" onClick={() => handleClick(1)}>
              <img
                src={product1.img}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col" onClick={() => handleClick(2)}>
              <img
                src={product2.img}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col" onClick={() => handleClick(3)}>
              <img
                src={product3.img}
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="single-prodetails">
          <h6>Home / {brand}</h6>
          <h4>{desc}</h4>
          <h2>${price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="normal" onClick={() => addProduct(product)}>
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>{description}</span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Designs</p>
        <div className="pro-container">
          {featureProducts.map((item) => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default SingleProduct;
