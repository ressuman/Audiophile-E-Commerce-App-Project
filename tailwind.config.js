/** @type {import('tailwindcss').Config} */

import flowbitePlugin from "flowbite/plugin";

import withMT from "@material-tailwind/react/utils/withMT";

//import daisyui from "daisyui";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1161px",
    },
    colors: {
      peru: "#d87d4a",
      tangelo: "#fbaf85",
      "chinese-black": "#101010",
      black: "#000000",
      white: "#ffffff",
      "flash-white": "#f1f1f1",
      lotion: "#fafafa",
      "yankees-blue": "#4c4c4c",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
      backgroundImage: {
        "home-hero-desktop":
          "url('/src/assets/resources/home/desktop/image-hero.jpg')",
        "home-hero-tablet":
          "url('/src/assets/resources/home/tablet/image-header.jpg')",
        "home-hero-mobile":
          "url('/src/assets/resources/home/mobile/image-header.jpg')",
        "home-display-desktop-speaker":
          "url('/src/assets/resources/home/desktop/image-speaker-zx7.jpg')",
        "home-display-tablet-speaker":
          "url('/src/assets/resources/home/tablet/image-speaker-zx7.jpg')",
        "home-display-mobile-speaker":
          "url('/src/assets/resources/home/mobile/image-speaker-zx7.jpg')",
        "home-display-desktop-earphone":
          "url('/src/assets/resources/home/desktop/image-earphones-yx1.jpg')",
        "home-display-tablet-earphone":
          "url('/src/assets/resources/home/tablet/image-earphones-yx1.jpg')",
        "home-display-mobile-earphone":
          "url('/src/assets/resources/home/mobile/image-earphones-yx1.jpg')",
        "footer-image-desktop":
          "url('/src/assets/resources/shared/desktop/image-best-gear.jpg')",
        "footer-image-tablet":
          "url('/src/assets/resources/shared/tablet/image-best-gear.jpg')",
        "footer-image-mobile":
          "url('/src/assets/resources/shared/mobile/image-best-gear.jpg')",
      },
    },
  },
  plugins: [flowbitePlugin /*daisyui*/],
});
