import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/newJobForm.css";
import { connect } from "react-redux";
import { fixedFormDataEnter } from "../actions/costingFormActions";
import ValidationError from "./ValidationError";
import store from "../store/store.js";

class FixedCostForm extends Component {
  render() {
    return (
      <>
        <div id="FormContainer" class="fixedFormRoot">
          {console.log("props of fixed form are", this.props)}
          <div id="formHeading">Fixed cost</div>
          <form id="baseForm">
            <div class="oneThreeRowWithTitle">
              <span>Design/Mechanical (sq.in)</span>
            </div>
            <div class="oneThreeRow">
              <TextField
                id="outlined-basic"
                label="Quantity..."
                variant="outlined"
                className="fourInput"
                value={this.props.quantity}
              />

              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="fourInput"
                onChange={(e) => {
                  this.props.dispatch(
                    fixedFormDataEnter({
                      title: "fixedFormInfoDesignMechCostPerUnit",
                      value: e.target.value,
                    })
                  );
                }}
                defaultValue={
                  store.getState().costingFormReducer
                    .fixedFormInfoDesignMechCostPerUnit
                }
              />
              <TextField
                id="outlined-basic"
                label="Total cost..."
                variant="outlined"
                className="fourInput"
                value={this.props.totalCost1}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Films (sq.in)</span>
            </div>
            <div class="oneThreeRow">
              <TextField
                id="outlined-basic"
                label="Quantity..."
                variant="outlined"
                className="fourInput"
                value={this.props.quantity}
              />
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="fourInput"
                onChange={(e) => {
                  this.props.dispatch(
                    fixedFormDataEnter({
                      category: "films",
                      title: "fixedFormInfoFilmsCostPerUnit",
                      value: e.target.value,
                    })
                  );
                }}
                defaultValue={
                  store.getState().costingFormReducer
                    .fixedFormInfoFilmsCostPerUnit
                }
              />
              <TextField
                id="outlined-basic"
                label="Total cost..."
                variant="outlined"
                className="fourInput"
                value={this.props.totalCost2}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Die (sq.in)</span>
            </div>
            <div class="oneThreeRow">
              <TextField
                id="outlined-basic"
                label="Quantity..."
                variant="outlined"
                className="fourInput"
                value={this.props.quantity}
              />
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="fourInput"
                onChange={(e) => {
                  this.props.dispatch(
                    fixedFormDataEnter({
                      title: "fixedFormInfoDieCostPerUnit",
                      value: e.target.value,
                    })
                  );
                }}
                defaultValue={
                  store.getState().costingFormReducer
                    .fixedFormInfoDieCostPerUnit
                }
              />
              <TextField
                id="outlined-basic"
                label="Total cost..."
                variant="outlined"
                className="fourInput"
                value={this.props.totalCost3}
              />
            </div>
            <div className="oneThreeRow last">
              <TextField
                id="outlined-basic"
                label="Total prepress cost..."
                variant="outlined"
                className="fourInput"
                value={this.props.totalFixedCost}
              />
            </div>
            <div className="btnContainer">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.props.dispatch({ type: "fixedFormValidateCalculate" })
                }
              >
                Submit
              </Button>
            </div>
            <ValidationError visible={this.props.validationError} />
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quantity: state.costingFormReducer.fixedFormInfoDesignMechQuantity,
    validationError: state.costingFormReducer.validationError2,

    totalCost1: state.costingFormReducer.fixedFormInfoDesignMechTotalCost,
    totalCost2: state.costingFormReducer.fixedFormInfoFilmsTotalCost,
    totalCost3: state.costingFormReducer.fixedFormInfoDieTotalCost,

    totalFixedCost: state.costingFormReducer.fixedFormInfoTotalFixedCost,
  };
};

export default connect(mapStateToProps)(FixedCostForm);
