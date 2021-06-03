import axios from "axios";
import store from "../store/store.js";
import { setInitialJobs } from "../reducers/jobsReducer.js";

const loadJob = (payload) => ({
  type: "LOAD_JOBS",
  payload,
});

export const startLoadingJobs = (callBackNotify) => {
  return (dispatch) => {
    //
    axios
      .get(process.env.REACT_APP_API_URL + "jobs", {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        setInitialJobs(data);
        dispatch(loadJob(data));
      })
      .catch((e) => {
        // alert("Error loading jobs!");
        callBackNotify("Error loading jobs!", false);
        console.log(e);
      });
  };
};
