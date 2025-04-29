import React, { useContext } from "react";
import { FavouriteContext } from "./FavouriteContext";
import { CartContext } from "./CartContext";
import { FaCartPlus, FaTrash } from "react-icons/fa";
import "./favourite.css";

const Favourite = () => {
  const { favourites, removeFromFavourites } = useContext(FavouriteContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Favourite Items</h1>

      <div className="product-grid">
        {favourites.length > 0 ? (
          favourites.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
              <h2>{item.name}</h2>
              <p>₹{item.price.toFixed(2)}</p>
              <div className="flex-btn">
                <button
                  className="btn btn-cart"
                  onClick={() => {
                    addToCart(item);
                    alert(`${item.name} added to cart successfully!`);
                  }}
                >
                  <FaCartPlus /> Add to Cart
                </button>
                <button
                  className="btn btn-remove"
                  onClick={() => removeFromFavourites(item.id)}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No favourite items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favourite;
