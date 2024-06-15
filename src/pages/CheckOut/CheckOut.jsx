import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import countryList from "react-select-country-list";
import "react-phone-input-2/lib/style.css";
import { useReducer, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { cartItems, totalAmount } from "../../redux/slice/cartSlice";

const initialState = {
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

function reducer(state, action) {
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
    default:
      return state;
  }
}

function validateField(name, value, state) {
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

function calculateTotals(cartItems) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = total > 0 ? 10 : 0; // Example shipping cost
  const vat = total * 0.2; // Example VAT (20%)
  const grandTotal = total + shipping + vat;
  return { total, shipping, vat, grandTotal };
}

export default function CheckOut() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const cartItems = useSelector(cartItems); // Get cart items from Redux store
  const total = useSelector(totalAmount); // Get total amount from Redux store
  const countries = countryList().getData();

  useEffect(() => {
    // Calculate totals
    const totals = calculateTotals(cartItems);
    dispatch({ type: "SET_TOTALS", totals });
  }, [cartItems]);

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
    const error = validateField(field, value, state);
    dispatch({ type: "SET_ERROR", field, value: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    for (const field in initialState) {
      if (field !== "errors") {
        const error = validateField(field, state[field], state);
        if (error) errors[field] = error;
      }
    }

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERROR", field: "form", value: errors });
      return;
    }

    console.log("Form submitted successfully", state);
  };

  useEffect(() => {
    const error = validateField("country", state.country, state);
    dispatch({ type: "SET_ERROR", field: "country", value: error });
  }, [state.country]);

  // function calculateTotals(cartItems) {
  //   const total = cartItems.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0
  //   );
  //   const shipping = total > 0 ? 10 : 0; // Example shipping cost
  //   const vat = total * 0.2; // Example VAT (20%)
  //   const grandTotal = total + shipping + vat;
  //   return { total, shipping, vat, grandTotal };
  // }

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="mt-10 mb-16 relative">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline hover:text-peru"
        >
          Go Back
        </button>
      </div>

      <div className="w-full mb-60 ">
        <form
          className="flex justify-center items-start gap-6"
          onSubmit={handleSubmit}
          action=""
          method=""
        >
          <div className="bg-white pb-6 pt-16 text-black lg:w-[70%] rounded-md shadow-2xl">
            <div className="w-[90%] mx-auto">
              <div className="font-extrabold text-4xl">
                <h3 className="uppercase mb-10">Checkout</h3>
              </div>
              <div className=" flex flex-col gap-16">
                <div className="">
                  <div className="my-5">
                    <h5 className="uppercase font-bold text-peru">
                      Billing Details
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Please enter your full name"
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru"
                        value={state.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      {state.errors.name && (
                        <p className="text-red-500 text-sm">
                          {state.errors.name}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Please enter your email address"
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru"
                        value={state.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                      {state.errors.email && (
                        <p className="text-red-500 text-sm">
                          {state.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="number" className="font-bold">
                        Phone Number
                      </label>
                      <PhoneInput
                        country={"us"}
                        value={state.phoneNumber}
                        onChange={(value) => handleChange("phoneNumber", value)}
                        inputProps={{
                          name: "phoneNumber",
                          required: true,
                          className:
                            "md:w-[100%] border rounded-md py-2 px-5 outline-none bg-transparent focus:border-peru",
                        }}
                      />
                      {state.errors.phoneNumber && (
                        <p className="text-red-500 text-sm">
                          {state.errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="mb-5">
                    <h5 className="uppercase font-bold text-peru">
                      Shipping Info
                    </h5>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="address" className="font-bold">
                        Address
                      </label>
                      <input
                        type="url"
                        id="address"
                        name="address"
                        placeholder="Please enter your address"
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru"
                        value={state.address}
                        onChange={(e) =>
                          handleChange("address", e.target.value)
                        }
                      />
                      {state.errors.address && (
                        <p className="text-red-500 text-sm">
                          {state.errors.address}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="zip-code" className="font-bold">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zip-code"
                        name="zip-code"
                        placeholder="Please enter your zip code"
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru"
                        value={state.zipCode}
                        onChange={(e) =>
                          handleChange("zipCode", e.target.value)
                        }
                      />
                      {state.errors.zipCode && (
                        <p className="text-red-500 text-sm">
                          {state.errors.zipCode}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="city" className="font-bold">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Please enter your city"
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none focus:border-peru	bg-transparent "
                        value={state.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                      />
                      {state.errors.city && (
                        <p className="text-red-500 text-sm">
                          {state.errors.city}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <label htmlFor="country" className="font-bold">
                        Country
                      </label>
                      <Select
                        options={countries}
                        value={state.country}
                        onChange={(value) => handleChange("country", value)}
                        className="md:w-[100%] border rounded-md py-2 px-5 outline-none bg-transparent focus:border-peru"
                      />
                      {state.errors.country && (
                        <p className="text-red-500 text-sm">
                          {state.errors.country}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="mb-5">
                    <h5 className="uppercase text-peru font-bold">
                      Payment Details
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                      <p className="font-bold">Payment Method</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center border rounded-md py-2 px-5">
                        <input
                          type="radio"
                          id="eMoney"
                          name="payment"
                          value="eMoney"
                          className="form-radio text-peru mr-4"
                          checked={state.paymentMethod === "eMoney"}
                          onChange={(e) =>
                            handleChange("paymentMethod", e.target.value)
                          }
                        />
                        <label
                          htmlFor="eMoney"
                          className="text-black font-bold"
                        >
                          e-Money
                        </label>
                      </div>
                      <div className="flex items-center border rounded-md py-2 px-5">
                        <input
                          type="radio"
                          id="cashOnDelivery"
                          name="payment"
                          value="cashOnDelivery"
                          className="form-radio text-peru mr-4"
                          checked={state.paymentMethod === "cashOnDelivery"}
                          onChange={(e) =>
                            handleChange("paymentMethod", e.target.value)
                          }
                        />
                        <label
                          htmlFor="cashOnDelivery"
                          className="text-black font-bold"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor="eMoneyNumber"
                        className="text-black mb-2 font-bold"
                      >
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        id="eMoneyNumber"
                        name="eMoneyNumber"
                        placeholder="Enter your e-Money Number"
                        className="w-full border rounded-md py-2 px-5 outline-none bg-transparent"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="eMoneyPin"
                        className="text-black mb-2 font-bold"
                      >
                        e-Money PIN
                      </label>
                      <input
                        type="text"
                        id="eMoneyPin"
                        name="eMoneyPin"
                        placeholder="Enter your e-Money PIN"
                        className="w-full border rounded-md py-2 px-5 outline-none bg-transparent"
                      />
                    </div>
                  </div> */}
                  {state.paymentMethod === "eMoney" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex flex-col">
                        <label
                          htmlFor="eMoneyNumber"
                          className="text-black mb-2 font-bold"
                        >
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          id="eMoneyNumber"
                          name="eMoneyNumber"
                          placeholder="Enter your e-Money Number"
                          className="w-full border rounded-md py-2 px-5 outline-none bg-transparent focus:border-peru"
                          value={state.eMoneyNumber}
                          onChange={(e) =>
                            handleChange("eMoneyNumber", e.target.value)
                          }
                        />
                        {state.errors.eMoneyNumber && (
                          <p className="text-red-500 text-sm">
                            {state.errors.eMoneyNumber}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="eMoneyPin"
                          className="text-black mb-2 font-bold"
                        >
                          e-Money PIN
                        </label>
                        <input
                          type="text"
                          id="eMoneyPin"
                          name="eMoneyPin"
                          placeholder="Enter your e-Money PIN"
                          className="w-full border rounded-md py-2 px-5 outline-none bg-transparent focus:border-peru"
                          value={state.eMoneyPin}
                          onChange={(e) =>
                            handleChange("eMoneyPin", e.target.value)
                          }
                        />
                        {state.errors.eMoneyPin && (
                          <p className="text-red-500 text-sm">
                            {state.errors.eMoneyPin}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black lg:w-[30%] rounded-md shadow-2xl pt-12 pb-12">
            <div className="w-[90%] mx-auto">
              <div className="font-extrabold text-xl mb-6">
                <h4 className="uppercase">Summary</h4>
              </div>
              {/* {state.cartItems.length === 0 ? (
                <div className="flex justify-center flex-col items-center text-black">
                  <p className="text-lg">Your cart is empty</p>
                  <IoCartOutline size={70} />
                </div>
              ) : (
                <>
                  {state.cartItems.map((item) => (
                    <div className="flex items-center gap-4 mb-6" key={item.id}>
                      <div>
                        <img
                          src={item.image.desktop}
                          width="30px"
                          alt={item.name}
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex justify-between w-full items-center gap-3">
                        <div className="flex flex-col">
                          <p className="font-bold text-[0.8rem]">{item.name}</p>
                          <p className="text-[0.8rem]">$ {item.price}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-[0.8rem] py-1 px-3 font-semibold bg-flash-white">
                            x{item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="font-bold">Total</p>
                      <p className="font-bold">
                        ${state.totalAmount.toLocaleString("en-US")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Shipping</p>
                      <p className="font-bold">
                        ${state.shipping.toLocaleString("en-US")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">VAT (Included)</p>
                      <p className="font-bold">
                        ${state.vat.toLocaleString("en-US")}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Grand Total</p>
                      <p className="font-bold">
                        ${state.grandTotal.toLocaleString("en-US")}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/checkout">
                      <button
                        type="button"
                        className="px-6 py-2.5 w-full bg-peru hover:bg-tangelo text-white uppercase"
                      >
                        Continue & Pay
                      </button>
                    </Link>
                  </div>
                </>
              )} */}

              <div className="flex flex-col gap-4">
                {state.cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-500">x{item.quantity}</p>
                    </div>
                    <p className="font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-bold">${state.total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">Shipping</p>
                <p className="font-bold">${state.shipping.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-500">VAT (Included)</p>
                <p className="font-bold">${state.vat.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-gray-500">Grand Total</p>
                <p className="font-bold text-peru">
                  ${state.grandTotal.toFixed(2)}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-peru text-white py-2 px-4 mt-6 rounded-md"
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
