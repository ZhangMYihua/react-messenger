import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";
// // import { ReactComponent as Google } from "./google.png";
import Button from "../button/button.component";
import Google from "./google.png";
import "./login.styles.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <div className="sign-in-container">
      <h2>Sign in with Google</h2>

      <Button buttonType="google" type="button" onClick={login}>
        <img src={Google} alt="" width={35} />
        Sign In With Google
      </Button>
    </div>
  );
};

export default Login;
