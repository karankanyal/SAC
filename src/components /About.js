import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-card">
        <h2>Who we are</h2>
        <p>Lorem ipsum dolor sit amet consectetur...</p>
        <a href="#read-more">See more...</a>
      </div>
      <div className="about-card">
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur...</p>
        <a href="#read-more">See more...</a>
      </div>
      <div className="about-card">
        <h2>How do we work</h2>
        <p>Lorem ipsum dolor sit amet consectetur...</p>
        <a href="#read-more">See more...</a>
      </div>
    </section>
  );
}

export default About;
