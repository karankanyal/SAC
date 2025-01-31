import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Button from "./Button";
import Image1 from "../assets/images/5 years of my life avl .jpg";
import Image2 from "../assets/images/kainchi dham avl .jpg";
import Image3 from "../assets/images/nature_s reflection .jpg";
import Image4 from "../assets/images/mystical land Nepal avl .jpg";

function ProductGrid() {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <>
      <h1 className="w-full bg-gray-800 text-2xl font-bold p-1">
        Top Articles
      </h1>
      <div className="w-full m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <ProductCard image={image} key={index} />
        ))}
      </div>

      {/* "View More" Button Navigates to /more */}
      <div className="cursor-pointer flex justify-center w-8/12 bg-teal-950 mb-8">
        <Link to="/more">
          <Button text="View More" borderColor="green" />
        </Link>
      </div>
    </>
  );
}

export default ProductGrid;
