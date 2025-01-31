import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import About from "./components/About.jsx";
import Categories from "./components/Categories.jsx";
import MoreArticles from "./components/MoreArticles.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-col items-center overflow-x-hidden bg-black">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductGrid />
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
