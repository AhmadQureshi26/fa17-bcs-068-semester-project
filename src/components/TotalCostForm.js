import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/newJobForm.css";
import { connect } from "react-redux";
import { totalFormDataEnter } from "../actions/costingFormActions.js";
import { selectTotalFormState } from "../selectors/totalForm.js";
import store from "../store/store.js";
import ValidationError from "./ValidationError";
import { startAddJob } from "../actions/addJob.js";
import { startUpdatingJob } from "../actions/updateJob.js";
import { history } from "../Router/AppRouter.js";
import FileUpload from "./FileUpload";
// import React from 'react';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TotalCostForm(props) {
  const notify = (message, progressAmt, status) => {
    // toast("Wow so easy !");
    if (status) {
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: progressAmt,
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
      progress: progressAmt,
    });

    console.log("notify was called");
  };

  return (
    <>
      <div id="FormContainer">
        {/* <button onClick={notify}>Notify !</button> */}
        <ToastContainer />
        {console.log("with props", props)}
        {console.log("with history", history)}
        <div id="formHeading">Total cost</div>
        <form className="totalForm">
          <div class="oneThreeRowWithTitle">
            <span>Total variable cost</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoTotalVariableCostQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoTotalVariableCostQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              value={props.totalFormInfoTotalVariableCostQuantity3}
              className="fourInput"
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Total cost</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoTotalCostQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoTotalCostQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoTotalCostQuantity3}
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Cost per unit</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoCostPerUnitQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoCostPerUnitQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoCostPerUnitQuantity3}
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Price per unit @afzal</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Percentage..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().costingFormReducer
                  .totalFormInfoPricePerUnitAfzalPercentage
              }
              onChange={(e) => {
                props.dispatch(
                  totalFormDataEnter({
                    title: "totalFormInfoPricePerUnitAfzalPercentage",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitAfzalQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitAfzalQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitAfzalQuantity3}
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Price per unit @impact</span>
          </div>

          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Percentage..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().costingFormReducer
                  .totalFormInfoPricePerUnitImpactPercentage
              }
              onChange={(e) => {
                props.dispatch(
                  totalFormDataEnter({
                    title: "totalFormInfoPricePerUnitImpactPercentage",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitImpactQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitImpactQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoPricePerUnitImpactQuantity3}
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Net receivable</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoNetReceivableQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoNetReceivableQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoNetReceivableQuantity3}
            />
          </div>
          <div class="oneThreeRowWithTitle">
            <span>Amount earned</span>
          </div>
          <div class="oneThreeRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoAmountEarnedQuantity1}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoAmountEarnedQuantity2}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              value={props.totalFormInfoAmountEarnedQuantity3}
            />
          </div>
          <FileUpload dispatch={props.dispatch} />
          <div className="btnContainer">
            <div className="btn1">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) =>
                  props.dispatch({ type: "totalFormValidateCalculate" })
                }
              >
                Submit
              </Button>
            </div>
            {console.log("history.hash:", history.hash)}
            {history.location.hash === "" ? (
              <div className="btn2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log("save btn clicked");
                    props.dispatch(startAddJob(notify));
                  }}
                >
                  Save
                </Button>
              </div>
            ) : (
              <></>
            )}
            {history.location.hash !== "" ? (
              <div className="btn2">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log("update btn clicked");
                    props.dispatch(
                      startUpdatingJob(history.location.hash, notify)
                    );
                  }}
                >
                  Update
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <ValidationError visible={props.validationError4} />
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return selectTotalFormState(state.costingFormReducer);
};

export default connect(mapStateToProps)(TotalCostForm);
