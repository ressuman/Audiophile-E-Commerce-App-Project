import Banner from "../../components/RoutesComponents/Banner";
import { HeadPhoneProducts } from "../../components/RoutesComponents/Products";
import CardHeadphone from "/images/shared/desktop/image-category-thumbnail-headphones.png";
import CardSpeaker from "/images/shared/desktop/image-category-thumbnail-speakers.png";
import CardEarphone from "/images/shared/desktop/image-category-thumbnail-earphones.png";
import { ButtonNoOutline } from "../../components/Buttons/Buttons";
import { Link, useParams } from "react-router-dom";
import data from "../../data/data.json";
import FadeInSection from "../../utils/FadeInAnimation";

export const HeadPhones = () => {
  const { slug } = useParams();

  const productXx991 = data[2];
  const productZx9 = data[5];
  const productYx1 = data[0];

  return (
    <FadeInSection>
      <Banner />
      <HeadPhoneProducts />
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto lg:text-center py-8 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20 gap-3">
          <div className="relative flex flex-col items-center justify-center py-5">
            <img
              src={CardHeadphone}
              alt="hp"
              className="absolute top-[3%] md:top-[3%] lg:top-[0%] w-1/2 md:w-[75%]"
            />
            <div className="bg-flash-white w-full mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg  rounded-md">
              <p className=" font-semibold pt-[33%] md:pt-[50%] pb-2 text-black">
                HEADPHONES
              </p>
              <Link to={`/headphones/${productXx991.slug}`}>
                <ButtonNoOutline />
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center py-5">
            <img
              src={CardSpeaker}
              alt="sp"
              className="absolute top-[3%] md:top-[3%] lg:top-[0%] w-1/2 md:w-[75%]"
            />
            <div className="bg-flash-white w-full mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg  rounded-md">
              <p className=" font-semibold pt-[33%] md:pt-[50%] pb-2 text-black">
                SPEAKERS
              </p>
              <Link to={`/speakers/${productZx9.slug}`}>
                <ButtonNoOutline />
              </Link>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center py-5">
            <img
              src={CardEarphone}
              alt="ep"
              className="absolute top-[3%] md:top-[3%] lg:top-[0%] w-1/2 md:w-[75%]"
            />
            <div className="bg-flash-white w-full mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg  rounded-md">
              <p className="font-semibold pt-[33%] md:pt-[50%] pb-2 text-black">
                EARPHONES
              </p>
              <Link to={`/earphones/${productYx1.slug}`}>
                <ButtonNoOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};
