import React from 'react';
import './Categories.css';

function Categories() {
  const categories = ['Temple', 'Oil', 'Digital', 'Acrylic', 'Canvas', 'Sketch'];

  return (
    <section className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <h3>{category}</h3>
          <img src={`path-to-${category.toLowerCase()}-image.jpg`} alt={category} />
        </div>
      ))}
    </section>
  );
}

export default Categories;
