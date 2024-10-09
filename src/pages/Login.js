import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PathName from "./PathName";
import "../css/LoginComp.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const loginStart = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/user")
      .then((res) => {
        return res.data;
      })
      .then((rel) => {});
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginBtn = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <form className="login-board" onSubmit={(e) => loginStart(e)}>
      <span className="board-name">
        <PathName location={location.pathname} />
      </span>
      <div className="input-board">
        <input
          placeholder="e-mail"
          className="input-email"
          onChange={inputEmail}
        ></input>
        <input
          placeholder="password"
          className="input-email"
          onChange={inputPassword}
        ></input>
      </div>
      <button onClick={loginBtn}>로그인</button>
    </form>
  );
};

export default Login;
