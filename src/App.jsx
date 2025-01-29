import "./App.css";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";
// import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden bg-black">
        <Slider />
        <ProductGrid />
        <About />
        <Categories />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
