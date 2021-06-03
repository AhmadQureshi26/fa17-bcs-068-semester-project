import { initialState } from "../initialState/formState.js";
import {
  setCorrespondingValuesForBase,
  validateBaseForm,
} from "../selectors/baseForm.js";
import {
  fixedFormValidate,
  setCorrespondingValuesForFixed,
} from "../selectors/fixedForm.js";
import {
  variableFormCalculate,
  variableFormValidate,
} from "../selectors/variableForm.js";
import {
  totalFormValidate,
  totalFormCalculate,
} from "../selectors/totalForm.js";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //
    case "baseFormDataEnter":
      return { ...state, [payload.title]: payload.value };
    //
    case "baseFormValidateCalculate":
      if (validateBaseForm(state) === true) {
        return setCorrespondingValuesForBase(state);
      } else {
        return { ...state, validationError1: true };
      }
    //
    case "fixedFormDataEnter":
      return { ...state, [payload.title]: payload.value };
    //
    case "fixedFormValidateCalculate":
      let validStatus = fixedFormValidate(state);
      if (validStatus === false) {
        return { ...state, validationError2: true };
      } else {
        return setCorrespondingValuesForFixed(state);
      }
    //
    case "variableFormDataEnter":
      return { ...state, [payload.title]: payload.value };

    case "variableFormValidateCalculate":
      if (
        state.validationError1 === true ||
        state.validationError2 === true ||
        variableFormValidate(state) === false
      ) {
        return { ...state, validationError3: true };
      }

      return variableFormCalculate(state);

    //
    case "totalFormDataEnter":
      return { ...state, [payload.title]: payload.value };
    //
    case "totalFormValidateCalculate":
      if (
        state.validationError1 === true ||
        state.validationError2 === true ||
        state.validationError3 === true ||
        totalFormValidate(state) === false
      ) {
        return { ...state, validationError4: true };
      }
      return totalFormCalculate(state);
    case "SET_FORM_FOR_UPDATE":
      let formUpdate = { ...payload };
      delete formUpdate._id;
      return { ...state, ...formUpdate };

    default:
      return state;
  }
};
