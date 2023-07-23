import React from "react";
import banner from "../images/home/hero/banner.png";
import polo from "../images/home/hero/polo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" relative flex justify-center items-center px-5  pb-28 sm:pb-36  md:py-48 lg:py-60">
      <div className="container m-auto ">
        <div className="scroll__top absolute bottom-1/2 sm:bottom-96 md:bottom-1/2 sm:left-1/2">
          <img
            className="animate-pulse w-[500px]  lg:w-[650px] xl:w-[800px] opacity-5 sm:opacity-100"
            src={banner}
            alt="parliament"
          />
        </div>
        <div className="relative flex mt-42">
          <div className="w-full sm:w-2/3 scroll__top">
            <p className=" font-bold text-[20px]">Plan Your trip now</p>
            <h1 className="font-bold pt-3">
              Save <span className="text-purple">big</span> with our car rental
            </h1>
            <p className="py-10">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className=" flex gap-4">
              <button
                className="btn__1 hover:text-purple"
                onClick={() => {
                  window.scrollTo({
                    top: 500,
                    behavior: "smooth",
                  });
                }}
              >
                Book
              </button>
              <Link to="/about">
                <button className="btn__2 hover:bg-purple ">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full hidden sm:flex items-center scroll__right">
            <img src={polo} alt="polo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
