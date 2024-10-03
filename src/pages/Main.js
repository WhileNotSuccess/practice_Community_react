import React from "react";
import "../css/MainComp.css";

const Main = () => {
  return (
    <div className="container">
      <div className="board-tag">
        <div className="board-list"></div>
      </div>
      <div className="post-list"></div>
      <div className="user-info">
        <div className="user-login"></div>
        <div className="logout-btn"></div>
      </div>
    </div>
  );
};

export default Main;
