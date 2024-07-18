import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  function LogInUser() {
    loginWithRedirect();
  }

  useEffect(() => {
    LogInUser();
  });
};

export default Login;
