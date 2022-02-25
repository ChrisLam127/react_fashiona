import React, { useContext } from "react";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";
import { isInCart } from "../Helpers";
import { CartContext } from "../context/CartContext";

const Product = (props) => {
  const { id, brand, desc, price, img, description } = props;
  const product = { id, brand, desc, price, img, description };
  const { cartItems, addProduct, increase } = useContext(CartContext);

  const navigate = useNavigate();
  const itemInCart = isInCart(product, cartItems);

  return (
    <div className="pro">
      <div className="pro-div" onClick={() => navigate(`/products/${id}`)}>
        <img src={img} alt="product" />
        <div className="des">
          <span>{brand}</span>
          <h5>{desc}</h5>
          <Rating />
          <h4>${price}</h4>
        </div>
      </div>
      {!itemInCart && (
        <span className="product-cart" onClick={() => addProduct(product)}>
          <i className="cart fas fa-shopping-cart"> ADD TO CART</i>
        </span>
      )}
      {itemInCart && (
        <span className="product-cart" onClick={() => increase(product)}>
          <i
            className="cart"
            style={{ backgroundColor: "white", fontWeight: "bold" }}
          >
            ADD MORE
          </i>
        </span>
      )}
    </div>
  );
};

export default Product;
