import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/newJobForm.css";
import { selectVariableFormState } from "../selectors/variableForm.js";
import { variableFormDataEnter } from "../actions/costingFormActions.js";
import store from "../store/store.js";
import ValidationError from "./ValidationError";

class VariableCostForm extends React.Component {
  render() {
    return (
      <>
        {console.log("props in variable cost form", this.props)}
        <div id="FormContainer">
          <div id="formHeading">Variable cost</div>

          <form className="variableForm">
            <div class="oneThreeRowWithTitle">
              <span>Sheets</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                //
                className="oneInput"
                value={this.props.variableFormInfoSheetsQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Req. sheets..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoSheetsReqSheets1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                // value={this.props.qty2}
                value={this.props.variableFormInfoSheetsQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Req. sheets..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoSheetsReqSheets2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoSheetsQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Req. sheets..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoSheetsReqSheets3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Plates</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoPlatesCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoPlatesCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPlatesTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Material</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoMaterialCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoMaterialCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMaterialTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Printing</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoPrintingCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoPrintingCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPrintingTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Lamination/UV</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoLaminationUVCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoLaminationUVCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoLaminationUVTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Die cutting</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoDieCuttingCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoDieCuttingCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoDieCuttingTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Making</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoMakingCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoMakingCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoMakingTotalCost3}
              />
            </div>
            <div class="oneThreeRowWithTitle">
              <span>Packaging/Delivery</span>
            </div>
            <div className="oneSevenRow">
              <TextField
                id="outlined-basic"
                label="Cost per unit..."
                variant="outlined"
                className="oneInput"
                defaultValue={
                  store.getState().costingFormReducer
                    .variableFormInfoPackagingDeliveryCostPerUnit
                }
                onChange={(e) =>
                  this.props.dispatch(
                    variableFormDataEnter({
                      title: "variableFormInfoPackagingDeliveryCostPerUnit",
                      value: e.target.value,
                    })
                  )
                }
              />
              <TextField
                id="outlined-basic"
                label="Quantity 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryQuantity1}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 1..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryTotalCost1}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryQuantity2}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 2..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryTotalCost2}
              />
              <TextField
                id="outlined-basic"
                label="Quantity 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryQuantity3}
              />
              <TextField
                id="outlined-basic"
                label="Total cost 3..."
                variant="outlined"
                className="oneInput"
                value={this.props.variableFormInfoPackagingDeliveryTotalCost3}
              />
            </div>
            <div className="btnContainer">
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.props.dispatch({ type: "variableFormValidateCalculate" })
                }
              >
                Submit
              </Button>
            </div>
            <ValidationError visible={this.props.validationError3} />
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return selectVariableFormState(state.costingFormReducer);
};

export default connect(mapStateToProps)(VariableCostForm);
