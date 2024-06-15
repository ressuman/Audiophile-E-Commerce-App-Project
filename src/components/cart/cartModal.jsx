import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  addItemToCart,
  cartItems,
  clearCart,
  decreaseQuantity,
  totalAmount,
  totalQuantity,
} from "../../redux/slice/cartSlice";
import ToastAlert from "../../utils/toastAlert";
import { IoCartOutline } from "react-icons/io5";

export default function CartModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const items = useSelector(cartItems);
  const amount = useSelector(totalAmount);
  const quantity = useSelector(totalQuantity);

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleIncrement = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());

    setToastMessage("There are no products in the cart. Cart is now empty");
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto my-10 relative ">
        <div className="fixed inset-0 p-4 flex flex-wrap justify-end items-start w-full h-full z-[1000] overflow-auto before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)]">
          <div
            ref={modalRef}
            className="absolute top-[17%] right-[6%] md:right-[8%] lg:right-[10%] w-full max-w-[70%] md:max-w-md bg-white shadow-lg p-4 rounded-md "
          >
            <div className="flex justify-between items-center">
              <h4 className="text-[0.8rem] font-bold text-black uppercase">
                CART ({quantity})
              </h4>
              <button
                className="hover:underline hover:text-peru text-chinese-black text-[0.8rem]"
                onClick={handleClearCart}
              >
                Remove All
              </button>
            </div>
            {items.length === 0 ? (
              <div className="flex justify-center flex-col items-center text-black">
                <p className="text-lg">Your cart is empty</p>
                <IoCartOutline size={150} />
              </div>
            ) : (
              <div className="space-y-6 mt-6">
                {items.map((item) => {
                  return (
                    <div className="flex items-center gap-4" key={item.id}>
                      <div>
                        <img
                          src={item.image.desktop}
                          width="60px"
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
                          <button
                            onClick={() => handleDecrement(item)}
                            className="bg-flash-white text-chinese-black hover:text-peru px-3 py-1 hover:bg-[#d3d3d3] font-normal text-[0.8rem]"
                          >
                            -
                          </button>
                          <span className="text-[0.8rem] py-1 px-3 font-semibold bg-flash-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item)}
                            className="bg-flash-white text-chinese-black hover:text-peru px-3 py-1 hover:bg-[#d3d3d3] font-normal text-[0.8rem]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center">
                  <span className="text-[0.9rem] font-normal uppercase text-black">
                    Total
                  </span>
                  <span className="text-[1rem] font-semibold text-black">
                    ${amount.toLocaleString("en-US")}
                  </span>
                </div>
                <div>
                  <Link
                    to="/checkout"
                    className="flex max-sm:flex-col gap-4 !mt-8"
                  >
                    <button
                      type="button"
                      className="px-6 py-2.5 w-full bg-peru hover:bg-tangelo text-white uppercase"
                      onClick={onClose}
                    >
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showToast && (
        <ToastAlert
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
