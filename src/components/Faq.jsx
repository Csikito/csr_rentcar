import React, { useState } from "react";
import SectionTitle from "./layout/SectionTitle";
import polo from "../images/home/hero/polo.png";
import { motion } from "framer-motion";

const Faq = () => {
  const [isActive, setIsActive] = useState("1");

  const handleOpen = (e) => {
    e.preventDefault();
    const id = e.target.parentNode.id || e.target.id;
    if (isActive === id) {
      setIsActive("");
    } else {
      setIsActive(() => id);
    }
  };

  return (
    <section className="mb-28 sm:mb-48 ">
      <div className="container m-auto relative px-5">
        <SectionTitle title="Frequently Asked Question" subtitle="FAQ" />
        <div className="absolute top-60 left-1/2 -translate-x-1/2 ">
          <img src={polo} alt="polo" className=" opacity-5" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
        >
          <div className="max-w-[900px] m-auto  faq__shadow z-10 relative scroll__scale">
            <div className="question__box m-auto">
              <div
                id="1"
                className={`question flex justify-between text-[1.2rem] py-3  ${
                  isActive === "1" ? "active__question" : ""
                }`}
                onClick={(e) => handleOpen(e)}
              >
                <p>1. Accepted payment methods</p>
                <i className="ri-arrow-down-s-fill text-2xl"></i>
              </div>
              <div
                className={`answer ${isActive === "1" ? "active__answer" : ""}`}
              >
                <p>
                  Credit and debit cards from internationally recognized
                  companies (Visa, MasterCard, etc.) are accepted at our
                  branches in Spain. Prepaid cards are not accepted. Some car
                  categories require a credit card as payment.
                </p>
              </div>
            </div>
            <div className="question__box m-auto">
              <div
                id="2"
                className={`question flex justify-between text-[1.2rem] py-3 ${
                  isActive === "2" ? "active__question" : ""
                }`}
                onClick={(e) => handleOpen(e)}
              >
                <p>2. Flexible rental options</p>
                <i className="ri-arrow-down-s-fill text-2xl"></i>
              </div>
              <div
                className={`answer ${isActive === "2" ? "active__answer" : ""}`}
              >
                <p>
                  If your travel plans are uncertain, don’t stress. We give you
                  the option to pay later when booking, and you can cancel your
                  reservation for free.
                </p>
              </div>
            </div>
            <div className="question__box m-auto">
              <div
                id="3"
                className={`question flex justify-between text-[1.2rem] py-3 ${
                  isActive === "3" ? "active__question" : ""
                }`}
                onClick={(e) => handleOpen(e)}
              >
                <p>3. What documents do I need to rent a car in Hungari?</p>
                <i className="ri-arrow-down-s-fill text-2xl"></i>
              </div>
              <div
                className={`answer ${isActive === "3" ? "active__answer" : ""}`}
              >
                <p>
                  You need a valid driver's license held for at least 1 year,
                  depending on the car category. You might also need an
                  International Driving Permit or official translation of the
                  license.
                </p>
              </div>
            </div>
            <div className="question__box m-auto">
              <div
                id="4"
                className={`question flex justify-between text-[1.2rem] py-3 ${
                  isActive === "4" ? "active__question" : ""
                }`}
                onClick={(e) => handleOpen(e)}
              >
                <p>4. How can I pay for my car?</p>
                <i className="ri-arrow-down-s-fill text-2xl"></i>
              </div>
              <div
                className={`answer ${isActive === "4" ? "active__answer" : ""}`}
              >
                <p>
                  Prepaid Bookings: You'll pay when you book online. Remember
                  that although your booking has been paid for, the main driver
                  will still be required to have a credit card in their name on
                  collection in order to pick up the car.
                </p>
              </div>
            </div>
            <div className="question__box m-auto">
              <div
                id="5"
                className={`question flex justify-between text-[1.2rem] py-3 ${
                  isActive === "5" ? "active__question" : ""
                }`}
                onClick={(e) => handleOpen(e)}
              >
                <p>5. How do I find the car rental deals?</p>
                <i className="ri-arrow-down-s-fill text-2xl"></i>
              </div>
              <div
                className={`answer ${isActive === "5" ? "active__answer" : ""}`}
              >
                <p>
                  You can find car rental deals by researching online and
                  comparing prices from different rental companies. Websites
                  such as Expedia, Kayak, and Travelocity allow you to compare
                  prices and view available rental options. It is also
                  recommended to sign up for email newsletters and follow rental
                  car companies on social media to be informed of any special
                  deals or promotions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
