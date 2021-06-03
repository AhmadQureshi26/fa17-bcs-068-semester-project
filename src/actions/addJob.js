import store from "../store/store.js";
import axios from "axios";

const addJob = (payload) => ({
  type: "ADD_JOB",
  payload,
});

export const startAddJob = (cb) => {
  return (dispatch) => {
    let formState = { ...store.getState().costingFormReducer };
    // console.log(formState);
    let image = formState.productImage;
    delete formState.validationError1;
    delete formState.validationError2;
    delete formState.validationError3;
    delete formState.validationError4;
    delete formState.productImage;
    formState.baseFormInfoDate = new Date().toString();
    // console.log();
    console.log(image);
    console.log(formState);
    const formData = new FormData();
    // formData.
    for (let [key, value] of Object.entries(formState)) {
      formData.append(key, value);
    }
    formData.append("productImage", image);
    // formData.append("form", formState);

    formData.forEach((value, key) => {
      console.log(key);
      console.log(value);
    });

    // console.log(formData.get("form"));
    console.log(formData);
    if (
      store.getState().costingFormReducer.validationError1 === true ||
      store.getState().costingFormReducer.validationError2 === true ||
      store.getState().costingFormReducer.validationError3 === true ||
      store.getState().costingFormReducer.validationError4 === true
    ) {
      alert("job cannot be saved the information is not valid");
      return;
    }
    cb("Data is being uploaded", 0.5, true);
    axios
      .post(
        process.env.REACT_APP_API_URL + "jobs",
        formData,
        {
          headers: {
            authorization: store.getState().authReducer.token,
            // "Access-Control-Allow-Origin": "*",
          },
        },
        {
          onUploadProgress: (progressEvent) => {
            console.log(progressEvent.loaded);
            console.log(progressEvent.total);
          },
        }
      )
      .then(({ data }) => {
        // alert("Data was saved successfully!");
        cb("Data was saved successfully!", 1, true);
        console.log(data);
        dispatch(addJob({ ...formState, productImage: image, id: data.id }));
      })
      .catch((e) => {
        console.log(e);
        cb("Error while uploading", 0, false);
        // alert("Server error while saving job to database!");
      });
  };
};
