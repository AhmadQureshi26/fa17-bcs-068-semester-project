export const variableFormValidate = (state) => {
  let ar = [
    state.variableFormInfoPlatesCostPerUnit,
    state.variableFormInfoMaterialCostPerUnit,
    state.variableFormInfoPrintingCostPerUnit,
    state.variableFormInfoLaminationUVCostPerUnit,
    state.variableFormInfoDieCuttingCostPerUnit,
    state.variableFormInfoMakingCostPerUnit,
    state.variableFormInfoPackagingDeliveryCostPerUnit,
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

export const variableFormCalculate = (state) => {
  let variableFormInfoPlatesTotalCost1 =
    state.variableFormInfoPlatesCostPerUnit *
    state.variableFormInfoPlatesQuantity1;
  let variableFormInfoPlatesTotalCost2 =
    state.variableFormInfoPlatesCostPerUnit *
    state.variableFormInfoPlatesQuantity2;
  let variableFormInfoPlatesTotalCost3 =
    state.variableFormInfoPlatesCostPerUnit *
    state.variableFormInfoPlatesQuantity3;
  //

  let variableFormInfoMaterialTotalCost1 =
    state.variableFormInfoMaterialCostPerUnit *
    state.variableFormInfoMaterialQuantity1;
  let variableFormInfoMaterialTotalCost2 =
    state.variableFormInfoMaterialCostPerUnit *
    state.variableFormInfoMaterialQuantity2;
  let variableFormInfoMaterialTotalCost3 =
    state.variableFormInfoMaterialCostPerUnit *
    state.variableFormInfoMaterialQuantity3;
  //
  let variableFormInfoPrintingTotalCost1 =
    state.variableFormInfoPrintingCostPerUnit *
    state.variableFormInfoPrintingQuantity1;
  let variableFormInfoPrintingTotalCost2 =
    state.variableFormInfoPrintingCostPerUnit *
    state.variableFormInfoPrintingQuantity2;
  let variableFormInfoPrintingTotalCost3 =
    state.variableFormInfoPrintingCostPerUnit *
    state.variableFormInfoPrintingQuantity3;
  //
  let variableFormInfoLaminationUVTotalCost1 =
    state.variableFormInfoLaminationUVCostPerUnit *
    state.variableFormInfoLaminationUVQuantity1;
  let variableFormInfoLaminationUVTotalCost2 =
    state.variableFormInfoLaminationUVCostPerUnit *
    state.variableFormInfoLaminationUVQuantity2;
  let variableFormInfoLaminationUVTotalCost3 =
    state.variableFormInfoLaminationUVCostPerUnit *
    state.variableFormInfoLaminationUVQuantity3;
  //
  let variableFormInfoDieCuttingTotalCost1 =
    state.variableFormInfoDieCuttingCostPerUnit *
    state.variableFormInfoDieCuttingQuantity1;
  let variableFormInfoDieCuttingTotalCost2 =
    state.variableFormInfoDieCuttingCostPerUnit *
    state.variableFormInfoDieCuttingQuantity2;
  let variableFormInfoDieCuttingTotalCost3 =
    state.variableFormInfoDieCuttingCostPerUnit *
    state.variableFormInfoDieCuttingQuantity3;
  //
  let variableFormInfoMakingTotalCost1 =
    state.variableFormInfoMakingCostPerUnit *
    state.variableFormInfoMakingQuantity1;
  let variableFormInfoMakingTotalCost2 =
    state.variableFormInfoMakingCostPerUnit *
    state.variableFormInfoMakingQuantity2;
  let variableFormInfoMakingTotalCost3 =
    state.variableFormInfoMakingCostPerUnit *
    state.variableFormInfoMakingQuantity3;
  //
  let variableFormInfoPackagingDeliveryTotalCost1 =
    state.variableFormInfoPackagingDeliveryCostPerUnit *
    state.variableFormInfoPackagingDeliveryQuantity1;
  let variableFormInfoPackagingDeliveryTotalCost2 =
    state.variableFormInfoPackagingDeliveryCostPerUnit *
    state.variableFormInfoPackagingDeliveryQuantity2;
  let variableFormInfoPackagingDeliveryTotalCost3 =
    state.variableFormInfoPackagingDeliveryCostPerUnit *
    state.variableFormInfoPackagingDeliveryQuantity3;
  //
  let totalFormInfoTotalVariableCostQuantity1 =
    variableFormInfoPlatesTotalCost1 +
    variableFormInfoMaterialTotalCost1 +
    variableFormInfoPrintingTotalCost1 +
    variableFormInfoLaminationUVTotalCost1 +
    variableFormInfoDieCuttingTotalCost1 +
    variableFormInfoMakingTotalCost1 +
    variableFormInfoPackagingDeliveryTotalCost1;
  //
  let totalFormInfoTotalVariableCostQuantity2 =
    variableFormInfoPlatesTotalCost2 +
    variableFormInfoMaterialTotalCost2 +
    variableFormInfoPrintingTotalCost2 +
    variableFormInfoLaminationUVTotalCost2 +
    variableFormInfoDieCuttingTotalCost2 +
    variableFormInfoMakingTotalCost2 +
    variableFormInfoPackagingDeliveryTotalCost2;
  //
  let totalFormInfoTotalVariableCostQuantity3 =
    variableFormInfoPlatesTotalCost3 +
    variableFormInfoMaterialTotalCost3 +
    variableFormInfoPrintingTotalCost3 +
    variableFormInfoLaminationUVTotalCost3 +
    variableFormInfoDieCuttingTotalCost3 +
    variableFormInfoMakingTotalCost3 +
    variableFormInfoPackagingDeliveryTotalCost3;
  //
  let totalFormInfoTotalCostQuantity1 =
    totalFormInfoTotalVariableCostQuantity1 + state.fixedFormInfoTotalFixedCost;
  //
  let totalFormInfoTotalCostQuantity2 =
    totalFormInfoTotalVariableCostQuantity2 + state.fixedFormInfoTotalFixedCost;
  //
  let totalFormInfoTotalCostQuantity3 =
    totalFormInfoTotalVariableCostQuantity3 + state.fixedFormInfoTotalFixedCost;
  //
  let totalFormInfoCostPerUnitQuantity1 =
    totalFormInfoTotalCostQuantity1 / state.baseFormInfoQuantity1;
  let totalFormInfoCostPerUnitQuantity2 =
    totalFormInfoTotalCostQuantity2 / state.baseFormInfoQuantity2;
  let totalFormInfoCostPerUnitQuantity3 =
    totalFormInfoTotalCostQuantity3 / state.baseFormInfoQuantity3;

  return {
    ...state,
    validationError3: false,
    variableFormInfoDieCuttingTotalCost1,
    variableFormInfoDieCuttingTotalCost2,
    variableFormInfoDieCuttingTotalCost3,
    variableFormInfoLaminationUVTotalCost1,
    variableFormInfoLaminationUVTotalCost2,
    variableFormInfoLaminationUVTotalCost3,
    variableFormInfoMakingTotalCost1,
    variableFormInfoMakingTotalCost2,
    variableFormInfoMakingTotalCost3,
    variableFormInfoMaterialTotalCost1,
    variableFormInfoMaterialTotalCost2,
    variableFormInfoMaterialTotalCost3,
    variableFormInfoPackagingDeliveryTotalCost1,
    variableFormInfoPackagingDeliveryTotalCost2,
    variableFormInfoPackagingDeliveryTotalCost3,
    variableFormInfoPlatesTotalCost1,
    variableFormInfoPlatesTotalCost2,
    variableFormInfoPlatesTotalCost3,
    variableFormInfoPrintingTotalCost1,
    variableFormInfoPrintingTotalCost2,
    variableFormInfoPrintingTotalCost3,
    totalFormInfoCostPerUnitQuantity1,
    totalFormInfoCostPerUnitQuantity2,
    totalFormInfoCostPerUnitQuantity3,
    totalFormInfoTotalCostQuantity1,
    totalFormInfoTotalCostQuantity2,
    totalFormInfoTotalCostQuantity3,
    totalFormInfoTotalVariableCostQuantity1,
    totalFormInfoTotalVariableCostQuantity2,
    totalFormInfoTotalVariableCostQuantity3,
  };
};

export const selectVariableFormState = (state) => {
  return {
    validationError3: state.validationError3,
    variableFormInfoSheetsQuantity1: state.variableFormInfoSheetsQuantity1,
    variableFormInfoSheetsReqSheets1: state.variableFormInfoSheetsReqSheets1,
    variableFormInfoSheetsQuantity2: state.variableFormInfoSheetsQuantity2,
    variableFormInfoSheetsReqSheets2: state.variableFormInfoSheetsReqSheets2,
    variableFormInfoSheetsQuantity3: state.variableFormInfoSheetsQuantity3,
    variableFormInfoSheetsReqSheets3: state.variableFormInfoSheetsReqSheets3,

    variableFormInfoPlatesQuantity1: state.variableFormInfoPlatesQuantity1,
    variableFormInfoPlatesTotalCost1: state.variableFormInfoPlatesTotalCost1,
    variableFormInfoPlatesQuantity2: state.variableFormInfoPlatesQuantity2,
    variableFormInfoPlatesTotalCost2: state.variableFormInfoPlatesTotalCost2,
    variableFormInfoPlatesQuantity3: state.variableFormInfoPlatesQuantity3,
    variableFormInfoPlatesTotalCost3: state.variableFormInfoPlatesTotalCost3,

    variableFormInfoMaterialQuantity1: state.variableFormInfoMaterialQuantity1,
    variableFormInfoMaterialTotalCost1:
      state.variableFormInfoMaterialTotalCost1,
    variableFormInfoMaterialQuantity2: state.variableFormInfoMaterialQuantity2,
    variableFormInfoMaterialTotalCost2:
      state.variableFormInfoMaterialTotalCost2,
    variableFormInfoMaterialQuantity3: state.variableFormInfoMaterialQuantity3,
    variableFormInfoMaterialTotalCost3:
      state.variableFormInfoMaterialTotalCost3,

    variableFormInfoPrintingQuantity1: state.variableFormInfoPrintingQuantity1,
    variableFormInfoPrintingTotalCost1:
      state.variableFormInfoPrintingTotalCost1,
    variableFormInfoPrintingQuantity2: state.variableFormInfoPrintingQuantity2,
    variableFormInfoPrintingTotalCost2:
      state.variableFormInfoPrintingTotalCost2,
    variableFormInfoPrintingQuantity3: state.variableFormInfoPrintingQuantity3,
    variableFormInfoPrintingTotalCost3:
      state.variableFormInfoPrintingTotalCost3,

    variableFormInfoLaminationUVQuantity1:
      state.variableFormInfoLaminationUVQuantity1,
    variableFormInfoLaminationUVTotalCost1:
      state.variableFormInfoLaminationUVTotalCost1,
    variableFormInfoLaminationUVQuantity2:
      state.variableFormInfoLaminationUVQuantity2,
    variableFormInfoLaminationUVTotalCost2:
      state.variableFormInfoLaminationUVTotalCost2,
    variableFormInfoLaminationUVQuantity3:
      state.variableFormInfoLaminationUVQuantity3,
    variableFormInfoLaminationUVTotalCost3:
      state.variableFormInfoLaminationUVTotalCost3,

    variableFormInfoDieCuttingQuantity1:
      state.variableFormInfoDieCuttingQuantity1,
    variableFormInfoDieCuttingTotalCost1:
      state.variableFormInfoDieCuttingTotalCost1,
    variableFormInfoDieCuttingQuantity2:
      state.variableFormInfoDieCuttingQuantity2,
    variableFormInfoDieCuttingTotalCost2:
      state.variableFormInfoDieCuttingTotalCost2,
    variableFormInfoDieCuttingQuantity3:
      state.variableFormInfoDieCuttingQuantity3,
    variableFormInfoDieCuttingTotalCost3:
      state.variableFormInfoDieCuttingTotalCost3,

    variableFormInfoMakingQuantity1: state.variableFormInfoMakingQuantity1,
    variableFormInfoMakingTotalCost1: state.variableFormInfoMakingTotalCost1,
    variableFormInfoMakingQuantity2: state.variableFormInfoMakingQuantity2,
    variableFormInfoMakingTotalCost2: state.variableFormInfoMakingTotalCost2,
    variableFormInfoMakingQuantity3: state.variableFormInfoMakingQuantity3,
    variableFormInfoMakingTotalCost3: state.variableFormInfoMakingTotalCost3,

    variableFormInfoPackagingDeliveryQuantity1:
      state.variableFormInfoPackagingDeliveryQuantity1,
    variableFormInfoPackagingDeliveryTotalCost1:
      state.variableFormInfoPackagingDeliveryTotalCost1,
    variableFormInfoPackagingDeliveryQuantity2:
      state.variableFormInfoPackagingDeliveryQuantity2,
    variableFormInfoPackagingDeliveryTotalCost2:
      state.variableFormInfoPackagingDeliveryTotalCost2,
    variableFormInfoPackagingDeliveryQuantity3:
      state.variableFormInfoPackagingDeliveryQuantity3,
    variableFormInfoPackagingDeliveryTotalCost3:
      state.variableFormInfoPackagingDeliveryTotalCost3,
  };
};
