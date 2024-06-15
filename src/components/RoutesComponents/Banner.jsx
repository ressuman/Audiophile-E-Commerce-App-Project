import { useLocation } from "react-router-dom";

export default function Banner() {
  const location = useLocation();

  let headerText = "Welcome";

  switch (location.pathname) {
    case "/headphones":
      headerText = "Headphones";
      break;
    case "/speakers":
      headerText = "Speakers";
      break;
    case "/earphones":
      headerText = "Earphones";
      break;
    default:
      headerText = "Welcome";
  }

  return (
    <div className="bg-black text-white mb-20">
      <div className=" w-[90%] md:w-[85%] lg:w-[80%] mx-auto justify-center flex items-center bg-black text-white lg:py-32 md:py-24 py-20">
        <h1 className="uppercase font-bold lg:text-4xl md:text-3xl text-2xl">
          {headerText}
        </h1>
      </div>
    </div>
  );
}
