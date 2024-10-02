import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="main-search"></div>
      <div className="auto-layout"></div>
      <div className="search-btn">
        <img
          src="http://localhost:3000/searchicon.png"
          className="search-img"
        ></img>
      </div>
      <div className="banner"></div>
      <div className="board-tag">
        <div className="board-list"></div>
      </div>
      <div className="user-info">
        <div className="user-login"></div>
        <div className="logout-btn"></div>
      </div>
      <div className="post-list"></div>
    </div>
  );
};

export default Main;
