import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Home from "./Components/Homepage/Home";
import Product from "./Components/Product/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
