import { useContext } from "react";

import { AuthContext } from "../../contexts/auth.context";

import Button from "../button/button.component";

import "./login.styles.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="sign-in-container">
      <h2>Sign in with Google</h2>

      <Button buttonType="google" type="button" onClick={login}>
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
