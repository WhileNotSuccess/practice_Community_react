import React, { useState } from "react";
import SignInComp from "../components/SignInComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [nick_name, snick_name] = useState("");
  const [email, semail] = useState("");
  const [password, spassword] = useState("");
  const navigate = useNavigate();
  const SignPost = (e) => {
    e.preventDefault();
    const email_test = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i; //email 형식
    if (!email_test.test(email)) {
      //email 형식 대조
      //false
      alert("유효한 email형식으로 입력해주세요");
    } else {
      //true
      const form_data = {
        email: email,
        password: password,
        nick_name: nick_name,
      };
      axios
        .get(`http://localhost:3001/user`)
        .then((res) => {
          return res.data;
        })
        .then((rel) => {
          const judge = rel.map((user) => user.email === form_data.email); //배열 형식으로 true false 저장

          judge.includes(true) //true있는지 확인. 있을시 true 없을시 false
            ? alert("이미 등록된 email이 있습니다")
            : axios
                .post(`http://localhost:3001/user`, form_data)
                .then(alert("회원가입 완료"))
                .then(() => {
                  navigate("/login");
                });
        });

      spassword("");
      semail("");
    }
  };
  return (
    <div>
      <h4>회원가입</h4>
      <form onSubmit={(e) => SignPost(e)}>
        <input
          className="N.name"
          value={nick_name}
          onChange={(e) => snick_name(e.target.value)}
          placeholder="n.name"
        />
        <input
          className="E.mail"
          value={email}
          onChange={(e) => semail(e.target.value)}
          placeholder="email"
        />
        <input
          className="PW"
          value={password}
          onChange={(e) => spassword(e.target.value)}
          placeholder="password"
        />
        <button>입력완료</button>
      </form>
      <div onClick={() => navigate(`/`)}>취소</div>
    </div>
  );
};

export default SignIn;
