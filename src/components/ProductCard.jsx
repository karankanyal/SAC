import React from "react";
import { FaHeart, FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";

function ProductCard({ image }) {
  return (
    <div className="max-w-2xl flex flex-col flex-shrink rounded-lg overflow-hidden shadow-lg bg-black border border-slate-300">
      {/* Image section */}
      <div className="relative">
        <img
          src={image} // Replace with your image path
          alt="Image"
          className="w-full h-48 object-cover"
        />

        {/* Icon (heart) */}
        <a href="#like" className="absolute top-4 right-4 text-gray-300">
          <FaHeart size={24} />
        </a>
      </div>

      <div className="flex flex-col p-4">
        {/* Title and Date */}
        <h3 className="text-lg font-semibold text-white">Almora Stadium</h3>

        {/* Artist section */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 mt-2">@Artist</p>
          <p className="text-sm text-gray-400">December 02, 2024</p>
        </div>

        {/* Description and Read more link*/}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 mt-1">Description</p>
          <a
            href="#readmore"
            className="text-blue-600 text-sm mt-2 inline-block"
          >
            Read more...
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2 justify-between items-center mt-4 w-full">
          <Button
            bgColor="yellow"
            textColor="white"
            icon={FaShoppingCart}
            iconSize="16"
            text="Add to Cart"
          />
          <Button
            bgColor="green"
            textColor="white"
            icon={FaBolt}
            iconSize="16"
            text="Buy now"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
