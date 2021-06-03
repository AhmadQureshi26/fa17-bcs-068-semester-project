let initialState = { queries: [] };
export const setInitialState = (queries) => {
  initialState = { ...initialState, queries: queries };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_QUERIES":
      return { ...state, queries: payload.queries };

    case "DELETE_QUERY":
      let newQueries = state.queries.filter((query) => {
        if (query._id !== payload.queryId) {
          return true;
        }
        return false;
      });
      return { ...state, queries: newQueries };

    case "SEARCH_QUERY":
      let queries = [...initialState.queries];
      let searchedQueries = queries.filter((query) => {
        if (
          query.email.includes(payload.search) ||
          query.time.includes(payload.search) ||
          query.message.includes(payload.search)
        ) {
          return true;
        } else return false;
      });
      return { ...state, queries: searchedQueries };
    default:
      return state;
  }
};
