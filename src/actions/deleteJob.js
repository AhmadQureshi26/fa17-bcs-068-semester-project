import axios from "axios";
import store from "../store/store.js";

const deleteJob = (payload) => ({
  type: "DELETE_JOB",
  payload,
});

export const startDeleteJob = (jobId, callBackNotify) => {
  return (dispatch) => {
    axios
      .delete(process.env.REACT_APP_API_URL + "jobs/" + jobId, {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        // alert("Job was deleted successfully!");
        callBackNotify("Job was deleted successfully!", true);
        dispatch(deleteJob({ jobId }));
      })
      .catch((e) => {
        console.log(e);
        callBackNotify("Error deleting job!", false);
        // alert("Error deleting job!");
      });
  };
};
