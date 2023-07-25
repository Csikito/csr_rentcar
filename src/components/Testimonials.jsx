import React, { useEffect, useState } from "react";
import SectionTitle from "./layout/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import customer1 from "../images/home/testimonials/customer_1.jpg";
import customer2 from "../images/home/testimonials/customer_2.jpg";
import customer3 from "../images/home/testimonials/customer_3.jpg";
import customer4 from "../images/home/testimonials/customer_4.jpg";

const Testimonials = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
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
    <section className="py-28 sm:py-48 bg-lightBlue bg-opacity-10">
      <div className="container m-auto px-5">
        <SectionTitle
          title="Client's Testimonials"
          subtitle="Reviewd by People"
        />
        <div className="w-full min-h-[400px] ">
          <Carousel
            responsive={responsive}
            arrows={
              responsive.mobile.breakpoint.max >= windowSize.width
                ? false
                : true
            }
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={9000}
          >
            <div className="max-w-[400px] h-full flex flex-col justify-between mx-4 min-[480px]:m-auto  p-6 rounded-sm  bg-lightGreen text-body">
              <p>
                " This was my first time renting from this company and I was
                blown away by the incredible service. I got a wonderful tesla
                rental and the charge was full. Paula went above and beyond. She
                was very kind, informative and helpful. I will definitely rent
                again from here. If I could give her 10 stars I would. Thank you
                so much Paula :) "
              </p>
              <div className="customer relative mt-10">
                <div className="flex items-center">
                  <img
                    src={customer2}
                    alt="customer"
                    className="w-[100px] rounded-full border-4 border-purple"
                  />
                  <div className="pl-5">
                    <h3>Don Jhon</h3>
                    <p className=" opacity-75">Berlin</p>
                  </div>
                </div>
                <i className="ri-double-quotes-r absolute bottom-20 min-[400px]:bottom-0 right-0 text-[3rem] text-purple"></i>
              </div>
            </div>
            <div className="max-w-[400px] h-full flex flex-col justify-between mx-4 min-[480px]:m-auto p-6 rounded-sm  bg-lightGreen text-body">
              <p>
                " We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
              </p>
              <div className="customer relative mt-10">
                <div className="flex items-center">
                  <img
                    src={customer1}
                    alt="customer"
                    className="w-[100px] rounded-full border-4 border-purple"
                  />
                  <div className="pl-5">
                    <h3>Ruby Phillips</h3>
                    <p className=" opacity-75">London</p>
                  </div>
                </div>
                <i className="ri-double-quotes-r absolute bottom-20 min-[400px]:bottom-0 right-0 text-[3rem] text-purple"></i>
              </div>
            </div>
            <div className="max-w-[400px] h-full flex flex-col justify-between mx-4 min-[480px]:m-auto  p-6 rounded-sm  bg-lightGreen text-body">
              <p>
                " We've had a great experience by sixt, when LAURA made sure we
                walk out with the best deal, and took care of our needs
                paitiontly! Highly recommend! Thanks @LAURA! "
              </p>
              <div className="customer relative mt-10">
                <div className="flex items-center">
                  <img
                    src={customer3}
                    alt="customer"
                    className="w-[100px] rounded-full border-4 border-purple"
                  />
                  <div className="pl-5">
                    <h3>Kristen Johnson</h3>
                    <p className=" opacity-75">Shanghai</p>
                  </div>
                </div>
                <i className="ri-double-quotes-r absolute bottom-20 min-[400px]:bottom-0 right-0 text-[3rem] text-purple"></i>
              </div>
            </div>
            <div className="max-w-[400px] h-full flex flex-col justify-between mx-4 min-[480px]:m-auto  p-6 rounded-sm  bg-lightGreen text-body">
              <p>
                " Recently, I rented a car and had an amazing experience. The
                car was in great condition and the customer service provided by
                Laura was exceptional. She was very friendly and helpful, and
                made the rental process a breeze. I would highly recommend this
                car rental company to anyone looking for a reliable and
                stress-free car rental experience. "
              </p>
              <div className="customer relative mt-10">
                <div className="flex items-center">
                  <img
                    src={customer4}
                    alt="customer"
                    className="w-[100px] rounded-full border-4 border-purple"
                  />
                  <div className="pl-5">
                    <h3>Mark Lawson</h3>
                    <p className=" opacity-75">Warsaw</p>
                  </div>
                </div>
                <i className="ri-double-quotes-r absolute bottom-20 min-[400px]:bottom-0 right-0 text-[3rem] text-purple"></i>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
