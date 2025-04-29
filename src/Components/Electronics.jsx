import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./electronics.css"
import { Link } from "react-router-dom";

const categories = [
  { name: "Phones", desc: "Latest smartphones, best prices!", path: "/phones", className: "phones-img" },
  { name: "Laptops", desc: "Powerful laptops for work & play!", path: "/laptops", className: "laptops-img" },
  { name: "Gadgets", desc: "Top accessories for all devices!", path: "/gadgets", className: "accessories-img" }
];

function Electronics() {
  return (
    <div>
      <Navbar />
      <section>
        {categories.map((category, index) => (
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

export default Electronics;
