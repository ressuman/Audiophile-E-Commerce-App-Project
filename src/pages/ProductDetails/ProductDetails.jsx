import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import data from "../../data/data.json";
import {
  ButtonBordered,
  ButtonBordered1,
  ButtonNoOutline,
} from "../../components/Buttons/Buttons";
import { useState } from "react";
import FadeInSection from "../../utils/FadeInAnimation";
import CardHeadphone from "/images/shared/desktop/image-category-thumbnail-headphones.png";
import CardSpeaker from "/images/shared/desktop/image-category-thumbnail-speakers.png";
import CardEarphone from "/images/shared/desktop/image-category-thumbnail-earphones.png";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slice/cartSlice";
import ToastAlert from "../../utils/toastAlert";

export const ProductDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const products = [
    data[2], // productXx991
    data[3], // productXx992
    data[1], // productXx59
    data[4], // productZx7
    data[5], // productZx9
    data[0], // productYx1
  ];

  const product = products.find((item) => item.slug === slug);

  const isDesktop = useMediaQuery({ minWidth: 1161 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1160 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const getImageSource = (imageSet) => {
    if (isDesktop) {
      return new URL(`${imageSet.desktop}`, import.meta.url).href;
    } else if (isTablet) {
      return new URL(`${imageSet.tablet}`, import.meta.url).href;
    } else if (isMobile) {
      return new URL(`${imageSet.mobile}`, import.meta.url).href;
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product, quantity) => {
    dispatch(addItemToCart({ ...product, quantity }));

    setToastMessage(
      `${product.category} shop: product ${product.name} has been added to the cart`
    );
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  const getCategoryLink = (product) => {
    switch (product.category) {
      case "headphones":
        return "/headphones";
      case "speakers":
        return "/speakers";
      case "earphones":
        return "/earphones";
      default:
        return "/";
    }
  };

  const newProducts = [data[3], data[5], data[0]];

  const handleProductClick = (otherProductName) => {
    let category = "";
    if (
      otherProductName.toLowerCase().includes("xx") ||
      otherProductName.toLowerCase().includes("mark")
    ) {
      category = "headphones";
    } else if (
      otherProductName.toLowerCase().includes("zx") ||
      otherProductName.toLowerCase().includes("speaker")
    ) {
      category = "speakers";
    } else if (
      otherProductName.toLowerCase().includes("yx") ||
      otherProductName.toLowerCase().includes("earphone")
    ) {
      category = "earphones";
    }

    navigate(`/${category}`);
  };

  return (
    <FadeInSection>
      <div className="">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-10 mb-16 relative">
          <Link
            to={getCategoryLink(product)}
            className="hover:underline hover:text-peru"
          >
            Go Back
          </Link>{" "}
          {showToast && (
            <ToastAlert
              message={toastMessage}
              onClose={() => setShowToast(false)}
            />
          )}
        </div>

        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-[12rem]">
          <div className="flex flex-col md:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
            <img
              src={getImageSource(product.categoryImage)}
              alt={product.slug}
              className="w-full md:w-[48%] rounded-md lg:h-[35.8rem] "
            />
            <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center md:justify-center md:w-[48%] lg:h-[35.8rem]">
              {newProducts.includes(product) && (
                <h2 className="text-xs uppercase tracking-[1em] text-peru font-bold mb-3">
                  NEW PRODUCT
                </h2>
              )}
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase mb-8 w-[16rem] mx-auto md:mx-0">
                {product.name}
              </h4>
              <p className="text-xs md:text-base mb-10 w-[80%]  mx-auto md:mx-0 md:w-full">
                {product.description}
              </p>
              <p className="font-extrabold mb-10">$ {product.price}</p>
              <div className="flex justify-center items-center gap-4">
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="bg-flash-white text-chinese-black hover:text-peru px-4 py-2 hover:bg-[#d3d3d3] font-normal lg:text-sm md:text-xs text-xs"
                  >
                    -
                  </button>
                  <span className="lg:text-sm md:text-xs text-xs py-2 px-4 font-semibold bg-flash-white">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="bg-flash-white text-chinese-black hover:text-peru  px-4 py-2 hover:bg-[#d3d3d3] font-normal lg:text-sm md:text-xs text-xs"
                  >
                    +
                  </button>
                </div>
                <ButtonBordered1
                  handleAction={() => handleAddToCart(product, quantity)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-[12rem] lg:flex lg:justify-between lg:gap-10">
          <div className="lg:w-[70%]">
            <div className="mb-10">
              <h3 className="uppercase text-lg lg:text-4xl md:text-2xl font-bold mb-4">
                FEATURES
              </h3>
            </div>
            <div className="">
              {product.features.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:w-[30%] md:mt-32 lg:mt-0 mt-32">
            <div className="lg:flex lg:justify-between  lg:flex-col lg:items-start md:flex md:flex-row md:justify-center md:items-start">
              <div className="mb-10 md:w-1/2 lg:w-full">
                <h3 className="uppercase text-lg lg:text-4xl md:text-2xl font-bold ">
                  IN THE BOX
                </h3>
              </div>
              <div className="md:w-1/2 lg:w-full">
                {product.includes.map((includedItem, index) => (
                  <div key={index} className="flex space-x-2 mb-2">
                    <span className="text-peru mr-4">
                      {includedItem.quantity}x
                    </span>
                    <span className="">{includedItem.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-[12rem]">
          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10 gap-6">
            <div className="lg:w-[40%] md:w-[40%] flex flex-col gap-6">
              <div className="h-[50%]">
                <img
                  src={getImageSource(product.gallery.first)}
                  alt="gallery-first"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
              <div className="h-[50%]">
                <img
                  src={getImageSource(product.gallery.second)}
                  alt="gallery-second"
                  className="rounded-md w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-[60%] md:w-[60%]">
              <img
                src={getImageSource(product.gallery.third)}
                alt="gallery-third"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-10">
          <div className="text-center">
            <h3 className="uppercase text-lg lg:text-4xl md:text-2xl font-bold mb-20">
              YOU MAY ALSO LIKE
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.others.map((otherProduct) => (
              <div key={otherProduct.slug} className="">
                <img
                  src={getImageSource(otherProduct.image)}
                  alt={otherProduct.name}
                  className="rounded-md w-full"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold mt-8 mb-8">
                    {otherProduct.name}
                  </h4>
                  <ButtonBordered
                    onClick={() => handleProductClick(otherProduct.name)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto lg:text-center py-8 lg:py-16">
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
                <Link to="/headphones">
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
                <Link to="/speakers">
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
                <Link to="/earphones">
                  <ButtonNoOutline />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};
