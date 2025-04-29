import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars} from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import logoLight from "./assets/logo1.png";
import logoDark from "./assets/logo2.png";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/600.css";
import "./navbar.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

 const isActive = (path) => location.pathname === path;

 const handleNavigationChange = (e) => {
  const selectedPath = e.target.value;
  if (selectedPath) {
    navigate(selectedPath);
  }
}; 

const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};


  return (
    <nav className="navbar">
  <div className="logo-container">
    <img
      src={isDarkMode ? logoDark : logoLight}
      alt="Logo"
      className="logo"
    />
  </div>

  <button className="icon-btn menu-toggle-btn" onClick={toggleMenu}>
    <FontAwesomeIcon icon={menuOpen ? faXmarkCircle : faBars} />
  </button>

  
  <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
    <li><Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link></li>
    <li><Link to="/fashion" className={isActive("/fashion") ? "active" : ""} onClick={() => setMenuOpen(false)}>Fashion</Link></li>
    <li><Link to="/electronics" className={isActive("/electronics") ? "active" : ""} onClick={() => setMenuOpen(false)}>Electronics</Link></li>
    <li><Link to="/groceries" className={isActive("/groceries") ? "active" : ""} onClick={() => setMenuOpen(false)}>Groceries</Link></li>
    <li><Link to="/dealsandoffers" className={isActive("/dealsandoffers") ? "active" : ""} onClick={() => setMenuOpen(false)}>Deals & Offers</Link></li>
  </ul>

  <div className="nav-select">
        <select onChange={handleNavigationChange} value={location.pathname}>
          <option value="/">Home</option>
          <option value="/fashion">Fashion</option>
          <option value="/mens">mens</option>
          <option value="/womens">Womens</option>
          <option value="/kids">Kids</option>
          <option value="/electronics">Electronics</option>
          <option value="/phones">Phones</option>
          <option value="/laptops">Laptops</option>
          <option value="/gadgets">Gadgets</option>
          <option value="/groceries">Groceries</option>
          <option value="/fruits">Fruits</option>
          <option value="/vegetables">Vegetables</option>
          <option value="/staples">Staples</option>   
          <option value="/dealsandoffers">Deals & Offers</option>   
        </select>
      </div>

  
  <div className="icon-buttons">
    <button className="icon-btn1">
      <Link to="/favourite" className="icon-btn1">
      <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '1.5rem' }} />
      </Link>
    </button>
    <Link to="/addtocart" className="icon-btn2">
      <FontAwesomeIcon icon={faBagShopping} />
    </Link>
  </div>

  <ThemeToggle />
</nav>

  );
};

export default Navbar;
