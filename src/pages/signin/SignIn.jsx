import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ImageSwapper from "./ImageSwapper/ImageSwapper";
import { useStyles } from "./SignInStyles";
import { useHistory, Link } from "react-router-dom";
import { data } from "../../assets/images/AvatarImages";
import { signIn } from "../../apis/user.api";
function SignIn() {
  const [user, setUser] = useState({
    login: "",
    password: "",
    image: "",
    name: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImgChange = (img) => {
    setUser({ ...user, image: img });
  };

  const handleSubmit = async (e) => {
    const existUser = await signIn(user);
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
      <div>
        <h1>Wellcome To Chat</h1>
        <ImageSwapper onChange={handleImgChange} images={data} />
        <Input onChange={handleChange} name="name" placeholder="User Name" />
        <Input onChange={handleChange} name="login" placeholder="User Login" />
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="User Password"
        />
        <Button onClick={handleSubmit}>Create Account</Button>
        <Link to="/login">Already have Account ?</Link>
      </div>
    </div>
  );
}

export default SignIn;
