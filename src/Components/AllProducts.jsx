import React from 'react';
import Navbar from './Navbar';  
import ProductList from './ProductList';  
import Footer from './Footer';  

const AllProducts = () => {
  return (
    <>
      <Navbar />
      
      <ProductList
        category="Men's Fashion"
        apiEndpoint="http://localhost:8080/api/products"
      />
      <Footer />
    </>
  );
};

export default AllProducts;
