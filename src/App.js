// import logo from './logo.svg';
import './App.css';
import Header from './components /Header';
import Hero from './components /Hero';
import ProductGrid from './components /ProductGrid';
import About from './components /About';
import Categories from './components /Categories';
import Footer from './components /Footer';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Hero />
      <ProductGrid />
      <About />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
