import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/all.css";
import ProductsContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <Router>
    <ProductsContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductsContextProvider>
  </Router>,
  document.getElementById("root")
);
