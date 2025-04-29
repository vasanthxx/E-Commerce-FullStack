import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Gadgets = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Vegetables"
        apiEndpoint="http://localhost:8080/api/products/category/vegetables"
      />
    </>
  );
};

export default Gadgets;
