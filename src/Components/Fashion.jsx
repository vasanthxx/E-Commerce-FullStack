import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./fashion.css";

const fashionCategories = [
  {
    name: "Men's Fashion",
    desc: "Latest Style, top brands!",
    path: "/mens",
    className: "men-img",
  },
  {
    name: "Women's Fashion",
    desc: "Trendy fits, widest selection!",
    path: "/womens",
    className: "women-img",
  },
  {
    name: "Kid's Fashion",
    desc: "Big styles for li'l ones!",
    path: "/kids",
    className: "kids-img",
  },
];

function Fashion() {
  return (
    <div>
      <Navbar />
      <section>
        {fashionCategories.map((category, index) => (
          <div className="main-container" key={index}>
            <div className={category.className}>
              <div className="text1">
                <h2>{category.name}</h2>
                <h5>{category.desc}</h5>
                <Link to={category.path} style={{ textDecoration: "none", color: "white" }}>
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

export default Fashion;
