import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";
import MoreArticles from "./components/products/MoreArticles.jsx";
import Footer from "./components/Footer.jsx";
import ProductSlider from "./components/products/ProductSlider.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex max-w-screen-2xl flex-col items-center overflow-x-hidden bg-black">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductSlider />
                <About />
                <Categories />
              </>
            }
          />
          {/* More Articles Page */}
          <Route path="/more" element={<MoreArticles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
