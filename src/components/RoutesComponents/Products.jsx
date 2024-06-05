import { Link } from "react-router-dom";
import { ButtonBordered } from "../Buttons/Buttons";
//import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useMediaQuery } from "react-responsive";

export const HeadPhoneProducts = () => {
  // Determine screen size
  const isDesktop = useMediaQuery({ minWidth: 1161 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1160 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const productXx991 = data[2];
  const productXx992 = data[3];
  const productXx59 = data[1];

  const getImageSource = (product) => {
    if (isDesktop) {
      return new URL(`${product.categoryImage.desktop}`, import.meta.url).href;
    } else if (isTablet) {
      return new URL(`${product.categoryImage.tablet}`, import.meta.url).href;
    } else if (isMobile) {
      return new URL(`${product.categoryImage.mobile}`, import.meta.url).href;
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
        <img
          src={getImageSource(productXx992)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem] "
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h2 className="text-xs uppercase tracking-[1em] text-peru font-bold mb-3">
            NEW PRODUCT
          </h2>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[15rem] mx-auto lg:mx-0">
            {productXx992.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productXx992.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 gap-20 mb-20">
        <img
          src={getImageSource(productXx991)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem]"
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[15rem] mx-auto lg:mx-0">
            {productXx991.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productXx991.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
        <img
          src={getImageSource(productXx59)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem]"
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[14rem] mx-auto lg:mx-0">
            {productXx59.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productXx59.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const SpeakerProducts = () => {
  // Determine screen size
  const isDesktop = useMediaQuery({ minWidth: 1161 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1160 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const productZx7 = data[4];
  const productZx9 = data[5];

  const getImageSource = (product) => {
    if (isDesktop) {
      return new URL(`${product.categoryImage.desktop}`, import.meta.url).href;
    } else if (isTablet) {
      return new URL(`${product.categoryImage.tablet}`, import.meta.url).href;
    } else if (isMobile) {
      return new URL(`${product.categoryImage.mobile}`, import.meta.url).href;
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
        <img
          src={getImageSource(productZx9)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem]"
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h2 className="text-xs uppercase tracking-[1em] text-peru font-bold mb-3">
            NEW PRODUCT
          </h2>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[9rem] mx-auto lg:mx-0">
            {productZx9.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productZx9.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 gap-20 mb-20">
        <img
          src={getImageSource(productZx7)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem]"
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[9rem] mx-auto lg:mx-0">
            {productZx7.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productZx7.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const EarPhoneProducts = () => {
  // Determine screen size
  const isDesktop = useMediaQuery({ minWidth: 1161 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1160 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const productYx1 = data[0];

  const getImageSource = (product) => {
    if (isDesktop) {
      return new URL(`${product.categoryImage.desktop}`, import.meta.url).href;
    } else if (isTablet) {
      return new URL(`${product.categoryImage.tablet}`, import.meta.url).href;
    } else if (isMobile) {
      return new URL(`${product.categoryImage.mobile}`, import.meta.url).href;
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
        <img
          src={getImageSource(productYx1)}
          alt="Description of the image"
          className="w-full lg:w-[48%] rounded-md lg:h-[35.8rem]"
        />
        <div className="text-center lg:text-left lg:flex lg:justify-center lg:items-start lg:h-[35.8rem] lg:flex-col lg:w-[48%]">
          <h2 className="text-xs uppercase tracking-[1em] text-peru font-bold mb-3">
            NEW PRODUCT
          </h2>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[17rem] mx-auto lg:mx-0">
            {productYx1.name}
          </h4>
          <p className="text-xs md:text-base mb-10 w-[80%] mx-auto lg:mx-0 lg:w-full">
            {productYx1.description}
          </p>
          <Link to="">
            <ButtonBordered />
          </Link>
        </div>
      </div>
    </div>
  );
};
