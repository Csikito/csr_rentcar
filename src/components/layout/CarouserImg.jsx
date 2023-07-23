import React from "react";

const CarouserImg = ({ img, alt }) => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full  max-h-[600px] object-contain "
        src={img}
        alt={alt}
      />
    </div>
  );
};

export default CarouserImg;
