import React, { useState } from "react";
import ImageModal from "../components/layout/ImageModal";
import FormModal from "../components/layout/FormModal";

const FleetCard = ({ data, pickUp, dropOf, age, pickUpDay, dropOfDay }) => {
  const [isOpenImages, setIsOpenImages] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isBookCar, setIsBookCar] = useState(false);

  const isBookedCar = (e) => {
    e.preventDefault();
    setIsOpenForm(false);
    setIsBookCar(true);
  };

  /***********$ INTEGER_FORMATTER $************/
  const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  });

  function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split(".");
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  }

  return (
    <div className="relative sm:columns-2  p-5  text-body rounded-sm  border-2 border-lightGreen fleet__shadow  my-8 ">
      <div
        className={`${
          isBookCar
            ? "absolute z-20 w-full h-full bg-black top-0 left-0 bg-opacity-90 flex justify-center items-center"
            : "hidden"
        }`}
      >
        <div className=" bg-body bg-opacity-90 text-purple text-xl w-full text-center py-5">
          <p className="animate-pulse">Check your email to confirm an order.</p>
        </div>
      </div>
      <div>
        <ImageModal
          open={isOpenImages}
          onClose={() => setIsOpenImages(false)}
          data={data}
          key={data.id}
        />
      </div>
      <div>
        <FormModal
          open={isOpenForm}
          onClose={() => setIsOpenForm(false)}
          formatOperand={formatOperand}
          pickUp={pickUp}
          dropOf={dropOf}
          age={age}
          pickUpDay={pickUpDay}
          dropOfDay={dropOfDay}
          isBookedCar={isBookedCar}
          data={data}
          key={data.id}
        />
      </div>
      <div className=" bg-body inline-block rounded-xl ">
        <h2 className=" text-gray-200 drop-shadow-[1px_1px_3px_rgba(0,204,191,1)]">
          {data.name}
        </h2>
      </div>

      <div className="icons__box max-w-[270px] flex flex-wrap gap-3 py-5 sm:py-0 sm:pt-5 ">
        <div
          className="text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
          title="Seats"
        >
          <i className="ri-user-line"></i>
          <span> {data.seats}</span>
        </div>
        <div
          className={`${
            data.doors
              ? "text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
              : "hidden"
          }  `}
          title="Doors"
        >
          <i className="ri-door-line"></i>
          <span> {data.doors}</span>
        </div>
        <div
          className={`${
            data.bag
              ? "text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
              : "hidden"
          }  `}
          title="Large bag"
        >
          <i className="ri-luggage-cart-line"></i>
          <span> {data.bag}</span>
        </div>
        <div
          className="text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
          title="Fuel"
        >
          <i className="ri-gas-station-line"></i>
          <span> {data.fuel}</span>
        </div>
        <div
          className="text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
          title="Transmission"
        >
          <i className="ri-git-branch-line"></i>
          <span> {data.transmission}</span>
        </div>
        <div
          className="text-md sm:text-lg md:text-2xl text-body p-2 rounded-md bg-lightBlue"
          title="Power"
        >
          <i className="ri-speed-up-fill"></i>
          <span className=" whitespace-nowrap">
            {` ${Math.ceil(data.power / 1.3410220896)}kW (${data.power} Hp)`}
          </span>
        </div>
      </div>
      <div>
        <div
          className="max-w-[400px] xl:max-w-none pb-5"
          onClick={() => {
            setIsOpenImages(true);
          }}
        >
          <img
            src={data.img}
            alt={data.name}
            className=" h-full rounded-xl border-2  border-lightBlue cursor-pointer"
          />
        </div>
        <div className="flex justify-between items-center gap-3">
          <div>
            <p className="text-xl sm:text-2xl text-lightBlue p-2 rounded-md bg-body bg-opacity-80">
              {" "}
              {formatOperand(data.price)} HUF
            </p>
          </div>
          <button
            className="btn__1 bg-body bg-opacity-80 hover:bg-purple hover:bg-opacity-50"
            onClick={(e) => {
              setIsOpenForm(true);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
