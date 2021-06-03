import axios from "axios";
import store from "../store/store.js";

const deleteQuery = (payload) => ({
  type: "DELETE_QUERY",
  payload,
});

export const startDeletingQuery = (queryId, callbackNotify) => {
  return (dispatch) => {
    axios
      .delete(process.env.REACT_APP_API_URL + "queries/" + queryId, {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        callbackNotify("Query was deleted successfully!", true);
        // alert("Query was deleted successfully!");
        dispatch(deleteQuery({ queryId }));
      })
      .catch((e) => {
        console.log(e);
        callbackNotify("Error deleting query!", false);
        // alert("Error deleting query!");
        dispatch({ type: "s" });
      });
  };
};
