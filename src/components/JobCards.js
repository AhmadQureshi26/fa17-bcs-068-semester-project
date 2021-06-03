import React, { useEffect } from "react";
import "../css/jobCard.css";
import { connect } from "react-redux";
import { startLoadingJobs } from "../actions/loadJobs.js";
import JobCard from "./JobCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobCardsB = (props) => {
  useEffect(() => {
    props.dispatch(startLoadingJobs(notify));
  }, []);

  const notify = (message, status) => {
    if (status) {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("notify was called");
  };

  return (
    <div className="jobCardsRoot">
      <ToastContainer />
      {console.log("other job cards", props)}
      {props.jobs.map((job) => (
        <JobCard
          time={job.baseFormInfoDate}
          title={job.baseFormInfoProductName}
          customer={job.baseFormInfoCustomerName}
          src={job.productImage}
          material={job.baseFormInfoMaterial}
          gsm={job.baseFormInfoGsm}
          upSizeL={job.baseFormInfoUpSizeL}
          upSizeW={job.baseFormInfoUpSizeW}
          printSizeL={job.baseFormInfoPrintSizeL}
          printSizeW={job.baseFormInfoPrintSizeW}
          id={job._id}
          deleteAction={props.dispatch}
          job={job}
          setForm={props.dispatch}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobsReducer.jobs,
});

export default connect(mapStateToProps)(JobCardsB);
