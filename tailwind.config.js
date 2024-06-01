/** @type {import('tailwindcss').Config} */

import flowbitePlugin from "flowbite/plugin";

import withMT from "@material-tailwind/react/utils/withMT";

import daisyui from "daisyui";

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
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans - serif"],
      },
      backgroundImage: {
        "hero-desktop":
          "url('/src/assets/resources/home/desktop/image-hero.jpg')",
        "hero-tablet":
          "url('/src/assets/resources/home/tablet/image-header.jpg')",
        "hero-mobile":
          "url('/src/assets/resources/home/mobile/image-header.jpg')",
      },
    },
  },
  plugins: [flowbitePlugin, daisyui],
});
