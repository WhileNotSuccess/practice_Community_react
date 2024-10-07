import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PathName = (props) => {
  console.log(props.location);
  switch (props.location) {
    case "/login":
      return "[로그인]";
    case "/":
      return "[자유게시판]";
  }

  return <div>{props.location}</div>;
};

export default PathName;
