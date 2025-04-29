// Men.jsx
import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Men = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Men's"
        apiEndpoint="http://localhost:8080/api/products/category/mens" 
      />
    </>
  );
};

export default Men;
