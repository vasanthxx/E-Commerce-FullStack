// Women.jsx
import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Women = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Women's"
        apiEndpoint="http://localhost:8080/api/products/category/womens" 
      />
    </>
  );
};

export default Women;
