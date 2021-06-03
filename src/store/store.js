import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import productReducer from "../reducers/productsReducer.js";
import authReducer from "../reducers/authReducer.js";
import alertReducer from "../reducers/alertReducer.js";
import jobsReducer from "../reducers/jobsReducer.js";
import costingFormReducer from "../reducers/costingFormReducer.js";
import queriesReducer from "../reducers/queriesReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  combineReducers({
    productReducer,
    authReducer,
    alertReducer,
    costingFormReducer,
    jobsReducer,
    queriesReducer,
    // expReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log("store state changed ", store.getState());
});

// console.log("in store");

// console.log(store.getState().authReducer);

export default store;
