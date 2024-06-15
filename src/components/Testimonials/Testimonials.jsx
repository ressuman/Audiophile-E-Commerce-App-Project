export default function Testimonials() {
  return (
    <div>
      <div className="my-[10rem] w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col lg:flex-row items-center gap-4 md:gap-2 lg:gap-6">
        <div className="order-2 lg:order-1 flex justify-center items-start flex-col rounded-md h-[25rem] md:gray w-full lg:w-1/2 p-2 md:p-10 lg:p-0 gap-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase text-center lg:text-start md:px-6 lg:px-0">
            Bringing you the <span className="text-peru">best</span> audio gear
          </h3>
          <p className="text-center lg:text-start text-chinese-black md:text-base">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="order-1 lg:order-2 bg-footer-image-mobile md:bg-footer-image-tablet lg:bg-footer-image-desktop rounded-md h-[20rem] md:h-[22rem] lg:h-[35rem] w-full lg:w-1/2 bg-cover bg-center"></div>
      </div>
    </div>
  );
}
