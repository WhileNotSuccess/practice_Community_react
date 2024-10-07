/* Nav.js */
import { React, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import searchIcon from "../img/search.jpg";
const Nav = () => {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearch = () => {}; /*  */

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
            value={searchInput}
            onChange={onChange}
          />
          <Link to="/search-result" state={{ searchInput: searchInput }}>
            <button className="search-icon">
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
