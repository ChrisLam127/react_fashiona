import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: cartFromStorage,
  ...sumItems(cartFromStorage),
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addProduct = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const increase = (product) => {
    dispatch({ type: "INCREASE", payload: product });
  };

  const decrease = (product) => {
    dispatch({ type: "DECREASE", payload: product });
  };

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
