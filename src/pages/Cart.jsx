import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import img1 from "../img/products/f1.jpg";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { products } = useContext(ProductsContext);

  const { itemCount, total, removeItem, cartItems, increase, decrease } =
    useContext(CartContext);
  const funcs = { decrease, increase, removeItem };
  return (
    <div>
      <PageHeader
        classNameName="about-heeader"
        title="#YOUR CART"
        desc="Please Proceed to make payment on your purchase..."
      />
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} {...funcs} />
          ))}
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tbody>
              <tr>
                <td>Number of Items</td>
                <td>{itemCount}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>${total}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
