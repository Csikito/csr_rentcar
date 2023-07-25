import React from "react";
import SectionTitle from "./layout/SectionTitle";
import drive from "../images/home/planTrip/drive.png";
import operator from "../images/home/planTrip/operator.png";
import select from "../images/home/planTrip/select.png";
import { motion } from "framer-motion";

const PlanTrip = () => {
  return (
    <section className="py-28 sm:py-48 bg-lightBlue bg-opacity-10">
      <div className="container m-auto px-5">
        <SectionTitle
          title="Quick & Easy Car Tental"
          subtitle="Plan your trip now"
        />

        <div className="flex flex-col sm:flex-row gap-12 md:gap-36 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center"
          >
            <img src={select} alt="select car" className="w-[100px]" />
            <h3>Select Car</h3>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center"
          >
            <img src={operator} alt="operator" className="w-[100px]" />
            <h3>Contact Operator</h3>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5 },
            }}
            className="max-w-[400px] flex flex-col gap-5 justify-center items-center text-center"
          >
            <img src={drive} alt="drive car" className="w-[100px]" />
            <h3>Let's Drivev</h3>
            <p>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
