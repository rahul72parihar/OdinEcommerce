import React from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = React.useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 70) setSticky(true);
    else setSticky(false);
  });
  const count = 0;
  return (
    <div className={`header ${sticky ? "sticky" : ""}`}>
      <div className="left">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="/about">
          <ul>About</ul>
        </Link>
        <Link to="/products">
          <ul>Products</ul>
        </Link>
      </div>
      <Link to="/">
        <div className="center">RPSTORE</div>
      </Link>
      <div className="right">
        <div>
          <div className="searchIcon">
            <AiOutlineSearch />
          </div>
        </div>
        <AiOutlineHeart />
        <div className="cart">
          <AiOutlineShoppingCart />
          <div className="cartScore">{count}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
