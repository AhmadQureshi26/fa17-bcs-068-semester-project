const fixedFormValidate = (state) => {
  let ar = [
    state.fixedFormInfoDesignMechQuantity,
    state.fixedFormInfoDesignMechCostPerUnit,
    state.fixedFormInfoDesignMechTotalCost,
    state.fixedFormInfoFilmsQuantity,
    state.fixedFormInfoFilmsCostPerUnit,
    state.fixedFormInfoFilmsTotalCost,
    state.fixedFormInfoDieQuantity,
    state.fixedFormInfoDieCostPerUnit,
    state.fixedFormInfoDieTotalCost,
  ];
  for (let index = 0; index < ar.length; index++) {
    if (
      isNaN(ar[index]) === true ||
      parseInt(ar[index]) < 0 ||
      ar[index] === ""
    ) {
      return false;
    }
  }
  return true;
};

const setCorrespondingValuesForFixed = (state) => {
  let fixedFormInfoDesignMechTotalCost =
    state.fixedFormInfoDesignMechQuantity *
    state.fixedFormInfoDesignMechCostPerUnit;
  let fixedFormInfoFilmsTotalCost =
    state.fixedFormInfoFilmsQuantity * state.fixedFormInfoFilmsCostPerUnit;
  console.log(state.fixedFormInfoDieQuantity);
  console.log(state.fixedFormInfoDieCostPerUnit);
  let fixedFormInfoDieTotalCost =
    state.fixedFormInfoDieQuantity * state.fixedFormInfoDieCostPerUnit;
  let fixedFormInfoTotalFixedCost =
    fixedFormInfoDesignMechTotalCost +
    fixedFormInfoFilmsTotalCost +
    fixedFormInfoDieTotalCost;
  console.log(fixedFormInfoDesignMechTotalCost);
  console.log(fixedFormInfoFilmsTotalCost);
  console.log(fixedFormInfoDieTotalCost);

  return {
    ...state,
    validationError2: false,
    fixedFormInfoDesignMechTotalCost,
    fixedFormInfoFilmsTotalCost,
    fixedFormInfoDieTotalCost,
    fixedFormInfoTotalFixedCost,
  };
};

export { fixedFormValidate, setCorrespondingValuesForFixed };
