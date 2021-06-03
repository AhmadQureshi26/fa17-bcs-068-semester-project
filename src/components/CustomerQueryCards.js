import React, { useEffect } from "react";
import CustomerQueryCard from "../components/CustomerQueryCard";
import { connect } from "react-redux";
import { startLoadingQueries } from "../actions/loadQueries.js";
import "../css/customerQueryCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerQueryCards = (props) => {
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

  useEffect(() => {
    console.log(" in use effect");
    props.dispatch(startLoadingQueries(notify));
  }, []);

  return (
    <>
      <div className="queryCards">
        <ToastContainer />
        {props.queries.map((query) => {
          return (
            <CustomerQueryCard
              id={query._id}
              time={query.time}
              email={query.email}
              message={query.message}
              dispatch={props.dispatch}
            />
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  queries: state.queriesReducer.queries,
});

export default connect(mapStateToProps)(CustomerQueryCards);
