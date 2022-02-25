import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
      </Link>
      {itemCount > 0 ? <span className="quantity">{itemCount}</span> : null}
    </>
  );
};

export default Cart;
