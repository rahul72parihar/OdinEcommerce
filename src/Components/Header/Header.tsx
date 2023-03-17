import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = React.useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 70) setSticky(true);
    else setSticky(false);
  });
  const [showSearchDiv, setShowSearchDiv] = React.useState(false);
  function handleSearchDiv() {
    setShowSearchDiv((prev) => !prev);
  }
  const [searchText, setSearchText] = React.useState("");
  function handleSearchText(e: any) {
    setSearchText(e.target.value);
  }
  function handleSearch() {
    setShowSearchDiv(false);
    setSearchText("");
  }
  function handleEnter(e: React.KeyboardEvent) {
    if (e.key !== "Enter") return;
    document.getElementById("search-button")?.click();
    handleSearch();
  }
  const count = 0;
  return (
    <div className={`header ${sticky ? "sticky" : ""}`}>
      <div className="left">
        <Link to="/home">
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
        <div className="header-products">
          <Link to="/products">Products</Link>
        </div>
        <div>
          <div className="searchIcon">
            <div onClick={handleSearchDiv}>
              <AiOutlineSearch />
            </div>
            {showSearchDiv && (
              <div className="searchDiv">
                <input
                  type="text"
                  onChange={handleSearchText}
                  onKeyDown={handleEnter}
                />
                <Link
                  to={{
                    pathname: `/search/${searchText}`,
                  }}
                >
                  <button id="search-button" onClick={handleSearch}>
                    Enter
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <AiOutlineHeart /> */}

        <div className="cart">
          <AiOutlineShoppingCart />
          <div className="cartScore">{count}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
