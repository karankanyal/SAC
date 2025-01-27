import Image1 from "../assets/images/5 years of my life avl .jpg";
import Image2 from "../assets/images/kainchi dham avl .jpg";
import Image3 from "../assets/images/nature_s reflection .jpg";
import Image4 from "../assets/images/mystical land Nepal avl .jpg";

function Categories() {
  const images = [Image1, Image2, Image3, Image4, Image1, Image2];

  const categories = [
    "Temple",
    "Oil",
    "Digital",
    "Acrylic",
    "Canvas",
    "Sketch",
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={images[index]}
            alt={category}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold">{category}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Categories;
