export const baseFormDataEnter = (payload) => ({
  type: "baseFormDataEnter",
  payload,
});

export const baseFormValidateCalculate = () => ({
  type: "baseFormValidateCalculate",
});

export const fixedFormDataEnter = (payload) => {
  return { type: "fixedFormDataEnter", payload };
};

export const variableFormDataEnter = (payload) => {
  return { type: "variableFormDataEnter", payload };
};

export const totalFormDataEnter = (payload) => {
  console.log(payload);
  return { type: "totalFormDataEnter", payload };
};

export const setFormUpdate = (payload) => ({
  type: "SET_FORM_FOR_UPDATE",
  payload,
});
