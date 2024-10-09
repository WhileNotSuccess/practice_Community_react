import React, { useState } from "react";
import PathName from "./PathName";
import "../css/PostComp.css";
import { PostCompo, UserInfo } from "../components/MainComp";
import { useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [loginUser, setLoginUser] = useState([]);
  const [postCategory, setPostCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      setPostCategory(res.data);
    });
  }, []);

  return (
    <div className="post-board">
      <div className="board-tag">
        <div className="board-list">
          {postCategory.map((category) => (
            <PostCompo key={category.id} category={category} />
          ))}
        </div>
      </div>

      <div className="title-board">sss</div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Post;
