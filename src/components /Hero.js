import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="carousel">
        <img src="/home/lenovo/Desktop/UI_UX/hero.png" alt="Almora" />
        <h1>Almora</h1>
        <div className="carousel-controls">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
