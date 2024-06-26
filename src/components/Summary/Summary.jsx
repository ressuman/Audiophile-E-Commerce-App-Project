import { useEffect, useState } from "react";
import {
  cartItems as selectCartItems,
  totalAmount as selectTotalAmount,
} from "../../redux/slice/cartSlice";
import { formatCurrency } from "../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import Submission from "../cart/Submission";
import PropTypes from "prop-types";

export default function Summary({ formState, validateForm, dispatch }) {
  const reduxDispatch = useDispatch();

  const summaryCartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  const [isModalOpen, setModalOpen] = useState(false);

  const state = {
    total: totalAmount,
    shipping: 50,
    vat: totalAmount * 0.2,
    grandTotal: totalAmount + 50 + totalAmount * 0.2,
  };

  useEffect(() => {
    const calculateTotals = () => {
      const total = summaryCartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      const shipping = 50;
      const vat = total * 0.2;
      const grandTotal = total + shipping + vat;

      dispatch({
        type: "SET_TOTALS",
        totals: { total, shipping, vat, grandTotal },
      });
    };

    calculateTotals();
  }, [summaryCartItems, reduxDispatch]);

  const handleButtonClick = () => {
    const formErrors = validateForm(formState);

    if (Object.keys(formErrors).length === 0) {
      setModalOpen(true);
      dispatch({ type: "RESET_FORM" });
    } else {
      Object.keys(formErrors).forEach((field) => {
        dispatch({ type: "SET_ERROR", field, value: formErrors[field] });
      });
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white pb-12 pt-12 text-black lg:w-[30%] w-full rounded-md shadow-2xl">
      <div className="lg:w-[85%] w-[90%] mx-auto">
        <div className="font-extrabold text-xl mb-10">
          <h3 className="uppercase">Summary</h3>
        </div>
        {summaryCartItems.length === 0 ? (
          <div className="flex justify-center flex-col items-center text-black">
            <p className="text-lg">Your cart is empty</p>
            <IoCartOutline size={70} />
          </div>
        ) : (
          <>
            {summaryCartItems.map((item) => (
              <div className="flex items-center gap-4 mb-6" key={item.id}>
                <div>
                  <img
                    src={item.image.desktop}
                    width="50px"
                    alt={item.name}
                    className="rounded-md"
                  />
                </div>
                <div className="flex justify-between w-full items-start gap-3">
                  <div className="flex flex-col">
                    <p className="font-bold text-[0.8rem]">{item.name}</p>
                    <p className="text-[0.8rem]">
                      $ {item.price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[0.8rem]">x{item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}{" "}
            <div className="space-y-1">
              <div className="flex justify-between">
                <p className="uppercase text-xs">Total</p>
                <p className="font-extrabold text-sm">
                  {formatCurrency(state.total)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="uppercase text-xs">Shipping</p>
                <p className="font-extrabold text-sm">
                  {formatCurrency(state.shipping)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="uppercase text-xs">VAT (Included)</p>
                <p className="font-extrabold text-sm">
                  {formatCurrency(state.vat)}
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between mt-6">
                <p className="uppercase text-xs ">Grand Total</p>
                <p className="font-extrabold text-peru text-sm">
                  {formatCurrency(state.grandTotal)}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="px-6 py-2.5 w-full bg-peru hover:bg-tangelo text-white uppercase"
                onClick={handleButtonClick}
              >
                Continue & Pay
              </button>
            </div>
          </>
        )}
      </div>
      <Submission
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        totalAmount={state.grandTotal}
        summaryCartItems={summaryCartItems}
      />
    </div>
  );
}

Summary.propTypes = {
  formState: PropTypes.shape({
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
    eMoneyPIN: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
      eMoneyPIN: PropTypes.string,
    }).isRequired,
  }).isRequired,
  validateForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
