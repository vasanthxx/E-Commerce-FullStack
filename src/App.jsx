import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Mens from "./Components/Mens";
import Laptop from "./Components/Laptop";
import Phones from "./Components/Phones";
import Gadgets from "./Components/Gadgets";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import CartPage from "./Components/CartPage"; 
import Fashion from "./Components/Fashion";
import Groceries from "./Components/Groceries";
import Electronics from "./Components/Electronics";
import Recepie from "./Components/Recepie";
import Error from "./Components/Error";
import Dealsandoffers from "./Components/Dealsandoffers";
import { CartProvider } from "./Components/CartContext"; 
import Fruits from "./Components/Fruits";
import Vegetables from "./Components/Vegetables";
import Stables from "./Components/Stables";
import Favourite from "./Components/Favourite";
import "./Components/app.css"; 
import { FavouriteProvider } from "./Components/FavouriteContext"; 
import AllProducts from "./Components/AllProducts";

const App = () => {
  return (
    <FavouriteProvider>
      <CartProvider>
        {" "}
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/addtocart" element={<CartPage />} /> 
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/laptops" element={<Laptop />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/gadgets" element={<Gadgets />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/staples" element={<Stables />} />
            <Route path="/recepie" element={<Recepie />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/dealsandoffers" element={<Dealsandoffers />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </FavouriteProvider>
  );
};
export default App;
