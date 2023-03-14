import "./Header.css";
// import { useContext } from "react";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const count = 0;
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="/about">
          <ul>About</ul>
        </Link>
        <Link to="/category">
          <ul>Category</ul>
        </Link>
      </div>
      <Link to="/">
        <div className="center">RPSTORE</div>
      </Link>
      <div className="right">
        <AiOutlineSearch />
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
