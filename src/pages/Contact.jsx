import React from "react";
import SectionTitle from "../components/layout/SectionTitle";
import contact_img from "../images/contact/contact_img.png";

const Contact = () => {
  return (
    <main className="py-36 ">
      <div className="container m-auto relative px-5">
        <SectionTitle
          title="Contact Us"
          subtitle="Submit a question to our support team."
        />
        <div className="w-full  absolute top-3/4 sm:top-48 left-1/2 -translate-x-1/2 opacity-10">
          <img src={contact_img} alt="contact" className="m-auto" />
        </div>
        <form className="contact__form flex flex-col sm:flex-row justify-center items-center relative">
          <div className="scroll__left">
            <div className="form__box">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
            <div className="form__box">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" />
            </div>
            <div className="form__box">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form__box">
              <label htmlFor="number">Phone</label>
              <input type="number" id="number" name="number" />
            </div>

            <div className="form__box">
              <label htmlFor="question">Type of Question</label>
              <select name="question" id="question" defaultValue={"default"}>
                <option value="default">Choose One</option>{" "}
                <option value="PAST_RENTAL">Past Rental</option>{" "}
                <option value="LEFT_SMTH">
                  I left something in the vehicle
                </option>{" "}
                <option value="GOLD_MEMBER_QUEST">Gold Membership</option>{" "}
                <option value="REC_NOT_FOUND">Receipt not Found</option>{" "}
                <option value="VEHICLE_DMG">
                  Pre-existing body damage when rented
                </option>{" "}
                <option value="CAR_NOT_CLEAN">Vehicle was not cleaned</option>{" "}
                <option value="BAD_FUEL_LEVEL">
                  Vehicle did not have full tank when rented
                </option>{" "}
                <option value="SIRIUSXM">
                  SiriusXM Radio troubleshooting &amp; activation
                </option>{" "}
                <option value="BEST_RATE">Best Rate Guarantee Questions</option>{" "}
                <option value="HTZ_REWARDS">Hertz Rewards Points</option>{" "}
                <option value="TRVL_PARTNERS">
                  Travel Partners - Miles/Points/Credits with
                  Air/Hotel/Rail/Loyalty Program
                </option>
              </select>
            </div>
          </div>
          <div className="form__box  sm:max-w-[600px] sm:pl-10 scroll__right">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-transparent border-2 border-lightGreen w-full h-60 mt-2 resize-none p-4 outline-none"
            ></textarea>
            <button type="submit" className="btn__2 w-full mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
