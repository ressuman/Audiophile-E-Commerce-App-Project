import { NavLink } from "react-router-dom";

export const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="">
      <div className="">
        <div className="my-[10rem] w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-4 md:gap-2 lg:gap-6">
          <div className="order-2 lg:order-1 flex justify-center items-start flex-col rounded-md h-[25rem] md:gray w-full lg:w-1/2 p-2 md:p-10 lg:p-0 gap-8">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center lg:text-start md:px-6 lg:px-0">
              Bringing you the <span className="text-peru">best</span> audio
              gear
            </h3>
            <p className="text-center lg:text-start text-chinese-black md:text-base">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="order-1 lg:order-2 bg-footer-image-mobile md:bg-footer-image-tablet lg:bg-footer-image-desktop rounded-md h-[20rem] md:h-[22rem] lg:h-[35rem] w-full lg:w-1/2 bg-cover bg-center"></div>
        </div>

        <div className="bg-black w-full pb-10">
          <div className=" w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
            <div className="flex justify-center md:justify-start lg:justify-start">
              <div className="bg-peru w-[20%] md:w-[11%] lg:w-[10%] h-1 mb-16 rounded-lg"></div>
            </div>

            <div className="text-white flex flex-col gap-10 justify-center items-center md:justify-between md:items-start lg:items-center lg:flex-row">
              <div className="font-bold text-lg md:text-xl lg:text-2xl transform transition-transform duration-300 hover:translate-x-2 hover:text-peru">
                <NavLink to="/">audiophile</NavLink>
              </div>
              <div className="font-light text-[12px]">
                <ul className="md:gap-10 flex gap-6 flex-col md:flex-row text-center md:text-start">
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
            </div>
            <div className="mx-auto mt-10">
              <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-end lg:items-center lg:justify-between gap-8">
                <div className="flex flex-col md:justify-center lg:justify-between md:items-start w-full md:w-full lg:w-1/2 lg:gap-8 text-center md:text-start">
                  <p className="text-[#808080] text-xs lg:text-[12px] mb-10 lg:mb-0">
                    Audiophile is an all-in-one stop to fulfill your audio
                    needs. We&apos;re a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility -
                    We&apos;re open 7 days a week.
                  </p>
                  <p className="text-[#808080] text-xs lg:text-[12px]">
                    &copy; {currentYear}. All Rights Reserved
                  </p>
                </div>
                <div className="flex justify-center md:justify-start lg:justify-end items-center w-full md:w-auto lg:w-1/2 mt-4 md:mt-0 lg:mt-0">
                  <div className="flex gap-4 lg:gap-6">
                    <a href="#" className="group inline-block">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-white group-hover:text-peru transition-colors duration-1000"
                      >
                        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                      </svg>
                    </a>
                    <a href="#" className="group inline-block">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-white group-hover:text-peru transition-colors duration-1000"
                      >
                        <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
                      </svg>
                    </a>
                    <a href="#" className="group inline-block">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-white group-hover:text-peru transition-colors duration-1000"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
