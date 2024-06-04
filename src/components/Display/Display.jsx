import DesktopZX9Speaker from "../../assets/resources/home/desktop/image-speaker-zx9.png";
import { ButtonOutline1, ButtonOutline2 } from "../Buttons/Buttons";

export default function Display() {
  return (
    <div>
      {/* ZX9 Speaker */}
      <div className="bg-peru h-[800px] lg:h-[600px] md:h-[800px] lg:w-[80%] md:w-[85%] w-[90%] lg:mb-8 md:mb-10 mb-10 mx-auto relative overflow-hidden lg:flex lg:items-center lg:justify-center rounded-md">
        <div className="absolute lg:bottom-0 lg:left-[8%] md:left-[50%] left-[-45%] transform lg:translate-x-[-27%] md:translate-x-[-50%] translate-x-[-16%] lg:translate-y-[35%] md:translate-y-[-29%] translate-y-[-22%]">
          <svg width="944" height="944" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
              <circle cx="472" cy="472" r="235.5" />
              lg:
              <circle cx="472" cy="472" r="270.5" />
              <circle cx="472" cy="472" r="471.5" />
            </g>
          </svg>
        </div>
        <img
          src={DesktopZX9Speaker}
          alt="ZX9 Speaker"
          width="40%"
          height="40%"
          className="absolute top-[33%] lg:top-[63%] md:top-[24%] left-[50.6%] lg:left-[28%] md:left-[50%] transform -translate-x-1/2  -translate-y-1/2 "
        />
        <div className="relative z-10 ml-[0rem] lg:ml-[36rem] md:ml-[8rem] lg:text-start md:text-center text-center text-white max-w-sm md:mt-[25rem] lg:mt-0 mt-[30rem]">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-8">
            ZX9 <br /> SPEAKER
          </h1>
          <p className="mb-12 text-sm md:text-xl lg:text-2xl">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonOutline2 />
        </div>
      </div>

      {/* ZX7 Speaker */}
      <div className="bg-home-display-mobile-speaker  md:bg-home-display-tablet-speaker lg:bg-home-display-desktop-speaker w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-black h-[20rem] md:h-[19rem] lg:h-[18rem] bg-cover bg-center rounded-md flex items-center">
        <div className="flex justify-center items-start gap-8 flex-col ml-8 md:ml-20 lg:ml-24">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            ZX7 SPEAKER
          </h3>
          <ButtonOutline1 />
        </div>
      </div>

      {/* YX1 Earphone */}
      <div className="my-10 w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-2 lg:gap-8">
        <div className="bg-home-display-mobile-earphone  md:bg-home-display-tablet-earphone lg:bg-home-display-desktop-earphone rounded-md h-[13rem] md:h-[18rem] w-full md:w-1/2 bg-cover bg-center"></div>
        <div className="flex justify-center items-start flex-col  bg-flash-white rounded-md h-[13rem] md:h-[18rem] w-full md:w-1/2 p-14 md:p-10 lg:p-20 gap-8 ">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            YX1 EARPHONES
          </h3>
          <ButtonOutline1 />
        </div>
      </div>
    </div>
  );
}
