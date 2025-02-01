import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard.jsx";
import Heading from "../Heading.jsx";
import Image1 from "../../assets/images/5 years of my life avl .jpg";
import Image2 from "../../assets/images/kainchi dham avl .jpg";
import Image3 from "../../assets/images/nature_s reflection .jpg";
import Image4 from "../../assets/images/mystical land Nepal avl .jpg";

const images = [Image1, Image2, Image3, Image4, Image1, Image2, Image3, Image4];

function SliderSection({ title, children }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: direction * 250, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-section">
      <Heading title={title} />
      <div className="relative w-full overflow-hidden my-5">
        {/* Left Button */}
        <button
          onClick={() => scroll(-1)}
          className="z-10 mx-6 cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 bg-teal-950 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-scroll scroll-smooth no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-none">
              <ProductCard image={image} />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll(1)}
          className="mx-6 cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 bg-teal-950 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default SliderSection;
