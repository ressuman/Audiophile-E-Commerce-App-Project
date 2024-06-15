import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./layout/FooterBar/FooterBar";
import NavigationBar from "./layout/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import { HeadPhones } from "./pages/HeadPhones/HeadPhones";
import { Speakers } from "./pages/Speakers/Speakers";
import { Earphones } from "./pages/Earphones/Earphones";
import NotFound from "./pages/NotFound/Notfound";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import FadeInSection from "./utils/FadeInAnimation";
import { useState } from "react";
import CartModal from "./components/cart/cartModal";
import CheckOut from "./pages/CheckOut/CheckOut";

export default function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleToggleCart = () => setCartOpen((prev) => !prev);

  return (
    <div>
      <NavigationBar toggleCart={handleToggleCart} />

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

      <FadeInSection>
        <FooterBar />
      </FadeInSection>

      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
