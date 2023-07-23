import React from "react";
import Carousel from "react-multi-carousel";
import CarouserImg from "./CarouserImg";

const ImageModal = ({ open, data, onClose }) => {
  if (!open) return null;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-30 bg-black bg-opacity-60 backdrop-blur-sm "></div>
      <div className="w-full max-w-[900px]  px-4 md:px-12 lg:px-0 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-40">
        <div className="w-full p-6 xl:px-12 h-auto py-6 xl:py-10 rounded-lg   flex flex-col bg-body bg-opacity-80 border-4 border-lightGreen transition-colors duration-1000 relative">
          <button
            className="absolute top-4 right-5 text-lg text-white  bg-black rounded-full px-[5px] bg-opacity-60 hover:bg-opacity-90 duration-500 z-40"
            onClick={onClose}
          >
            <i className="ri-close-fill"></i>
          </button>
          <div className="w-full h-[50%] overflow-hidden rounded-lg">
            <Carousel responsive={responsive} infinite={true} showDots>
              {data.imgs.map((img) => (
                <CarouserImg img={img} key={data.id} alt={data.title} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;
