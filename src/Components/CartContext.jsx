import React, { createContext, useState } from "react";

// Create contexts
export const CartContext = createContext();
export const FavouriteContext = createContext();

export const CartProvider = ({ children }) => {
  // 🛒 Cart state
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      alert("Item already in cart");
    }
  };

  // ❤️ Favourite state
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (product) => {
    const exists = favourites.find((item) => item.id === product.id);
    if (!exists) {
      setFavourites((prevFavs) => [...prevFavs, product]);
    } else {
      alert("Item already in favourites");
    }
  };

  const removeFromFavourites = (productId) => {
    setFavourites((prevFavs) =>
      prevFavs.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <FavouriteContext.Provider
        value={{ favourites, addToFavourites, removeFromFavourites }}
      >
        {children}
      </FavouriteContext.Provider>
    </CartContext.Provider>
  );
};
