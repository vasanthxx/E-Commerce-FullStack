import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Phones = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Phones"
        apiEndpoint="http://localhost:8080/api/products/category/phones"
      />
    </>
  );
};

export default Phones;
