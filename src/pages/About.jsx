import React from "react";
import SectionTitle from "../components/layout/SectionTitle";
import team_1 from "../images/about/team_1.jpg";
import team_3 from "../images/about/team_3.jpg";
import team_4 from "../images/about/team_4.jpg";
import team_5 from "../images/about/team_5.jpg";
import team_6 from "../images/about/team_6.jpg";
import team_7 from "../images/about/team_7.jpg";
import company from "../images/about/company.jpg";
import car_type from "../images/about/car_type.png";
import cars from "../images/about/cars.png";
import users from "../images/about/users.png";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main>
      <section className="py-24 sm:py-36">
        <div className="container m-auto px-5">
          <SectionTitle
            title="About Company"
            subtitle="Excellent professionals"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            className="flex flex-col justify-center items-center md:flex-row gap-10  lg:gap-28 "
          >
            <div className="w-full md:w-1/2 scroll__scale">
              <img src={company} alt="about company" />
            </div>
            <div className="w-full md:w-1/2 gap-10 flex flex-col justify-evenly items-center ">
              <div className="max-w-[500px] opacity-80 scroll__left ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                quia doloremque deleniti accusantium voluptas officiis placeat
                harum molestiae quisquam? Repellendus aliquam obcaecati
                assumenda consequuntur optio magnam ducimus dignissimos fugiat
                deserunt!
              </div>
              <div className="w-full flex flex-col items-center gap-10 sm:flex-row sm:justify-between scroll__right">
                <div className="w-[80px] lg:w-[100px] text-center ">
                  <img src={car_type} alt="car_type" />
                  <p className="text-[2rem] pt-4">
                    <CountUp end={20} duration={8} />+
                  </p>
                  <p>car type</p>
                </div>
                <div className="w-[80px] lg:w-[100px] text-center">
                  <img src={cars} alt="cars" />
                  <p className="text-[2rem] pt-4">
                    <CountUp end={200} duration={8} />
                    K+
                  </p>
                  <p>car rental per year</p>
                </div>
                <div className="w-[80px] lg:w-[100px] text-center">
                  <img src={users} alt="users" />
                  <p className="text-[2rem] pt-4">
                    <CountUp end={999} duration={8} />
                    K+
                  </p>
                  <p>satisfied customer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 sm:pt-28 sm:pb-36 bg-lightBlue bg-opacity-10">
        <div className="container m-auto px-3">
          <SectionTitle title="Our Team" subtitle="Excellent professionals" />

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className="flex flex-wrap justify-center gap-12 lg:gap-32 scroll__scale"
          >
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_1} alt="team__img" />
              </div>
              <h2 className="mt-5">Felix Jordan</h2>
              <p className=" opacity-60">Business Owner</p>
            </div>
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_6} alt="team__img" />
              </div>
              <h2 className="mt-5">Dennis Watkins</h2>
              <p className=" opacity-60">Customer service manager</p>
            </div>
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_3} alt="team__img" />
              </div>
              <h2 className="mt-5">Frank James</h2>
              <p className=" opacity-60">Mechanic</p>
            </div>
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_4} alt="team__img" />
              </div>
              <h2 className="mt-5">Christy Hughes</h2>
              <p className=" opacity-60">Photographer</p>
            </div>
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_5} alt="team__img" />
              </div>
              <h2 className="mt-5">Same Jordan</h2>
              <p className=" opacity-60">Salesman</p>
            </div>
            <div className="w-[300px] text-center text-body  bg-lightGreen pb-3 shadow-sm shadow-purple">
              <div>
                <img src={team_7} alt="team__img" />
              </div>
              <h2 className="mt-5">Ken Wright</h2>
              <p className=" opacity-60">Manager</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
