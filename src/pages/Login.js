import React from "react";
import { useLocation } from "react-router-dom";
import PathName from "./PathName";

const Login = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <PathName location={location.pathname} />
    </div>
  );
};

export default Login;
