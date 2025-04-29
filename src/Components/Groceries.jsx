import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./grocery.css";

const groceryCategories = [
  { name: "Fruits", desc: "Fresh and juicy seasonal fruits!", path: "/fruits", className: "fruits" },
  { name: "Vegetables", desc: "Green and healthy veggies!", path: "/vegetables", className: "vegetables" },
  { name: "Staples", desc: "Rice, pulses, spices and more!", path: "/staples", className: "staples" }
];

function Groceries() {
  return (
    <div>
      <Navbar />
      <section>
        {groceryCategories.map((category, index) => (
          <div className="main-container" key={index}>
            <div className={category.className}>
              <div className="text1">
                <h2>{category.name}</h2>
                <h5>{category.desc}</h5>
                <Link to={category.path}>
                  <button>Enter Store</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default Groceries;
