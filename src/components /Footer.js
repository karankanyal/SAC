import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Contact us</h4>
        <input type="email" placeholder="Enter your email address" />
        <button>Submit</button>
      </div>
      <div className="social-icons">
        <i className="icon-facebook"></i>
        <i className="icon-twitter"></i>
      </div>
    </footer>
  );
}

export default Footer;
