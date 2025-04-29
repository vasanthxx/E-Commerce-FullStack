import React from "react";
import Navbar from "./Navbar";
import vedio from "./assets/video.mp4";
import "./home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Homepage = () => {


  function handleAlert(){
    alert("KEEP CONNECTED WITH US COMMING SOON...")
  }

  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="header">
          <video width="100%" autoPlay loop muted>
            <source src={vedio} type="video/mp4" />
          </video>
          <div className="absolute">
            <h1>Welcome to Our Store</h1>
            <Link to="/allproducts">
              <button>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section 1 */}
      <div className="hero1">
        <div className="subhero1">
          <h4>Look Sharp, Stay Smart.</h4>
          <h1>Dress Like a Leader. Upgrade Like a Pro</h1>
          <p>
            Style redefined. Tech upgraded. Shop the best in men’s fashion and
            electronics at Forgex!
          </p>
          <Link to="/mens">
            <button>Get Started</button>
          </Link>
        </div>
      </div>

      {/* Hero Section 2 */}
      <div id="hero2">
        <div className="container1">
          <h2>Welcome to Forgex</h2>
          <p>
            Welcome to Forgex, your go-to destination for premium fashion and
            cutting-edge electronics. Explore our exclusive collections
            featuring stylish apparel, must-have accessories, and the latest
            tech gadgets. Enjoy unbeatable discounts, including up to{" "}
            <span>50% off</span> and free shipping on orders over $50. Shop now
            and elevate your style with Forgex!
          </p>
        </div>
        <div className="container2"></div>
      </div>

      {/* Hero Section 3 */}
      <div id="hero3">
        <div className="container3"></div>
        <div className="container1">
          <h2>For Women Who Demand More.</h2>
          <p>
            Elevate your style with Forgex Women’s Collection, featuring elegant
            dresses, chic casual wear, and must-have accessories. From{" "}
            <span>timeless classics</span> to the latest trends, our collection
            is designed for sophistication and comfort. Shop now and redefine
            your wardrobe with premium fashion!
          </p>
        </div>
      </div>

      {/* Hero Section 5 - Tech Upgrade */}
      <div className="hero5">
        <div>
          <p>
            Featuring the latest smartphones, laptops, and smart gadgets at
            unbeatable prices!
          </p>
          <h1>Upgrade your tech game with Forgex Electronics</h1>
        </div>
      </div>

      {/* Hero Section 4 - Holiday Deals */}
      <div id="hero4">
        <div className="container44">
          <div className="innertext">
            <h4>Holiday Deals</h4>
            <h1>Up to 30% Off</h1>
            <h4>Select a Smartphone Brand</h4>
            <Link to="/phones">
            <button>Explore More</button>
          </Link>
          </div>
        </div>
        <div className="container55">
          <div className="innertext">
            <h4>Just In</h4>
            <h1>Take Your Sound Anywhere</h1>
            <h4>Top Headphone Brands</h4>
            <Link to="/gadgets">
            <button>Explore More</button>
          </Link>
          </div>
        </div>
      </div>

      {/* Hero Section 5 - Tech Upgrade */}
      <div className="hero6">
        <div>
          <p>Up to 50% OFF on fresh fruits, veggies, and daily essentials!</p>
          <h1>Fresh Groceries, Best Prices!</h1>
        </div>
      </div>

      <div id="hero7">
        <div className="grocery-main">
          <div className="box1">
            <div className="box-text">
              <h1>Beat the Heat with Refreshment!</h1>
              <h4>Chilled Soft Drinks!</h4>
            </div>
          </div>
          <div className="box2">
            <div className="small-box1">
              <div className="box-text2">
                <h1>Crunch, Munch & Enjoy!</h1>
                <h4>Up to 40% OFF on your favorite snacks</h4>
              </div>
            </div>
            <div className="small-box2">
              <div className="box-text3">
                <h1>
                  <span>100% Fresh</span> & Organic
                </h1>
                <h4>Up to 50% OFF on fresh fruits, veggies, dairy & more!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section 5 - Tech Upgrade */}
      <div className="hero8">
        <div className="hero8-text">
          <h1>Exclusive Free Cooking Tips for Our Customers</h1>

          <p>
            Shop now and enjoy exclusive discounts, free recipes, and expert
            cooking advice.
          </p>
          <button onClick={handleAlert}>Know More</button>
        </div>
      </div>

      <div id="hero9">
        <div className="food1"></div>
        <div className="food-text">
          <h1>Shop with Us & Elevate Your Cooking</h1>
          <p>
            Get everything you need for your kitchen at <span>ForgeX</span>.
            From premium ingredients to top-quality kitchen tools, we have
            everything to help you cook like a pro. Shop now and enjoy exclusive
            discounts, free recipes, and expert cooking advice.
          </p>
        </div>
        <div className="food-text2">
          <h1>"Exclusive Tips & Special Offers Just for You!"</h1>
          <p>
            As a valued customer, we provide exclusive cooking tips and hacks to
            help you refine your culinary skills. Subscribe to our newsletter
            for regular updates on new recipes, cooking trends, and special
            offers on kitchen essentials.
          </p>
        </div>
        <div className="food2"></div>
      </div>

      <div id="hero10">
        <div className="offer-img">
          <div className="offer-text">
            <h1>Flash Sale - Up to 50% OFF on trending products!</h1>
            <h2>New User Discount - Get 10% OFF on your first order! </h2>
            <h3>Free Shipping - On orders above $XX!</h3>
          </div>
        </div>
      </div>

      <div className="hero11">
        <div className="text11">
          <h1>Know More About Us</h1>
          <p>
            At ForgeX, we believe in delivering high-quality products with a
            seamless shopping experience. Our journey started with a simple
            goal—to make shopping easier, faster, and more enjoyable for our
            customers.
          </p>
          <h3>
            Join our community and stay updated with exclusive offers, new
            arrivals, and more!
          </h3>
          <h4>Subscribe to our newsletter for special discounts.</h4>
        </div>
      </div>

      <div className="hero12">
        <div className="news-letter-image">
          <div className="news">
            <div className="news-text">
              <h3>Sign Up For Newsletters</h3>
              <h4>
                Get E-mail updates about our latest shop and special offers.
              </h4>
            </div>
            <div className="input">
              <input type="email" placeholder="Enter your E-mail" />
              <button>Signup</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
