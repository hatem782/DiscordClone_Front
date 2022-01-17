import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { login } from "../../apis/user.api";
import { useStyles } from "./LoginStyles";
import { useHistory, Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({ login: "", password: "" });
  const history = useHistory();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const existUser = await login(user);
    if (existUser.user) {
      history.push("/chat");
    } else {
      alert(existUser.msg);
    }
    console.log(existUser);
  };

  const cs = useStyles();
  return (
    <div className={cs.main}>
      <div className="containerLogin">
        <h1>Wellcome To Chat</h1>
        <Input onChange={handleChange} name="login" placeholder="User Login" />
        <Input
          onChange={handleChange}
          name="password"
          placeholder="User Password"
          type="password"
        />
        <Button onClick={handleSubmit}>Join Now</Button>
        <Link to="/signin">Create Account ?</Link>
      </div>
    </div>
  );
}

export default Login;
