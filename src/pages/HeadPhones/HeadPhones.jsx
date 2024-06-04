import { Cards } from "../../components/Cards/Cards";
import Banner from "../../components/RoutesComponents/Banner";
import { HeadPhoneProducts } from "../../components/RoutesComponents/Products";

export const HeadPhones = () => {
  return (
    <>
      <Banner />
      <HeadPhoneProducts />
      <Cards />
    </>
  );
};
