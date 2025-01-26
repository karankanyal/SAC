import React from "react";
import { FaHeart } from "react-icons/fa";

function ProductCard({ image, key }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image section */}
      <div className="relative">
        <img
          src={image} // Replace with your image path
          key={key}
          alt="Image"
          className="w-full h-48 object-cover"
        />
        {/* Icon (heart) */}
        <a href="#like" className="absolute top-4 right-4 text-gray-300">
          <FaHeart size={24} />
        </a>
      </div>

      {/* Details section */}
      <div className="p-4">
        {/* Title and Date */}
        <h3 className="text-lg font-semibold text-black">Almora Stadium</h3>
        <p className="text-sm text-gray-400">December 02, 2024</p>

        {/* Artist section */}
        <p className="text-sm text-gray-600 mt-2">@Artist</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-1">Description</p>

        {/* Read more link */}
        <a href="#readmore" className="text-blue-600 text-sm mt-2 inline-block">
          Read more...
        </a>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
            Add to cart
          </button>
          <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
