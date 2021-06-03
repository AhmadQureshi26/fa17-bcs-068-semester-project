const initialState = {
  alertStatus: false,
  formSaved: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "alertOpen":
      console.log("alertopen was called");
      return { ...state, alertStatus: true };

    case "alertClose":
      console.log("alert close was called");
      return { ...state, alertStatus: false };

    default:
      return state;
  }
};
