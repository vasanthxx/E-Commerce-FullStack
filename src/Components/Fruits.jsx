import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Gadgets = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Fruits"
        apiEndpoint="http://localhost:8080/api/products/category/fruits"
      />
    </>
  );
};

export default Gadgets;
