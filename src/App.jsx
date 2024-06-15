import "./App.css";
import { FooterBar } from "./layout/FooterBar/FooterBar";
import NavigationBar from "./layout/NavigationBar/NavigationBar";
import FadeInSection from "./utils/FadeInAnimation";
import { useState } from "react";
import CartModal from "./components/cart/cartModal";
import MainSection from "./layout/MainSection/MainSection";

export default function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleToggleCart = () => setCartOpen((prev) => !prev);

  return (
    <div>
      <NavigationBar toggleCart={handleToggleCart} />
      <MainSection />
      <FadeInSection>
        <FooterBar />
      </FadeInSection>
      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
