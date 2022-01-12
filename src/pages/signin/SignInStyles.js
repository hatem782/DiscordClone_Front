import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& h1": {
      color: "white",
      margin: "0px",
    },

    "& input": {
      margin: "20px 0px",
      width: "400px",
    },

    "& button,input": {
      transition: "all 0.2s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },

    "& a": {
      display: "block",
      color: "#5965F3",
      margin: "8px",
      fontSize: "18px",
      textDecoration: "none",
      position: "relative",
      transition: "all 0.2s",
      "&:hover": {
        transform: "scale(1.15)",
      },
    },
  },
}));
