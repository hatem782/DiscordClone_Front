import axios from "axios";

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
    return resp.data;
  } catch (err) {
    // Handle Error Here
    //console.log(err.response.data);
    return err.response.data;
  }
};
