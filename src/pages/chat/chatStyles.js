import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  chat: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100%",
  },
  hide: {
    display: "none",
  },
  fullwidth: {
    width: "77% !important",
  },
  useSection: {
    width: "23%",
    height: "100%",
    borderLeft: "solid 1px grey",
    backgroundColor: "#2F3136",
    padding: "30px 10px 10px 10px",
    "& img": {
      height: "150px",
      width: "150px",
      display: "block",
      margin: " auto",
      borderRadius: "500px",
    },
    "& h2": {
      color: "white",
      textTransform: "capitalize",
      margin: "0px",
      padding: "15px 0px 0px 0px",
    },
    "& button": {
      margin: "12px 0px",
    },
  },
  memSection: {
    width: "23%",
    height: "100%",
    borderRight: "solid 1px grey",
    backgroundColor: "#2F3136",
    padding: "40px 10px 10px 10px",
  },
  mesSection: {
    width: "54%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& .navbar": {
      height: "65px",
      backgroundColor: "#2F3136",
      borderBottom: "solid 1px grey",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 10px",
      color: "white",
      "& button": {
        color: "white",
        backgroundColor: "#5965F3",
      },
      "& .secUser": {
        display: "flex",
        alignItems: "center",
      },
      "& h2": {
        margin: "0px",
      },
      "& img": {
        height: "50px",
        marginRight: "10px",
      },
    },

    "& .messages": {
      height: "80%",
    },

    "& .textfield": {
      display: "flex",
      "& button": {
        width: "15%",
        "&:active": {
          transform: "scale(1)",
        },
      },
      "& .upload": {
        width: "7%",
        backgroundColor: "white",
        padding: "0px",
        color: "#5965F3",
        "& *": {
          transform: "scale(1.15)",
        },
      },
      "& input": {
        width: "85%",
      },
    },
  },
}));
