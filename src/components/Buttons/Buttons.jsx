import { IoChevronForwardSharp } from "react-icons/io5";

export const ButtonBordered = () => {
  return (
    <button className="bg-peru hover:bg-tangelo text-white  font-normal lg:text-sm md:text-xs text-xs py-2 px-4">
      SEE PRODUCT
    </button>
  );
};

export const ButtonOutline = () => {
  return (
    <button className="bg-white hover:bg-black text-black  font-normal lg:text-sm md:text-xs text-xs hover:text-white py-2 px-4 border border-black hover:border-white">
      SEE PRODUCT
    </button>
  );
};

export const ButtonNoOutline = () => {
  return (
    <button className="bg-transparent  font-normal lg:text-sm md:text-xs text-xs hover:text-peru py-2 px-4 inline-flex items-center">
      SHOP
      <IoChevronForwardSharp className="text-peru ml-1" />
    </button>
  );
};
