import React from "react";
import "../css/MainComp.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { MainCompo, PostCompo } from "../components/MainComp";

const Main = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/list").then((res) => {
      setList(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      setCategory(res.data);
    });
  }, []);

  useEffect(() => {
    const today = new Date();
    setDate(
      today
        .toLocaleDateString("ko-kr", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\. /g, "/")
        .replace(/\.$/, "")
    );
  }, []);

  return (
    <div className="container">
      <div className="board-tag">
        <div className="board-list">
          {category.map((category) => (
            <PostCompo key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="post-list">
        {list.map((item) => (
          <MainCompo
            key={item.id}
            title={item.title}
            category={item.category}
            date={date}
          />
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
