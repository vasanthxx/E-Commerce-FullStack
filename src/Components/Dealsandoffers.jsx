import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import dealData from './data9.json';
import './deals.css';
import { FaTag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DealsAndOffers = () => {
  return (
    <div>
      <Navbar />

      <div className="page-content">

        <div className="deals-hero">
          <h1><FaTag /> Mega Deals & Exclusive Offers!</h1>
          <p>Grab the best discounts before they're gone!</p>
        </div>

        <div className="deals-container">
          {dealData.length > 0 ? (
            dealData.map((deal) => (
              <div key={deal.id} className="deal-card">
                <img src={deal.image} alt={deal.title} className="deal-image" />
                <div className="deal-info">
                  <h2>{deal.title}</h2>
                  <p>{deal.description}</p>
                  <Link to="/allproducts" style={{ textDecoration: "none", color: "white" }}>
                    <button className="deal-button">Shop Now</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-deals">No deals available at the moment!</p>
          )}
        </div>

        <div className="deals-hero">
          <h1>⏳ Hurry, the Best Deals Won’t Last Forever! 🔥</h1>
          <p>Snag the Hottest Offers Before They're Gone!</p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default DealsAndOffers;
