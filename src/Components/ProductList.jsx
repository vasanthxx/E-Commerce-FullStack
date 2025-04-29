import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { FavouriteContext } from "./FavouriteContext";
import "./ProductList.css"
const ProductList = ({ category, apiEndpoint }) => {
  const { addToCart } = useContext(CartContext);
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Received data is not an array:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [apiEndpoint]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.productName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption === "price-asc") return a.price - b.price;
        if (sortOption === "price-desc") return b.price - a.price;
        if (sortOption === "name") return a.productName.localeCompare(b.productName);
        return 0;
      });
  }, [products, searchTerm, sortOption]);

  const isFavourite = (productId) =>
    favourites.some((item) => item.id === productId);

  return (
    <div className="container">

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.productImage || "default-image.jpg"}
                alt={product.productName || "Product Image"}
                className="product-image"
              />
              <h2>{product.productName || "No Name Available"}</h2>
              <p>${product.price?.toFixed(2)}</p>
              <div className="flex-btn">
                <button
                  className="btn btn-cart"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.productName,  
                      price: product.price
                    });
                    alert(`${product.productName} added to cart!`);
                  }}


                >
                  <FaCartPlus /> Cart
                </button>
                <button
                  className="btn btn-fav"
                  onClick={() => {
                    isFavourite(product.id)
                      ? removeFromFavourites(product.id)
                      : addToFavourites({
                        id: product.id,
                        name: product.productName,     
                        price: product.price,
                        image: product.productImage    
                      });
                  }}
                >
                  {isFavourite(product.id) ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
