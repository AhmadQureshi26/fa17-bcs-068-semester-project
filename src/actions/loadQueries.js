import axios from "axios";
import store from "../store/store";
import { setInitialState } from "../reducers/queriesReducer.js";

const loadQueries = (payload) => ({
  type: "LOAD_QUERIES",
  payload,
});

export const startLoadingQueries = (callBackNotify) => {
  return (dispatch) => {
    console.log("in start loading queries");
    axios
      .get(process.env.REACT_APP_API_URL + "queries", {
        headers: { authorization: store.getState().authReducer.token },
      })
      .then(({ data }) => {
        setInitialState(data);
        // callBackNotify('Customer quei');
        dispatch(loadQueries({ queries: data }));
      })
      .catch((error) => {
        console.log(error);
        callBackNotify("Error loading queries!", false);
        // alert("Error loading queries!");
      });
  };
};
