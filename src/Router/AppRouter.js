import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Main from "../App.js";
import Products from "../components/Products.js";
import Faq from "../components/Faq.js";
import GetQuote from "../components/GetQuote.js";
import store from "../store/store.js";
import { getProductsAction } from "../actions/getProducts.js";
import PrivateRoute from "./PrivateRoute.js";
import Login from "../components/Login.js";
import Loading from "../components/Loading.js";
import createHistory from "history/createBrowserHistory";

const NotFoundPage = () => (
  <div>
    <h1>404 not found!</h1>
  </div>
);

store.dispatch(getProductsAction());

let history = createHistory();

export { history };

export default function () {
  // const [runningJobs, dispatch] = useReducer(runningJobsReducer, jobs);
  return (
    <div>
      <Router history={history}>
        {console.log("after browser router")}

        <Switch>
          <Route path="/" component={Main} exact={true} />
          <Route path="/products" component={Products} />
          <Route path="/faqs" component={Faq} />
          <Route path="/getQuote" component={GetQuote} />
          <Route path="/loadingAdmin" component={Loading} />
          {/* <runningJobsContext.Provider value={{ runningJobs, dispatch }}> */}
          <PrivateRoute path="/admin/:page" component={Login} />
          {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
          {/* </runningJobsContext.Provider> */}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
