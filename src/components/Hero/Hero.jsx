import { ButtonBordered } from "../Buttons/Buttons";

export default function Hero() {
  return (
    <div className="text-white w-full">
      <div className="">
        <div className="bg-home-hero-mobile md:bg-home-hero-tablet lg:bg-home-hero-desktop lg:bg-cover lg:bg-center lg:h-[650px] lg:flex lg:justify-center lg:flex-col md:flex md:flex-col md:items-center md:bg-cover md:h-[730px] md:pt-64 bg-cover bg-center flex flex-col lg:items-start items-center h-[650px] pt-60 lg:pt-0">
          <div className="lg:mb-5 lg:mt-16 lg:mx-[7.5rem] text-center md:text-left mb-6 md:mb-8">
            <p className="text-sm font-bold uppercase tracking-widest">
              NEW PRODUCT
            </p>
          </div>
          <div className="mb-6 md:mb-7 lg:mb-8 lg:mx-[7.5rem]">
            <h1 className="text-3xl md:text-5xl font-bold">
              XX99 MARK II <br /> HEADPHONES
            </h1>
          </div>
          <div className="mb-8 md:mb-10 lg:mb-10 lg:max-w-md md:max-w-md max-w-[16rem] mx-auto lg:mx-[7.5rem]">
            <p className=" text-sm lg:text-xl md:text-xl md:text-center lg:text-start text-center">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <div className="lg:mx-[7.5rem]">
            <ButtonBordered />
          </div>
        </div>
      </div>
    </div>
  );
}
