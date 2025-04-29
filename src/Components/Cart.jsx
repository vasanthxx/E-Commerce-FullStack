import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css"; // Import the CSS file
import Footer from "./Footer"; // Import the Footer component

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p className="cart-empty">Error: CartContext is not available.</p>;
  }

  const { cart } = cartContext;

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const discount = subtotal * 0.10; // 10% discount
  const tax = (subtotal - discount) * 0.10; // 10% tax after discount
  const total = subtotal - discount + tax;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty 🛒</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span className="price">${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          {/* Bill Summary */}
          <div className="bill-summary">
            <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
            <p><strong>Discount (10%):</strong> -${discount.toFixed(2)}</p>
            <p><strong>Tax (10%):</strong> +${tax.toFixed(2)}</p>
            <hr />
            <hr />
            <p className="total-price"><strong>Total:</strong> ${total.toFixed(2)}</p>
          </div>

          {/* Print Bill Button */}
          <button className="print-btn" onClick={() => window.print()}>
            Print Bill 🖨️
          </button>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Cart;
