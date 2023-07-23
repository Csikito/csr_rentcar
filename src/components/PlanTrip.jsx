import React from "react";
import SectionTitle from "./layout/SectionTitle";
import drive from "../images/home/planTrip/drive.png";
import operator from "../images/home/planTrip/operator.png";
import select from "../images/home/planTrip/select.png";

const PlanTrip = () => {
  return (
    <section className="py-48 bg-lightBlue bg-opacity-10">
      <div className="container m-auto px-5">
        <SectionTitle
          title="Quick & Easy Car Tental"
          subtitle="Plan your trip now"
        />
        <div className="flex flex-col sm:flex-row gap-12 md:gap-36 justify-center items-center">
          <div className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center scroll__left">
            <img src={select} alt="select car" className="w-[100px]" />
            <h3>Select Car</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center scroll__top">
            <img src={operator} alt="operator" className="w-[100px]" />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
          <div className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center scroll__right">
            <img src={drive} alt="drive car" className="w-[100px]" />
            <h3>Let's Drivev</h3>
            <p>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
