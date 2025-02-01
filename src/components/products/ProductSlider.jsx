import SliderSection from "./SliderSection";
import { Link } from "react-router-dom";
import Button from "../Button.jsx";

function ProductSlider() {
  return (
    <>
      <SliderSection title="Top Articles">
        <Link to="/more" className="flex justify-center my-5">
          <div className="cursor-pointer flex justify-center w-8/12 bg-teal-950">
            <Button text="View More" borderColor="green" />
          </div>
        </Link>
      </SliderSection>
      <SliderSection title="Trending Articles"></SliderSection>
      <SliderSection title="More From Artist"></SliderSection>
    </>
  );
}

export default ProductSlider;
