import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../assets/images/5 years of my life avl .jpg";
import Image2 from "../assets/images/kainchi dham avl .jpg";
import Image3 from "../assets/images/nature_s reflection .jpg";
import Image4 from "../assets/images/mystical land Nepal avl .jpg";

function Slider() {
  const images = [Image1, Image2, Image3, Image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative h-96 ">
      {/* Slider */}

      {/* <div
        className="w-auto h-auto flex border-4 border-green-800 first-letter:flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-auto h-48 flex justify-center items-center border border-black"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-screen h-auto object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div> */}

      <div
        className="w-screen h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="px-6 w-screen h-full flex-shrink-0 flex justify-center items-center border border-black"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={goToPrevious}
        className="mx-6 cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className="mx-6 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}

export default Slider;
