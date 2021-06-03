import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "../src/Router/AppRouter.js";
import { Provider } from "react-redux";
import store from "../src/store/store.js";
// import Experiment from "./Experiments/Experiment";
// import moment from "moment";
import axios from "axios";

// // let date = moment(new Date()).format();
// let date = new Date().toString();
// let date2 = new Date(date);

// console.log(date);
// console.log(moment.isDate(date));
// console.log(moment.isDate(date2));
// console.log(
//   moment("Sun Jul 12 2020 21:20:03 GMT+0500 (Pakistan Standard Time)").isAfter(
//     date
//   )
// );

// let date3 = new Date();

// console.log(date3.getMinutes() + " " + date3.getMilliseconds());
// axios
//   .get("http://offset-rest-api.herokuapp.com/jobs")
//   .then((res) => {
//     let date4 = new Date();
//     console.log(date4.getMinutes() + " " + date4.getMilliseconds());
//     console.log(res);

//   })
//   .catch();

window.onbeforeunload = async () => {
  let visited = localStorage.getItem("visit");
  console.log(visited);
  if (!visited) {
    localStorage.setItem("visit", 1);
    await axios.post(process.env.REACT_APP_API_URL + "visiters");
  }
  // alert("we are closing");
};

ReactDOM.render(
  <Provider store={store}>
    <Router />
    {/* <Experiment /> */}
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<Products />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
