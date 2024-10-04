/* Nav.js */
import { React, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import searchIcon from "../img/search.jpg";
const Nav = () => {
  const [SearchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearch = () => {
    console.log(SearchInput);
  };

  return (
    <div className="parent">
      <div className="header">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="rectangle">
          <input
            className="search-box"
            placeholder="내용을 입력하세요."
            value={SearchInput}
            onChange={onChange}
          />
          <Link to="/search-result">
            <button
              className="search-icon"
              onClick={() => {
                onSearch();
              }}
            >
              <img src={searchIcon} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default Nav;
