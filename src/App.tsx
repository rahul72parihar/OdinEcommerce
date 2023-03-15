import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Homepage/Home";
import Product from "./Components/Product/Product";
import Search from "./Components/Search/Search";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:toSearch" element={<Search />} />
          <Route path="/product/:productid" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
