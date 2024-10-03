import React from "react";
import "../css/MainComp.css";

const MainCompo = (props) => {
  console.log(props.title);
  return (
    <div className="line-change">
      <span>
        {props.title}
        <br />
      </span>
    </div>
  );
};

export default MainCompo;
