import { Cards } from "../../components/Cards/Cards";
import Banner from "../../components/RoutesComponents/Banner";
import { SpeakerProducts } from "../../components/RoutesComponents/Products";

export const Speakers = () => {
  return (
    <>
      <Banner />
      <SpeakerProducts />
      <Cards />
    </>
  );
};
