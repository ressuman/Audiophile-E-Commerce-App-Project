import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { HeadPhones } from "../../pages/HeadPhones/HeadPhones";
import { ProductDetails } from "../../pages/ProductDetails/ProductDetails";
import { Speakers } from "../../pages/Speakers/Speakers";
import { Earphones } from "../../pages/Earphones/Earphones";
import CheckOut from "../../pages/CheckOut/CheckOut";
import FadeInSection from "../../utils/FadeInAnimation";
import NotFound from "../../pages/NotFound/Notfound";

export default function MainSection() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/headphones/:slug" element={<ProductDetails />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:slug" element={<ProductDetails />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/:slug" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="*"
          element={
            <FadeInSection>
              <NotFound />
            </FadeInSection>
          }
        />
      </Routes>
    </div>
  );
}
