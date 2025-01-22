import React from 'react';
import './ProductGrid.css';

function ProductGrid() {
  const products = Array(6).fill({
    title: 'Almora Stadium',
    date: 'December 02, 2024',
    artist: 'Artist Name',
    description: 'Description',
    imgSrc: 'path-to-image.jpg',
  });

  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.imgSrc} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.artist}</p>
          <p>{product.date}</p>
          <button>Add to cart</button>
          <button>Buy now</button>
        </div>
      ))}
      <button className="view-all">View All</button>
    </section>
  );
}

export default ProductGrid;
