import { NavLink } from "react-router-dom";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <header className="bg-chinese-black text-white">
      {/* Small Screen Layout */}
      <nav className="text-white flex items-center justify-between w-[90%] mx-auto py-6 border-b-6 border-indigo-500 md:hidden">
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
        <div className="flex items-center">
          <NavLink to="#">
            <IoCartOutline
              size={21}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Medium Screen Layout */}
      <nav className="hidden md:flex items-center justify-between w-[85%] mx-auto py-6 border-b-6 border-indigo-500 lg:hidden">
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
        <div className="flex items-center">
          <NavLink to="#">
            <IoCartOutline
              size={23}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Large Screen Layout */}
      <nav className="hidden lg:flex lg:justify-between lg:items-center lg:w-[80%] mx-auto py-6 border-b-6 border-indigo-500">
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
        <div className="flex items-center">
          <NavLink to="#">
            <IoCartOutline
              size={25}
              className="transition-transform duration-300 hover:scale-110 hover:text-peru"
            />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs text-center rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </nav>

      {/* Dropdown Menu for Small and Medium Screens */}
      <div
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-[#171819]`}
      >
        <ul className="flex flex-col space-y-4 text-center md:text-start md:mx-12">
          <li>
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
          <li>
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
          <li>
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
          <li>
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
