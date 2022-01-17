import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useStyles } from "./chatStyles";
import Loading from "../../components/Loading/Loading";
import { getUser } from "../../apis/user.api";
function Chat() {
  const css = useStyles();
  const [user, setUser] = useState(null);
  const [userSection, setUserSection] = useState(true);

  const getUserAndSet = async () => {
    const us = await getUser();
    if (us.user) {
      setUser(us.user);
      console.log(us.user);
    }
  };

  const open_close_userSection = () => {
    setUserSection(!userSection);
  };

  useEffect(() => {
    getUserAndSet();
  }, []);

  return (
    <div className={css.chat}>
      {!user ? (
        <Loading />
      ) : (
        <>
          <div className={css.memSection}></div>
          <div className={`${css.mesSection} ${!userSection && css.fullwidth}`}>
            <div className="navbar">
              <div className="secUser">
                <img src={user.image} /> <h2>Person Name and Image</h2>
              </div>

              <IconButton onClick={open_close_userSection}>
                {userSection ? (
                  <ArrowForwardIosIcon fontSize="large" />
                ) : (
                  <ArrowBackIosNewIcon fontSize="large" />
                )}
              </IconButton>
            </div>
            <div className="messages"></div>
            <div className="textfield">
              <Input />
              <Button className="upload">
                <AddPhotoAlternateIcon />
              </Button>
              <Button>Send</Button>
            </div>
          </div>
          <div className={`${css.useSection} ${!userSection && css.hide}`}>
            <img src={user.image} />
            <h2>{user.name}</h2>
            <Button>Add Friend</Button>
            <Button>Create Room</Button>
            <Button>Join Room</Button>
            <Button>Edit My Profile</Button>
            <Button>Logout</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Chat;
