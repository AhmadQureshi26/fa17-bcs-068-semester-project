let loginToken = localStorage.getItem("offsetPrintingLogin");
console.log("in auth reducer token is avail", loginToken);

let authenticated = false;
if (loginToken !== null) {
  authenticated = true;
}

let defaultState = {
  authenticated: authenticated,
  token: loginToken,
};
console.log(defaultState);

const authReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "ADMIN_LOGIN":
      localStorage.setItem("offsetPrintingLogin", payload.token);

      return { ...state, authenticated: true, token: payload.token };

    default:
      return state;
  }
};

export default authReducer;
