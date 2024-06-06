import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./layout/FooterBar/FooterBar";
import NavigationBar from "./layout/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import { HeadPhones } from "./pages/HeadPhones/HeadPhones";
import { Speakers } from "./pages/Speakers/Speakers";
import { Earphones } from "./pages/Earphones/Earphones";
import Error from "./pages/Error/Error";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import FadeInSection from "./utils/FadeInAnimation";

export default function App() {
  return (
    <div>
      <FadeInSection>
        <NavigationBar />
      </FadeInSection>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/headphones/:slug" element={<ProductDetails />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/:slug" element={<ProductDetails />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/:slug" element={<ProductDetails />} />
        <Route
          path="*"
          element={
            <FadeInSection>
              <Error />
            </FadeInSection>
          }
        />
      </Routes>

      <FadeInSection>
        <FooterBar />
      </FadeInSection>
    </div>
  );
}
