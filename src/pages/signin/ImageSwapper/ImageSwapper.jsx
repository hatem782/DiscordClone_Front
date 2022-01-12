import React, { useState, useEffect } from "react";

import { makeStyles } from "@mui/styles";
import ImgSelectDialog from "./ImgSelectDialog";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0,
    padding: 0,
    color: "white",
  },
  select_img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",

    "& img": {
      width: "150px",
      height: "150px",
      transform: "translateY(8px)",
      transition: "all 0.2s",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(8px) scale(1.1)",
      },
    },

    "& .left,.right": {
      width: 0,
      height: 0,
      borderTop: "40px solid transparent",
      borderBottom: "40px solid transparent",
      cursor: "pointer",
      transition: "all 0.1s",
      "&:hover": {
        transform: "scale(1.1)",
      },
      "&:active": {
        transform: "scale(0.95)",
      },
    },

    "& .left": {
      borderRight: "40px solid #5965F3",
    },

    "& .right": {
      borderLeft: "40px solid #5965F3",
    },
  },
}));

function ImageSwapper({ images, onChange }) {
  const css = useStyles();
  const [img, setImg] = useState(images[0]);
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setImg(images[num]);
    onChange(images[num]);
  }, [num]);

  const next = () => {
    console.log("next");
    if (num < images.length - 1) setNum(num + 1);
  };

  const prev = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const selectImg = (pos) => {
    setNum(pos);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h3 className={css.title}>Choose an avatar</h3>
      <div className={css.select_img}>
        <div className="left" onClick={prev} />
        <img src={img} onClick={handleOpen} />
        <div className="right" onClick={next} />
      </div>
      <ImgSelectDialog
        handleClose={handleClose}
        open={open}
        images={images}
        selectImg={selectImg}
      />
    </div>
  );
}

export default ImageSwapper;
