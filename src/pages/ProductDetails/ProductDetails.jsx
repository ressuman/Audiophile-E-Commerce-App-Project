import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useParams } from "react-router-dom";
import data from "../../data/data.json";
import { ButtonBordered1 } from "../../components/Buttons/Buttons";
import { useState } from "react";

export const ProductDetails = () => {
  const { slug } = useParams();
  const location = useLocation();

  const [quantity, setQuantity] = useState(1);

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

  const getImageSource = (product) => {
    if (isDesktop) {
      return new URL(`${product.image.desktop}`, import.meta.url).href;
    } else if (isTablet) {
      return new URL(`${product.image.tablet}`, import.meta.url).href;
    } else if (isMobile) {
      return new URL(`${product.image.mobile}`, import.meta.url).href;
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

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

  return (
    <div>
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mt-16 mb-28">
        <Link to={getCategoryLink(product)} className="hover:underline">
          Go Back
        </Link>
      </div>

      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-28">
        <div className="flex flex-col md:flex-row items-center lg:items-start lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4 gap-20 mb-20">
          <img
            src={getImageSource(product)}
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
              <Link to="">
                <ButtonBordered1 />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto mb-28">
        <div className="">
          <div className="">
            <h3 className="uppercase">FEATURES</h3>
          </div>
          <div className="">
            <p className="">{product.features}</p>
          </div>
        </div>
        <div className="">
          <div className="">
            <h3 className="uppercase">IN THE BOX</h3>
          </div>
          <div className="">
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
      </div>
    </div>
  );
};
//font-normal lg:text-sm md:text-xs text-xs py-2 px-4
// export const SpeakerProductDetails = () => {
//   // const { slug } = useParams();

//   // const product = data.find((item) => item.slug === slug);

//   // if (!product) {
//   //   return <div>Product not found</div>;
//   // }

//   return <div>ProductDetails</div>;
// };

// export const EarPhoneProductDetails = () => {
//   // const { slug } = useParams();

//   // const product = data.find((item) => item.slug === slug);

//   // if (!product) {
//   //   return <div>Product not found</div>;
//   // }

//   return <div>ProductDetails</div>;
// };
