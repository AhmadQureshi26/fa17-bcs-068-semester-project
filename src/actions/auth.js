// import { firebase, provider, saveUserToDb } from "../Firebase/firebase.js";
import axios from "axios";

export default (password) => {
  console.log("in axios get ", password);

  return (dispatch) => {
    axios
      .post(process.env.REACT_APP_API_URL + "admin/login", {
        password: password,
      })
      .then((res) => {
        console.log(res);
        // localStorage.setItem("offsetPrintingLogin", res.data);
        dispatch(adminLogin(res.data));
      })
      .catch((err) => console.log("in auth.js", err));
    // axios.post('',{})
  };
};
const adminLogin = (token) => {
  return {
    type: "ADMIN_LOGIN",
    payload: {
      token,
    },
  };
};

export const tryLogin = (username) => {
  return {
    type: "tryLogin",
    username: username,
  };
};

export const saveUid = (uid) => {
  return {
    type: "saveUID",
    uid: uid,
  };
};
