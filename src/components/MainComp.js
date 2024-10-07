import React from "react";
import "../css/MainComp.css";

export const MainCompo = (props) => {
  return (
    <div className="line-change">
      <span>
        [{props.category}] {props.title} {props.date}
        <br />
      </span>
    </div>
  );
};

export const PostCompo = (props) => {
  return (
    <div className="line-change">
      <span>
        {props.category.board_name}
        <br />
      </span>
    </div>
  );
};
