let initialState = {
  jobs: [],
};

export const setInitialJobs = (jobs) => {
  initialState = { ...initialState, jobs: jobs };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_JOB":
      return { ...state, jobs: [...state.jobs, payload] };
    case "LOAD_JOBS":
      return { ...state, jobs: payload };
    case "DELETE_JOB":
      let newJobs = state.jobs.filter((job) => {
        if (job._id === payload.jobId) {
          return false;
        }
        return true;
      });
      return { ...state, jobs: newJobs };
    case "UPDATE_JOB":
      let updatedJobs = state.jobs.map((job) => {
        if (job._id === payload.id) {
          return { ...payload.formState, _id: payload.id };
        }
        return job;
      });
      return { ...state, jobs: updatedJobs };
    case "SEARCH_JOBS":
      let jobs = [...initialState.jobs];
      let searchedJobs = jobs.filter((job) => {
        if (
          job.baseFormInfoDate.includes(payload.search) ||
          job.baseFormInfoCustomerName.includes(payload.search) ||
          job.baseFormInfoProductName.includes(payload.search)
        ) {
          return true;
        } else return false;
      });
      return { ...state, jobs: searchedJobs };
    default:
      return state;
  }
};
