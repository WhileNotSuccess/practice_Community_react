import React from "react";
import "../css/MainComp.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainCompo from "../components/MainComp";

const Main = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/list").then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="board-tag">
        <div className="board-list"></div>
      </div>
      <div className="post-list">
        {list.map((item) => (
          <MainCompo key={item.id} title={item.title} />
        ))}
      </div>
      <div className="user-info">
        <div className="user-login"></div>
        <div className="logout-btn"></div>
      </div>
    </div>
  );
};

export default Main;
