import axios from "axios";
//getuser

const Auth = () => {
  return localStorage.getItem("userId");
};

export const login = async (data) => {
  try {
    const resp = await axios.post("http://localhost:8080/api/user/login", {
      ...data,
    });
    localStorage.setItem("userId", resp.data.user._id);
    return resp.data;
  } catch (err) {
    // Handle Error Here
    //console.log(err.response.data);
    return err.response.data;
  }
};

export const signIn = async (data) => {
  try {
    const resp = await axios.post("http://localhost:8080/api/user/create", {
      ...data,
    });
    localStorage.setItem("userId", resp.data.user._id);
    return resp.data;
  } catch (err) {
    // Handle Error Here
    //console.log(err.response.data);
    return err.response.data;
  }
};

export const getUser = async (data) => {
  try {
    const resp = await axios.get(
      "http://localhost:8080/api/user/getuser",
      {
        headers: {
          userid: localStorage.getItem("userId"),
        },
      },
      {
        ...data,
      }
    );
    return resp.data;
  } catch (err) {
    return err.response.data;
  }
};
