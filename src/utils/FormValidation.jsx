export default function FormValidation(field, value, state) {
  let error = "";

  switch (field) {
    case "name":
      if (!value) {
        error = "Name is required";
      } else if (value.length < 3) {
        error = "Name must be at least 3 characters long";
      }
      break;
    case "email":
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email address is invalid";
      }
      break;
    case "phoneNumber":
      if (!value) {
        error = "Phone number is required";
      } else if (value.length < 10) {
        error = "Phone number must be at least 10 digits long";
      }
      break;
    case "address":
      if (!value) {
        error = "Address is required";
      }
      break;
    case "zipCode":
      if (!value) {
        error = "Zip Code is required";
      }
      break;
    case "city":
      if (!value) {
        error = "City is required";
      }
      break;
    case "country":
      if (!value) {
        error = "Country is required";
      }
      break;
    case "paymentMethod":
      if (!value) {
        error = "Payment method is required";
      }
      break;
    case "eMoneyNumber":
      if (!value && state.paymentMethod === "e-Money") {
        error = "e-Money Number is required";
      }
      break;
    case "eMoneyPIN":
      if (!value && state.paymentMethod === "e-Money") {
        error = "e-Money PIN is required";
      }
      break;
    default:
      break;
  }

  return error;
}
