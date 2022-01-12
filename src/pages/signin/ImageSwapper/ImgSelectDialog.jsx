import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: "20px",
  },
  title: {
    position: "relativ",
    textAlign: "center",
    fontSize: "1.5em",
    backgroundColor: "#2F3136",
    color: "white",
  },
  content: {
    backgroundColor: "#35363c",
    "&::-webkit-scrollbar": {
      backgroundColor: "#35363c00",
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "white",
      borderRadius: "500px",
    },
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  img: {
    width: "30%",
    margin: "10px 0px",
    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  closebtn: {
    position: "absolute",
    transform: "scale(1.5)",
    cursor: "pointer",
    right: "20px",
    top: "20px",
  },
}));

const ImgSelectDialog = (props) => {
  const { open, handleClose, images, selectImg } = props;
  const css = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
        className={css.dialog}
      >
        <DialogTitle className={css.title}>
          <span>Select Your Avatar Image</span>
          <CloseIcon className={css.closebtn} onClick={handleClose} />
        </DialogTitle>

        <DialogContent dividers className={css.content}>
          <div className={css.images}>
            {images.map((img, key) => {
              return (
                <img
                  className={css.img}
                  key={key}
                  src={img}
                  onClick={() => selectImg(key)}
                />
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImgSelectDialog;
