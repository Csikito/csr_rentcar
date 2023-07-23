import React from "react";
import { Link } from "react-router-dom";

const FormModal = ({
  data,
  open,
  onClose,
  pickUp,
  dropOf,
  age,
  pickUpDay,
  dropOfDay,
  isBookedCar,
}) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0  z-30 bg-black bg-opacity-60 backdrop-blur-sm "></div>

      {pickUp === "" ||
      dropOf === "" ||
      age === "" ||
      pickUpDay === "" ||
      dropOfDay === "" ? (
        <div className="w-full max-w-[800px]  fixed  top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 rounded-lg border-4 border-lightGreen">
          <div className="w-full  h-auto flex flex-col bg-body bg-opacity-90  transition-colors duration-1000 relative ">
            <div className=" sticky top-0 z-30 bg-lightBlue py-2 px-4">
              <h2 className="pr-5">ATTENTION!</h2>

              <button
                className="absolute top-4 right-5 text-lg hover:text-white    text-purple duration-500 z-40"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className="text-xl text-purple p-5 text-center">
              <p>Please set the data in the "book a car" section first!</p>
            </div>
            <div className="flex justify-center items-center">
              <Link to="/" className="btn__2 m-5">
                Book a car
              </Link>

              <button className=" btn__1 m-5" onClick={onClose}>
                Continue view vehicle
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-[800px] max-h-[90vh] fixed top-10 left-[50%] -translate-x-1/2 z-40 rounded-lg border-4 border-lightGreen overflow-y-scroll">
          <div className="w-full  h-auto flex flex-col bg-body bg-opacity-90  transition-colors duration-1000 relative ">
            <div className=" sticky top-0 z-30 bg-lightBlue py-2 px-4">
              <h2 className="pr-5">COMPLETE RESERVATION</h2>

              <button
                className="absolute top-4 right-5 text-lg hover:text-white    text-purple duration-500 z-40"
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className=" flex flex-col gap-10 sm:gap-0 sm:flex-row text-lightBlue  border-b-2 border-purple  py-10 mx-6 ">
              <div className="w-full">
                <h3 className="mb-5  text-gray-200 drop-shadow-[1px_1px_3px_rgba(0,204,191,1)]">
                  Pick up & return
                </h3>
                <div className="pb-5">
                  <h4>Pick-Up</h4>
                  <p>{pickUp}</p>
                  <p>{pickUpDay}-10:00</p>
                </div>
                <div>
                  <h4>Drop-Off</h4>
                  <p>{dropOf}</p>
                  <p>{dropOfDay}-10:00</p>
                </div>
              </div>
              <div className="w-full text-center">
                <div className=" ">
                  <h3 className="mb-5 text-gray-200 drop-shadow-[1px_1px_3px_rgba(0,204,191,1)]">
                    {data.name}
                  </h3>
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-full max-h-[300px] object-contain rounded-[5rem]"
                  />
                </div>
              </div>
            </div>
            <div className="text-white p-10">
              <h3 className="mb-5  text-gray-200 drop-shadow-[1px_1px_3px_rgba(0,204,191,1)]">
                Personal Information
              </h3>
              <form
                className="reservation contact__form"
                onSubmit={(e) => {
                  isBookedCar(e);
                }}
              >
                <div className=" sm:columns-2">
                  <div className="form__box max-w-full  ">
                    <label htmlFor="firstname" className="required">
                      First Name
                    </label>
                    <input type="text" id="firstname " required />
                  </div>
                  <div className="form__box max-w-full  ">
                    <label htmlFor="lastname" className="required">
                      Last Name
                    </label>
                    <input type="text" id="lastname" required />
                  </div>
                </div>
                <div className=" sm:columns-2 ">
                  <div className="form__box max-w-full  ">
                    <label htmlFor="phone" className="required">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" required />
                  </div>
                  <div className="form__box max-w-full  ">
                    <label htmlFor="lastname" className="required">
                      Age
                    </label>
                    <input
                      className="disabled:opacity-60"
                      type="text"
                      id="lastname"
                      required
                      value={age}
                      disabled
                    />
                  </div>
                </div>
                <div className="form__box max-w-full   ">
                  <label htmlFor="email" className="required ">
                    Email
                  </label>
                  <input type="email" id="email" required />
                </div>
                <div className="form__box max-w-full   ">
                  <label htmlFor="address" className="required">
                    Address
                  </label>
                  <input type="text" id="address" required />
                </div>
                <div className=" sm:columns-2 ">
                  <div className="form__box max-w-full  ">
                    <label htmlFor="city" className="required">
                      City
                    </label>
                    <input type="text" id="city" required />
                  </div>
                  <div className="form__box max-w-full  ">
                    <label htmlFor="zip" className="required">
                      Zip Code
                    </label>
                    <input type="number" id="zip" required />
                  </div>
                </div>

                <div className="w-full checkbox-rect py-5">
                  <input type="checkbox" id="offers" name="offers" />
                  <label htmlFor="offers" className=" group">
                    I consent to receive news and special offers from{" "}
                    <span className="text-lightGreen group-hover:text-purple">
                      CSR_Rent
                    </span>
                  </label>
                </div>
                <div className="w-full">
                  <button type="submit" className="btn__2 w-full">
                    Reserve Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
