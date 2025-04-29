import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Laptops = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Laptops"
        apiEndpoint="http://localhost:8080/api/products/category/laptops"
      />
    </>
  );
};

export default Laptops;
