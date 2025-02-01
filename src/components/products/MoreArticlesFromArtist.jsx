import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Image1 from "../../assets/images/5 years of my life avl .jpg";
import Image2 from "../../assets/images/kainchi dham avl .jpg";
import Image3 from "../../assets/images/nature_s reflection .jpg";
import Image4 from "../../assets/images/mystical land Nepal avl .jpg";

function MoreArticlesFromArtist() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
  ];

  return (
    <>
      <h1 className="w-full bg-gray-800 text-2xl font-bold p-1">
        More Articles
      </h1>
      <div className="w-full m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <ProductCard image={image} key={index} />
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="flex justify-center w-8/12 mb-8">
        <Link to="/">
          <button className="px-4 py-2 bg-teal-950 text-white rounded">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
}

export default MoreArticlesFromArtist;
