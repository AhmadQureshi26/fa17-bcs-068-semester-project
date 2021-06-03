export const totalFormValidate = (state) => {
  let ar = [
    state.totalFormInfoPricePerUnitAfzalPercentage,
    state.totalFormInfoPricePerUnitImpactPercentage,
  ];
  for (let index = 0; index < ar.length; index++) {
    if (
      isNaN(ar[index]) === true ||
      parseInt(ar[index]) < 0 ||
      parseInt(ar[index]) > 100 ||
      ar[index] === ""
    ) {
      return false;
    }
  }
  return true;
};

export const totalFormCalculate = (state) => {
  let totalFormInfoPricePerUnitAfzalQuantity1 =
    state.totalFormInfoCostPerUnitQuantity1 *
    (1 + state.totalFormInfoPricePerUnitAfzalPercentage * 1);
  let totalFormInfoPricePerUnitAfzalQuantity2 =
    state.totalFormInfoCostPerUnitQuantity2 *
    (1 + state.totalFormInfoPricePerUnitAfzalPercentage * 1);
  let totalFormInfoPricePerUnitAfzalQuantity3 =
    state.totalFormInfoCostPerUnitQuantity3 *
    (1 + state.totalFormInfoPricePerUnitAfzalPercentage * 1);
  //
  let totalFormInfoPricePerUnitImpactQuantity1 =
    totalFormInfoPricePerUnitAfzalQuantity1 *
    (1 + state.totalFormInfoPricePerUnitImpactPercentage / 100);
  let totalFormInfoPricePerUnitImpactQuantity2 =
    totalFormInfoPricePerUnitAfzalQuantity2 *
    (1 + state.totalFormInfoPricePerUnitImpactPercentage / 100);
  let totalFormInfoPricePerUnitImpactQuantity3 =
    totalFormInfoPricePerUnitAfzalQuantity3 *
    (1 + state.totalFormInfoPricePerUnitImpactPercentage / 100);
  //
  let totalFormInfoNetReceivableQuantity1 =
    totalFormInfoPricePerUnitImpactQuantity1 *
    0.94 *
    state.baseFormInfoQuantity1;
  let totalFormInfoNetReceivableQuantity2 =
    totalFormInfoPricePerUnitImpactQuantity2 *
    0.94 *
    state.baseFormInfoQuantity2;
  let totalFormInfoNetReceivableQuantity3 =
    totalFormInfoPricePerUnitImpactQuantity3 *
    0.94 *
    state.baseFormInfoQuantity3;
  //
  let totalFormInfoAmountEarnedQuantity1 =
    totalFormInfoNetReceivableQuantity1 -
    totalFormInfoPricePerUnitAfzalQuantity1 * state.baseFormInfoQuantity1;
  let totalFormInfoAmountEarnedQuantity2 =
    (totalFormInfoNetReceivableQuantity2 -
      totalFormInfoPricePerUnitAfzalQuantity2 * state.baseFormInfoQuantity2) /
    2;
  let totalFormInfoAmountEarnedQuantity3 =
    (totalFormInfoNetReceivableQuantity3 -
      totalFormInfoPricePerUnitAfzalQuantity3 * state.baseFormInfoQuantity3) /
    2;
  // console.log(state);

  return {
    ...state,
    validationError4: false,
    totalFormInfoAmountEarnedQuantity1,
    totalFormInfoAmountEarnedQuantity2,
    totalFormInfoAmountEarnedQuantity3,
    totalFormInfoNetReceivableQuantity1,
    totalFormInfoNetReceivableQuantity2,
    totalFormInfoNetReceivableQuantity3,
    totalFormInfoPricePerUnitAfzalQuantity1,
    totalFormInfoPricePerUnitAfzalQuantity2,
    totalFormInfoPricePerUnitAfzalQuantity3,
    totalFormInfoPricePerUnitImpactQuantity1,
    totalFormInfoPricePerUnitImpactQuantity2,
    totalFormInfoPricePerUnitImpactQuantity3,
  };
};

export const selectTotalFormState = (state) => {
  return {
    productImage: state.productImage,
    validationError4: state.validationError4,
    totalFormInfoTotalVariableCostQuantity1:
      state.totalFormInfoTotalVariableCostQuantity1,
    totalFormInfoTotalVariableCostQuantity2:
      state.totalFormInfoTotalVariableCostQuantity2,
    totalFormInfoTotalVariableCostQuantity3:
      state.totalFormInfoTotalVariableCostQuantity3,

    totalFormInfoTotalCostQuantity1: state.totalFormInfoTotalCostQuantity1,
    totalFormInfoTotalCostQuantity2: state.totalFormInfoTotalCostQuantity2,
    totalFormInfoTotalCostQuantity3: state.totalFormInfoTotalCostQuantity3,

    totalFormInfoCostPerUnitQuantity1: state.totalFormInfoCostPerUnitQuantity1,
    totalFormInfoCostPerUnitQuantity2: state.totalFormInfoCostPerUnitQuantity2,
    totalFormInfoCostPerUnitQuantity3: state.totalFormInfoCostPerUnitQuantity3,

    totalFormInfoPricePerUnitAfzalQuantity1:
      state.totalFormInfoPricePerUnitAfzalQuantity1,
    totalFormInfoPricePerUnitAfzalQuantity2:
      state.totalFormInfoPricePerUnitAfzalQuantity2,
    totalFormInfoPricePerUnitAfzalQuantity3:
      state.totalFormInfoPricePerUnitAfzalQuantity3,

    totalFormInfoPricePerUnitImpactQuantity1:
      state.totalFormInfoPricePerUnitImpactQuantity1,
    totalFormInfoPricePerUnitImpactQuantity2:
      state.totalFormInfoPricePerUnitImpactQuantity2,
    totalFormInfoPricePerUnitImpactQuantity3:
      state.totalFormInfoPricePerUnitImpactQuantity3,

    totalFormInfoNetReceivableQuantity1:
      state.totalFormInfoNetReceivableQuantity1,
    totalFormInfoNetReceivableQuantity2:
      state.totalFormInfoNetReceivableQuantity2,
    totalFormInfoNetReceivableQuantity3:
      state.totalFormInfoNetReceivableQuantity3,
    totalFormInfoAmountEarnedQuantity1:
      state.totalFormInfoAmountEarnedQuantity1,
    totalFormInfoAmountEarnedQuantity2:
      state.totalFormInfoAmountEarnedQuantity2,
    totalFormInfoAmountEarnedQuantity3:
      state.totalFormInfoAmountEarnedQuantity3,
  };
};
