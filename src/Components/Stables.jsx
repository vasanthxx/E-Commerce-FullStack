import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Stables = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Staples"
        apiEndpoint="http://localhost:8080/api/products/category/staples"
      />
    </>
  );
};

export default Stables;
