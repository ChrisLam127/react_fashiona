import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = (props) => {
  const {
    id,
    brand,
    price,
    img,
    desc,
    quantity,
    removeItem,
    increase,
    decrease,
  } = props;
  const product = { id, img, brand, desc };
  return (
    <tbody>
      <tr>
        <td>
          <button className="qunatity_button remove">
            <i
              className="far fa-times-circle"
              onClick={() => removeItem(product)}
            ></i>
          </button>
        </td>
        <td>
          <img src={img} alt="" />
        </td>
        <td>{desc}</td>
        <td>${price}</td>
        <td className="qunatity_change">
          <button className="qunatity_button increase">
            <i className="fas fa-plus" onClick={() => increase(product)}></i>
          </button>
          <p className="item-amount"> {quantity} </p>
          {quantity > 1 && (
            <button className="qunatity_button decrease">
              <i className="fas fa-minus" onClick={() => decrease(product)}></i>
            </button>
          )}
          {quantity === 1 && (
            <button className="qunatity_button remove">
              <i
                className="fas fa-trash"
                onClick={() => removeItem(product)}
              ></i>
            </button>
          )}
        </td>
        <td style={{ fontWeight: "bold" }}>${`${price * quantity}`}</td>
      </tr>
    </tbody>
  );
};

export default CartItem;
