import { useReducer } from "react";

export const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  city: "",
  country: { label: "United States", value: "US" },
  paymentMethod: "",
  eMoneyNumber: "",
  eMoneyPin: "",
  errors: {},
  total: 0,
  shipping: 0,
  vat: 0,
  grandTotal: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.value },
      };
    case "SET_TOTALS":
      return { ...state, ...action.totals };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

export function useUserReducer() {
  return useReducer(reducer, initialState);
}
