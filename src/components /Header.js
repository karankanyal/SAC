import React from 'react';
import './Header.css'; // Import styles

function Header() {
  return (
    <header className="header">
      <div className="logo">Artistry in Every Detail</div>
      <nav>
        <a href="#our-story">Our Story</a>
        <a href="#shop">Shop</a>
        <a href="#categories">Categories</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact us</a>
      </nav>
      <div className="social-icons">
        {/* Add social icons here */}
        <i className="icon-facebook"></i>
        <i className="icon-twitter"></i>
      </div>
    </header>
  );
}

export default Header;
