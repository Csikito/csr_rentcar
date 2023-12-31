import React from "react";
import title_car from "../../images/layout/title_car.png";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.4 },
      }}
    >
      <div className="text-center mb-5 sm:mb-12 md:mb-28 py-5 rounded-t-full relative scroll__bottom">
        <div className="absolute max-w-[400px] opacity-5 top-0 left-1/2 -translate-x-1/2">
          <img src={title_car} alt="car" />
        </div>
        <div className="relative">
          <h3 className=" tracking-widest ">{subtitle}</h3>
          <h2 className="font-bold pt-3 inline-block border-b-4 border-purple ">
            {title}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

/*scroll__scale*/

export default SectionTitle;
