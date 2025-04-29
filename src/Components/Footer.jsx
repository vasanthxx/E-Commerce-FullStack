import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="main">
          <div className="contact-text">
            <h4>Contact</h4>
            <p>Address: ForgeX Private Limited </p>
            <p>TelePhone: 044-45678967</p>
            <p>Chennai-600024</p>
            <h4>Follow Us</h4>
            <div className="icon">
              <FaFacebook />
              <FaSquareXTwitter />
              <BiLogoInstagramAlt />
              <FaYoutube />
            </div>
          </div>
          <div className="about-text">
            <h4>About</h4>
            <p>Contact-Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="help-text">
            <h4>Help</h4>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
          </div>
          <div className="consumer-text">
            <h4>Consumer Policy</h4>
            <p>Security</p>
            <p>Sitemap</p>
            <p>Terms Of Us</p>
            <p>EPR Compliance</p>
          </div>
          <div className="installapp-text">
            <h4>Installer</h4>
            <p>From App Store & Google Play</p>
            <div className="icons2">
              <IoLogoAppleAppstore />
              <FaGooglePlay />
            </div>
            <p>Payments</p>
            <div className="pay-icon">
              <FaAmazonPay />
              <FaApplePay />
              <FaGooglePay />
              <SiPaytm />
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <p>
            © {new Date().getFullYear()} ForgeX Private Limited. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
