import store from "../store/store.js";
import axios from "axios";

const updateJob = (id) => ({
  type: "UPDATE_JOB",
  payload: {
    id,
  },
});

export const startUpdatingJob = (id, callBackNotify) => {
  let formState = { ...store.getState().costingFormReducer };
  if (formState.validationError4 !== true) {
    return (dispatch) => {
      console.log(formState);

      delete formState.validationError1;
      delete formState.validationError2;
      delete formState.validationError3;
      delete formState.validationError4;
      axios
        .patch(
          process.env.REACT_APP_API_URL + "jobs/" + id.replace("#", ""),

          formState,
          {
            headers: {
              authorization: store.getState().authReducer.token,
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
          callBackNotify("Job was updated successfully!", undefined, true);
          // alert("Job was updated successfully!");
          dispatch(updateJob(id, formState));
        })
        .catch((e) => {
          console.log(e);
          callBackNotify("Error updating job!", undefined, false);
          dispatch({ type: "heeVy" });
          // alert("Error updating job!");
        });
    };
  } else {
    alert("Validation error cannot be updated!");
  }
};
