import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import countryList from "react-select-country-list";
import "react-phone-input-2/lib/style.css";
import FormValidation from "../../utils/FormValidation";
import Summary from "../Summary/Summary";
import PropTypes from "prop-types";
import { customStyles } from "../../utils/customStyles";

export default function FormField({ state, dispatch }) {
  const countries = countryList().getData();

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
    const error = FormValidation(field, value, state);
    dispatch({ type: "SET_ERROR", field, value: error });
  };

  const validateForm = (formState) => {
    const errors = {};
    Object.keys(formState).forEach((field) => {
      if (field !== "errors") {
        const error = FormValidation(field, formState[field], formState);
        if (error) {
          errors[field] = error;
        }
      }
    });

    if (!formState.paymentMethod) {
      errors.paymentMethod = "Payment method is required";
    }

    if (formState.paymentMethod === "eMoney") {
      if (!formState.eMoneyNumber) {
        errors.eMoneyNumber = "e-Money Number is required";
      }
      if (!formState.eMoneyPin) {
        errors.eMoneyPin = "e-Money PIN is required";
      }
    }
    return errors;
  };

  return (
    <div className="mb-60">
      <form className="flex flex-col justify-center items-start lg:flex-row lg:justify-between lg:items-start lg:gap-6 gap-12">
        <div className="bg-white pb-16 pt-16 text-black lg:w-[70%] w-full rounded-md shadow-2xl">
          <div className="w-[90%] mx-auto">
            <div className="font-extrabold text-4xl">
              <h3 className="uppercase mb-10">Checkout</h3>
            </div>
            <div className="flex flex-col gap-16">
              <div className="">
                <div className="my-5">
                  <h5 className="uppercase font-bold text-peru text-base">
                    Billing Details
                  </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="name" className="font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Please enter your full name"
                      className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                      value={state.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    {state.errors.name && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
                        {state.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="email" className="font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Please enter your email address"
                      className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                      value={state.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {state.errors.email && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
                        {state.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="number" className="font-bold">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"us"}
                      value={state.phoneNumber}
                      onChange={(value) => handleChange("phoneNumber", value)}
                      placeholder="Please enter your phone number"
                      inputProps={{
                        name: "phoneNumber",
                        required: true,
                        placeholder: "Please enter your phone number",
                        className:
                          "md:w-full border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs placeholder:pl-5 caret-color-peru",
                      }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                    />
                    {state.errors.phoneNumber && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
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
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="address" className="font-bold">
                      Address
                    </label>
                    <input
                      type="url"
                      id="address"
                      name="address"
                      placeholder="Please enter your address"
                      className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                      value={state.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                    />
                    {state.errors.address && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
                        {state.errors.address}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="zip-code" className="font-bold">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zip-code"
                      name="zip-code"
                      placeholder="Please enter your zip code"
                      className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                      value={state.zipCode}
                      onChange={(e) => handleChange("zipCode", e.target.value)}
                    />
                    {state.errors.zipCode && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
                        {state.errors.zipCode}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="city" className="font-bold">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Please enter your city"
                      className="md:w-[100%] border rounded-md py-2 px-5 outline-none	bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                      value={state.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                    />
                    {state.errors.city && (
                      <p className="text-red-700 text-xs focus:ring-red-700 ">
                        {state.errors.city}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <label htmlFor="country" className="font-bold">
                      Country
                    </label>
                    <Select
                      options={countries}
                      value={state.country}
                      onChange={(value) => handleChange("country", value)}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      styles={customStyles}
                    />
                    {state.errors.country && (
                      <p className="text-red-700 text-xs focus:ring-red-700 ">
                        {state.errors.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mb-5">
                  <h5 className="uppercase font-bold text-peru">
                    Payment Info
                  </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-3 gap-6">
                  <div className="">
                    <h6 className="font-bold text-sm">Payment Method</h6>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div
                      className={`flex items-center border rounded-md py-2 px-5 ${
                        state.paymentMethod === "eMoney" ? "border-peru" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id="e-money"
                        name="payment-method"
                        className="checked:border-peru checked:bg-peru mr-2 appearance-none"
                        value="eMoney"
                        checked={state.paymentMethod === "eMoney"}
                        onChange={(e) =>
                          handleChange("paymentMethod", e.target.value)
                        }
                      />
                      <label htmlFor="e-money" className="font-bold text-xs">
                        e-Money
                      </label>
                    </div>
                    <div
                      className={`flex items-center border rounded-md py-2 px-5 ${
                        state.paymentMethod === "cashOnDelivery"
                          ? "border-peru"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        id="cash-on-delivery"
                        name="payment-method"
                        className="checked:border-peru checked:bg-peru mr-2"
                        value="cashOnDelivery"
                        checked={state.paymentMethod === "cashOnDelivery"}
                        onChange={(e) =>
                          handleChange("paymentMethod", e.target.value)
                        }
                      />
                      <label
                        htmlFor="cash-on-delivery"
                        className="font-bold text-xs"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                    {state.errors.paymentMethod && (
                      <p className="text-red-700 text-xs focus:ring-red-700">
                        {state.errors.paymentMethod}
                      </p>
                    )}
                  </div>
                </div>
                {state.paymentMethod === "eMoney" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:mt-5">
                    <div className="flex flex-col">
                      <label
                        htmlFor="eMoneyNumber"
                        className="text-black mb-2 font-bold text-xs"
                      >
                        e-Money Number
                      </label>
                      <input
                        type="text"
                        id="eMoneyNumber"
                        name="eMoneyNumber"
                        placeholder="Enter your e-Money Number"
                        className="w-full border rounded-md py-1 px-5 outline-none bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                        value={state.eMoneyNumber}
                        onChange={(e) =>
                          handleChange("eMoneyNumber", e.target.value)
                        }
                      />
                      {state.errors.eMoneyNumber && (
                        <p className="text-red-700 text-xs focus:ring-red-700">
                          {state.errors.eMoneyNumber}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="eMoneyPin"
                        className="text-black mb-2 font-bold text-xs"
                      >
                        e-Money PIN
                      </label>
                      <input
                        type="text"
                        id="eMoneyPin"
                        name="eMoneyPin"
                        placeholder="Enter your e-Money PIN"
                        className="w-full border rounded-md py-1 px-5 outline-none bg-transparent focus:border-peru focus:ring-0 placeholder:text-xs caret-color-peru"
                        value={state.eMoneyPin}
                        onChange={(e) =>
                          handleChange("eMoneyPin", e.target.value)
                        }
                      />
                      {state.errors.eMoneyPin && (
                        <p className="text-red-700 text-xs focus:ring-red-700">
                          {state.errors.eMoneyPin}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {state.paymentMethod === "cashOnDelivery" && (
                  <div className="mt-10 lg:mt-5 flex md:flex-row gap-1 md:gap-3 justify-center items-center ">
                    <svg
                      width="48"
                      height="48"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[19%] md:w-[10%] "
                    >
                      <path
                        d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                        fill="#D87D4A"
                      />
                    </svg>
                    <p className="text-black text-xs w-[80%] md:w-[85%]">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Summary
          formState={state}
          validateForm={validateForm}
          dispatch={dispatch}
        />
      </form>
    </div>
  );
}

FormField.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zipCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }).isRequired,
    paymentMethod: PropTypes.string.isRequired,
    eMoneyNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    eMoneyPin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    errors: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.string,
      address: PropTypes.string,
      zipCode: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      paymentMethod: PropTypes.string,
      eMoneyNumber: PropTypes.string,
      eMoneyPin: PropTypes.string,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};
