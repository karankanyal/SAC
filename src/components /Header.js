import React from "react";
import "./Header.css";
import { FaInstagram, FaWhatsapp, FaFacebook, FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header"> 
      <div className="header-top"> 
        <div className="logo">
          <img
            src="/images/sac2.svg" 
            alt="Shilpsagar Logo" 
            className="logo-image" 
          /> 
        </div>
        <div class="logo abc" > <h2 className="tagline">The art of becoming, not being...</h2> </div>
        <div class="logo" ></div>
      </div>
      <nav className="navbar">
        <div ></div>
        <ul className="nav-links">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="#" title="Instagram">
            <FaInstagram />
          </a>
          <a href="#" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" title="Facebook">
            <FaFacebook />
          </a>
          <a href="#" title="Phone">
            <FaPhone />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
