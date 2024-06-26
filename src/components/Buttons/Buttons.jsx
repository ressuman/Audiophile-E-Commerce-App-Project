import { IoChevronForwardSharp } from "react-icons/io5";
import PropTypes from "prop-types";

export const ButtonBordered = () => {
  return (
    <button className="bg-peru hover:bg-tangelo text-white  font-normal lg:text-sm md:text-xs text-xs py-2 px-4 uppercase">
      SEE PRODUCT
    </button>
  );
};

export const ButtonBordered1 = ({ handleAction }) => {
  return (
    <button
      onClick={handleAction}
      className="bg-peru hover:bg-tangelo text-white  font-normal lg:text-sm md:text-xs text-xs py-2 px-4 uppercase"
    >
      ADD TO CART
    </button>
  );
};

ButtonBordered1.propTypes = {
  handleAction: PropTypes.func.isRequired,
};

export const ButtonOutline1 = () => {
  return (
    <button className="bg-transparent hover:bg-black text-chinese-black  font-normal lg:text-sm md:text-xs text-xs hover:text-white py-2 px-4 border border-chinese-black uppercase">
      SEE PRODUCT
    </button>
  );
};

export const ButtonOutline2 = () => {
  return (
    <button className="bg-black hover:bg-yankees-blue text-white  font-normal lg:text-sm md:text-xs text-xs py-2 px-4 uppercase">
      SEE PRODUCT
    </button>
  );
};

export const ButtonNoOutline = () => {
  return (
    <button className="bg-transparent  font-normal lg:text-sm md:text-xs text-xs hover:text-peru py-2 px-4 inline-flex items-center uppercase">
      SHOP
      <IoChevronForwardSharp className="text-peru ml-1" />
    </button>
  );
};
