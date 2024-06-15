import { NavLink } from "react-router-dom";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function NavigationBar({ toggleCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-black text-white sticky top-0 left-0 w-full z-40">
      {/* Small Screen Layout */}
      <nav className="text-white bg-black flex items-center justify-between w-[90%] mx-auto py-6 border-b-4 border-chinese-black md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`transform transition-transform duration-300 ${
            menuOpen ? "rotate-90 text-peru" : ""
          }`}
        >
          {menuOpen ? <IoClose size={21} /> : <IoMenu size={21} />}
        </button>
        <div className="font-bold text-lg transform transition-transform duration-300 hover:translate-x-2 hover:text-peru">
          <NavLink to="/">audiophile</NavLink>
        </div>
        <div className="flex items-center relative">
          <button onClick={toggleCart}>
            <IoCartOutline
              size={21}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-peru text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Medium Screen Layout */}
      <nav className="hidden md:text-white md:bg-black md:flex items-center justify-between md:w-[85%] mx-auto py-6 md:border-b-4 md:border-chinese-black lg:hidden">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transform transition-transform duration-300 ${
              menuOpen ? "rotate-90 text-peru" : ""
            }`}
          >
            {menuOpen ? <IoClose size={23} /> : <IoMenu size={23} />}
          </button>
          <div className="font-bold md:text-xl ml-4 transform transition-transform duration-300 hover:translate-x-2 hover:text-peru">
            <NavLink to="/">audiophile</NavLink>
          </div>
        </div>
        <div className="flex items-center relative">
          <button onClick={toggleCart}>
            <IoCartOutline
              size={23}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-peru text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Large Screen Layout */}
      <nav className="hidden lg:text-white lg:bg-black lg:flex lg:justify-between lg:items-center lg:w-[80%] mx-auto py-6 lg:border-b-4 lg:border-chinese-black">
        <div className="font-bold text-2xl transform transition-transform duration-300 hover:translate-x-2 hover:text-peru">
          <NavLink to="/">audiophile</NavLink>
        </div>
        <div className="font-light text-xs">
          <ul className="lg:flex lg:gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-peru"
                    : "transition-colors duration-300 hover:text-tangelo"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/headphones"
                className={({ isActive }) =>
                  isActive
                    ? "text-peru"
                    : "transition-colors duration-300 hover:text-tangelo"
                }
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive
                    ? "text-peru"
                    : "transition-colors duration-300 hover:text-tangelo"
                }
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/earphones"
                className={({ isActive }) =>
                  isActive
                    ? "text-peru"
                    : "transition-colors duration-300 hover:text-tangelo"
                }
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center relative">
          <button onClick={toggleCart}>
            <IoCartOutline
              size={25}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-peru text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu for Small and Medium Screens */}
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-chinese-black w-[90%] mx-auto md:w-[50%] bg-opacity-50`}
      >
        <ul className="flex flex-col space-y-4 text-center md:text-start md:w-2/3 md:bg-black py-4 rounded-lg shadow-lg mx-auto z-30">
          <li className="transition-transform duration-300 md:duration-500 md:ml-0">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-peru"
                  : "transition-colors duration-300 hover:text-tangelo"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="transition-transform duration-300 md:duration-500 md:ml-10">
            <NavLink
              to="/headphones"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-peru"
                  : "transition-colors duration-300 hover:text-tangelo"
              }
            >
              HEADPHONES
            </NavLink>
          </li>
          <li className="transition-transform duration-300 md:duration-500 md:ml-0">
            <NavLink
              to="/speakers"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-peru"
                  : "transition-colors duration-300 hover:text-tangelo"
              }
            >
              SPEAKERS
            </NavLink>
          </li>
          <li className="transition-transform duration-300 md:duration-500 md:ml-10">
            <NavLink
              to="/earphones"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-peru"
                  : "transition-colors duration-300 hover:text-tangelo"
              }
            >
              EARPHONES
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

NavigationBar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};
