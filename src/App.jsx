import { Route, Routes } from "react-router-dom";
import "./App.css";
import { FooterBar } from "./layout/FooterBar/FooterBar";
import NavigationBar from "./layout/NavigationBar/NavigationBar";
import Home from "./pages/Home/Home";
import { HeadPhones } from "./pages/HeadPhones/HeadPhones";
import { Speakers } from "./pages/Speakers/Speakers";
import { Earphones } from "./pages/Earphones/Earphones";
import Error from "./pages/Error/Error";

export default function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <FooterBar />
    </div>
  );
}
