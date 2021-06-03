import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/newJobForm.css";
import "date-fns";
import DatePicker from "./DatePicker";
import {
  baseFormDataEnter,
  baseFormValidateCalculate,
} from "../actions/costingFormActions.js";
import store from "../store/store.js";
import { connect } from "react-redux";
import ValidationError from "./ValidationError";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const JobBaseForm = (props) => {
  // const classes = useStyles();
  const [customers, setCustomers] = React.useState([]);
  // const [customers, setCustomers] = React.useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "customer/names", {
        headers: {
          authorization: store.getState().authReducer.token,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setCustomers((prevState) => {
          return [...prevState, ...data];
        });
      })
      .catch((e) => {
        console.log(e);
        alert("Error fetching customers!");
      });
  }, []);

  return (
    <>
      {console.log("form rendered with props", props)}
      <div id="FormContainer">
        <div id="formHeading">Product information</div>
        <form class="productInfoForm">
          <DatePicker
            date={
              store.getState().alertReducer.formSaved === true
                ? ""
                : store.getState().costingFormReducer.baseFormInfoFate
            }
          />
          <div className="oneRow">
            <div className="fourInput ">
              <FormControl variant="outlined" className="fourInputSelect">
                <InputLabel id="demo-simple-select-outlined-label">
                  Customer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={
                    store.getState().alertReducer.formSaved === true
                      ? ""
                      : store.getState().costingFormReducer
                          .baseFormInfoCustomerName
                  }
                  // value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                    props.dispatch(
                      baseFormDataEnter({
                        title: "baseFormInfoCustomerName",
                        value: e.target.value,
                      })
                    );
                    // props.dispatch(
                    //   baseFormDataEnter({
                    //     title: "baseFormInfoCustomerName",
                    //     value: e.target.value,
                    //   })
                    // );
                  }}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {customers.map((customer) => {
                    return (
                      <MenuItem value={customer.customerName}>
                        {customer.customerName}
                      </MenuItem>
                    );
                  })}
                  {/* <MenuItem value={"sadasdas"}>asdasdada</MenuItem> */}
                </Select>
              </FormControl>
            </div>
            <TextField
              id="outlined-basic"
              label="Product..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoProductName
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoProductName",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Up size (l)inches..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoUpSizeL
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoUpSizeL",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Up size (w)inches..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoUpSizeW
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoUpSizeW",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div class="oneRow">
            <TextField
              id="outlined-basic"
              label="Quantity 1..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoQuantity1
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoQuantity1",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 2..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoQuantity2
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoQuantity2",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Quantity 3..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoQuantity3
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoQuantity3",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Spread size (l)..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoSpreadSizeL
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoSpreadSizeL",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div class="oneRow">
            <TextField
              id="outlined-basic"
              label="spread size (w)..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoUpSizeW
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoUpSizeW",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Material..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoMaterial
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoMaterial",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="GSM..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoGsm
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoGsm",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Print size (l)..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoPrintSizeL
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoPrintSizeL",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div class="oneRow">
            <TextField
              id="outlined-basic"
              label="Print size (w)..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoPrintSizeW
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoPrintSizeW",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Ups..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoUps
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoUps",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="Colors..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoColors
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoColors",
                    value: e.target.value,
                  })
                );
              }}
            />
            <TextField
              id="outlined-basic"
              label="No. of sides printing..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoNoOfSide
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoNoOfSide",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div class="oneRow">
            <TextField
              id="outlined-basic"
              label="Post print..."
              variant="outlined"
              className="fourInput"
              defaultValue={
                store.getState().alertReducer.formSaved === true
                  ? ""
                  : store.getState().costingFormReducer.baseFormInfoPostPrint
              }
              onChange={(e) => {
                props.dispatch(
                  baseFormDataEnter({
                    title: "baseFormInfoPostPrint",
                    value: e.target.value,
                  })
                );
              }}
            />
          </div>
          <div className="btnContainer">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log("button pressed base form");

                props.dispatch(baseFormValidateCalculate());
              }}
            >
              Submit
            </Button>
          </div>
          <ValidationError visible={props.validationError} />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  validationError: state.costingFormReducer.validationError1,
});

export default connect(mapStateToProps)(JobBaseForm);
