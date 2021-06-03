const validateBaseForm = (state) => {
  let ar = [
    state.baseFormInfoCustomerName,
    state.baseFormInfoProductName,
    state.baseFormInfoMaterial,
  ];

  for (let index = 0; index < ar.length; index++) {
    if (isNaN(ar[index]) === false || ar[index] === "") {
      return false;
    }
  }

  ar = [
    state.baseFormInfoGsm,
    state.baseFormInfoUpSizeL,
    state.baseFormInfoUpSizeW,
    state.baseFormInfoQuantity1,
    state.baseFormInfoQuantity2,
    state.baseFormInfoQuantity3,
    state.baseFormInfoSpreadSizeL,
    state.baseFormInfoSpreadSizeW,
    state.baseFormInfoPrintSizeL,
    state.baseFormInfoPrintSizeW,
    state.baseFormInfoUps,
    state.baseFormInfoColors,
    state.baseFormInfoNoOfSide,
    state.baseFormInfoPostPrint,
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
//
//
//
//
const setCorrespondingValuesForBase = (state) => {
  let fixedFormInfoDesignMechQuantity =
    state.baseFormInfoPrintSizeW * state.baseFormInfoPrintSizeL;
  let fixedFormInfoFilmsQuantity = fixedFormInfoDesignMechQuantity;
  let fixedFormInfoDieQuantity = fixedFormInfoDesignMechQuantity;
  //
  let variableFormInfoSheetsQuantity1 = state.baseFormInfoQuantity1;
  let variableFormInfoSheetsQuantity2 = state.baseFormInfoQuantity2;
  let variableFormInfoSheetsQuantity3 = state.baseFormInfoQuantity3;
  //
  let variableFormInfoSheetsReqSheets1 =
    (state.baseFormInfoQuantity1 / state.baseFormInfoUps) * 1.1 +
    50 * state.baseFormInfoColors;
  let variableFormInfoSheetsReqSheets2 =
    (state.baseFormInfoQuantity2 / state.baseFormInfoUps) * 1.1 +
    50 * state.baseFormInfoColors;
  let variableFormInfoSheetsReqSheets3 =
    (state.baseFormInfoQuantity3 / state.baseFormInfoUps) * 1.05 +
    50 * state.baseFormInfoColors;
  //
  let variableFormInfoPlatesQuantity1 =
    state.baseFormInfoColors * state.baseFormInfoNoOfSide;
  let variableFormInfoPlatesQuantity2 =
    state.baseFormInfoColors * state.baseFormInfoNoOfSide;
  let variableFormInfoPlatesQuantity3 =
    state.baseFormInfoColors * state.baseFormInfoNoOfSide;
  //
  let variableFormInfoMaterialQuantity1 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      state.baseFormInfoGsm *
      variableFormInfoSheetsReqSheets1) /
    1550000;
  let variableFormInfoMaterialQuantity2 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      state.baseFormInfoGsm *
      variableFormInfoSheetsReqSheets2) /
    1550000;
  let variableFormInfoMaterialQuantity3 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      state.baseFormInfoGsm *
      variableFormInfoSheetsReqSheets3) /
    1550000;
  //
  let variableFormInfoPrintingQuantity1 =
    (variableFormInfoSheetsReqSheets1 *
      state.baseFormInfoColors *
      state.baseFormInfoNoOfSide) /
    1000;
  let variableFormInfoPrintingQuantity2 =
    (variableFormInfoSheetsReqSheets2 *
      state.baseFormInfoColors *
      state.baseFormInfoNoOfSide) /
    1000;
  let variableFormInfoPrintingQuantity3 =
    (variableFormInfoSheetsReqSheets3 *
      state.baseFormInfoColors *
      state.baseFormInfoNoOfSide) /
    1000;
  //
  let variableFormInfoLaminationUVQuantity1 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      variableFormInfoSheetsReqSheets1) /
    144;
  let variableFormInfoLaminationUVQuantity2 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      variableFormInfoSheetsReqSheets2) /
    144;
  let variableFormInfoLaminationUVQuantity3 =
    (state.baseFormInfoPrintSizeL *
      state.baseFormInfoPrintSizeW *
      variableFormInfoSheetsReqSheets3) /
    144;
  //
  let variableFormInfoDieCuttingQuantity1 =
    variableFormInfoSheetsReqSheets1 / 1000;
  let variableFormInfoDieCuttingQuantity2 =
    variableFormInfoSheetsReqSheets2 / 1000;
  let variableFormInfoDieCuttingQuantity3 =
    variableFormInfoSheetsReqSheets3 / 1000;
  //
  let variableFormInfoMakingQuantity1 =
    (variableFormInfoSheetsReqSheets1 * state.baseFormInfoUps) / 1000;
  let variableFormInfoMakingQuantity2 =
    (variableFormInfoSheetsReqSheets2 * state.baseFormInfoUps) / 1000;
  let variableFormInfoMakingQuantity3 =
    (variableFormInfoSheetsReqSheets3 * state.baseFormInfoUps) / 1000;
  //
  let variableFormInfoPackagingDeliveryQuantity1 = variableFormInfoMaterialQuantity1;
  let variableFormInfoPackagingDeliveryQuantity2 = variableFormInfoMaterialQuantity2;
  let variableFormInfoPackagingDeliveryQuantity3 = variableFormInfoMaterialQuantity3;
  return {
    ...state,
    validationError1: false,
    fixedFormInfoDesignMechQuantity,
    fixedFormInfoDieQuantity,
    fixedFormInfoFilmsQuantity,

    variableFormInfoDieCuttingQuantity1,
    variableFormInfoDieCuttingQuantity2,
    variableFormInfoDieCuttingQuantity3,

    variableFormInfoLaminationUVQuantity1,
    variableFormInfoLaminationUVQuantity2,
    variableFormInfoLaminationUVQuantity3,

    variableFormInfoMakingQuantity1,
    variableFormInfoMakingQuantity2,
    variableFormInfoMakingQuantity3,

    variableFormInfoMaterialQuantity1,
    variableFormInfoMaterialQuantity2,
    variableFormInfoMaterialQuantity3,

    variableFormInfoPackagingDeliveryQuantity1,
    variableFormInfoPackagingDeliveryQuantity2,
    variableFormInfoPackagingDeliveryQuantity3,

    variableFormInfoPlatesQuantity1,
    variableFormInfoPlatesQuantity2,
    variableFormInfoPlatesQuantity3,

    variableFormInfoPrintingQuantity1,
    variableFormInfoPrintingQuantity2,
    variableFormInfoPrintingQuantity3,

    variableFormInfoSheetsQuantity1,
    variableFormInfoSheetsQuantity2,
    variableFormInfoSheetsQuantity3,
    variableFormInfoSheetsReqSheets1,
    variableFormInfoSheetsReqSheets2,
    variableFormInfoSheetsReqSheets3,
  };
};

export { setCorrespondingValuesForBase, validateBaseForm };
