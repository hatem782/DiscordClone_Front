import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    border: "none",
    outline: "none",
    padding: "15px",
    fontSize: "20px",
    display: "block",
    width: "100%",
    color: "white",

    backgroundColor: "#5965F3",
    cursor: "pointer",
    transition: "all 0.2s",
    "&:active": {
      transform: "scale(0.95)",
    },
  },
}));

function Button({ children, onClick }) {
  const cs = useStyles();
  return (
    <button className={cs.buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
