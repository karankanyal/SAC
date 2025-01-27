import ProductCard from "./ProductCard";
import Image1 from "../assets/images/5 years of my life avl .jpg";
import Image2 from "../assets/images/kainchi dham avl .jpg";
import Image3 from "../assets/images/nature_s reflection .jpg";
import Image4 from "../assets/images/mystical land Nepal avl .jpg";

function ProductGrid() {
  const images = [
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
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <ProductCard image={image} key={index} />
      ))}
    </div>
  );
}

export default ProductGrid;
