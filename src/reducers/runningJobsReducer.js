export default (state, { type, payload }) => {
  switch (type) {
    case "ADD-JOB":
      console.log("add job called");

      return { ...state, ...payload };

    default:
      return state;
  }
};
