import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Homepage/Home";
import Product from "./Components/Product/Product";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Search from "./Components/Search/Search";
import Signup from "./Components/Signup/Signup";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <div className="app">
      <UserAuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="products"
              element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route
              path="search/:toSearch"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="product/:productid"
              element={
                <ProtectedRoute>
                  <SingleProduct />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
