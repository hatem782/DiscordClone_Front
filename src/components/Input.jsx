import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  inputStyles: {
    border: "none",
    outline: "none",
    padding: "15px 20px",
    fontSize: "20px",
    display: "block",
    "&:focus": {
      //backgroundColor: "#E8F0FE",
    },
  },
}));

function Input({ type, name, value, onChange, placeholder }) {
  const cs = useStyles();
  return (
    <input
      className={cs.inputStyles}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
