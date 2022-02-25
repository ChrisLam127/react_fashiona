import React, { createContext, useState } from "react";
import { data } from "../data";

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState(data);

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
