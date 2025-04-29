import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

const Kids = () => {
  return (
    <>
      <Navbar />
      <ProductList
        category="Kids'"
        apiEndpoint="http://localhost:8080/api/products/category/kids"
      />
    </>
  );
};

export default Kids;
