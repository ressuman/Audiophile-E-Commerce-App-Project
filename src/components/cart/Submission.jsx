import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";

export default function Submission({
  isOpen,
  onClose,
  totalAmount,
  summaryCartItems,
}) {
  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowItems = () => setShowAllItems(!showAllItems);

  if (!isOpen) return null;

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md shadow-lg relative w-[90%] md:w-[85%] lg:w-[80%] max-w-md mx-4">
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                strokeWidth="4"
                d="m20.754 33.333 6.751 6.751 15.804-15.803"
              />
            </g>
          </svg>
          <h3 className="uppercase font-bold lg:text-3xl md:text-2xl text-xl mt-6 mb-4">
            Thank you <br /> for your order
          </h3>
          <p className="mb-4">
            You will receive an email confirmation shortly.
          </p>
          <div className="rounded-md flex">
            <div className="bg-flash-white w-[60%] flex flex-col justify-center items-center">
              <div className="rounded-md flex flex-col py-4  w-[90%]">
                {showAllItems
                  ? summaryCartItems.map((item) => (
                      <div
                        className="flex items-center gap-4 mb-6"
                        key={item.id}
                      >
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
                            <p className="font-bold text-[0.8rem]">
                              {item.name}
                            </p>
                            <p className="text-[0.8rem]">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-[0.8rem]">
                              x{item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  : summaryCartItems.slice(0, 1).map((item) => (
                      <div
                        className="flex items-center gap-4 mb-6"
                        key={item.id}
                      >
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
                            <p className="font-bold text-[0.8rem]">
                              {item.name}
                            </p>
                            <p className="text-[0.8rem]">
                              {formatCurrency(item.price)}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-[0.8rem]">
                              x{item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                <hr className="bg-black my-3" />
                <button
                  onClick={toggleShowItems}
                  className="text-chinese-black "
                >
                  {showAllItems
                    ? "Show Less"
                    : `and ${summaryCartItems.length - 1} other item(s)`}
                </button>
              </div>
            </div>
            <div className="bg-black w-[40%] flex flex-col justify-center items-center">
              <p className="uppercase text-flash-white">Grand Total</p>
              <p className="font-semibold  text-white">
                {formatCurrency(totalAmount)}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/">
              <button
                type="button"
                className="px-6 py-2.5 w-full bg-peru hover:bg-tangelo text-white uppercase"
              >
                Back To Home
              </button>
            </Link>
          </div>
          <button
            className="absolute top-2 right-2 text-black"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

Submission.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
  summaryCartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
