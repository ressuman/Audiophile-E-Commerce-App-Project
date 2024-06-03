import { ButtonNoOutline } from "../Buttons/Buttons";
import CardHeadphone from "../../assets/resources/shared/desktop/image-category-thumbnail-headphones.png";
import CardSpeaker from "../../assets/resources/shared/desktop/image-category-thumbnail-speakers.png";
import CardEarphone from "../../assets/resources/shared/desktop/image-category-thumbnail-earphones.png";

export const Cards = () => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w[80%] mx-auto lg:text-center py-8 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-10 gap-3">
        <div className="relative flex flex-col items-center justify-center py-5">
          <img
            src={CardHeadphone}
            alt="hp"
            className="absolute top-[3%] md:top-[3%] lg:top-[-13%] w-1/2 md:w-[75%]"
          />
          <div className="bg-flash-white w-full lg:w-[90%] mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg lg:ml-6 rounded-md">
            <p className=" font-semibold pt-20 pb-2 text-black">HEADPHONES</p>
            <ButtonNoOutline size={20} />
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center py-5">
          <img
            src={CardSpeaker}
            alt="sp"
            className="absolute top-[3%] md:top-[3%] lg:top-[-13%] w-1/2 md:w-[75%]"
          />
          <div className="bg-flash-white w-full lg:w-[90%] mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg lg:ml-1 rounded-md">
            <p className=" font-semibold pt-20 pb-2 text-black">SPEAKERS</p>
            <ButtonNoOutline />
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center py-5">
          <img
            src={CardEarphone}
            alt="ep"
            className="absolute top-[3%] md:top-[3%] lg:top-[-13%] w-1/2 md:w-[75%]"
          />
          <div className="bg-flash-white w-full lg:w-[90%] mt-12 flex flex-col items-center py-2 md:py-1 lg:py-8 md:text-lg lg:mr-6 rounded-md">
            <p className="font-semibold pt-20 pb-2 text-black">EARPHONES</p>
            <ButtonNoOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
