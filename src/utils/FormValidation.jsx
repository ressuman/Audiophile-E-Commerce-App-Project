export default function FormValidation(name, value, state) {
  let error = "";

  switch (name) {
    case "name":
      if (!value) error = "Name is required";
      break;
    case "email":
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Email is invalid";
      break;
    case "phoneNumber":
      if (!value) error = "Phone number is required";
      break;
    case "address":
      if (!value) error = "Address is required";
      break;
    case "zipCode":
      if (!value) error = "Zip Code is required";
      break;
    case "city":
      if (!value) error = "City is required";
      break;
    case "paymentMethod":
      if (!value) error = "Payment Method is required";
      break;
    case "eMoneyNumber":
      if (state.paymentMethod === "eMoney" && !value)
        error = "e-Money Number is required";
      break;
    case "eMoneyPin":
      if (state.paymentMethod === "eMoney" && !value)
        error = "e-Money PIN is required";
      break;
    default:
      break;
  }

  return error;
}
