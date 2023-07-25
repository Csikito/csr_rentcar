import React from "react";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import InfoSection from "../components/InfoSection";
import { motion } from "framer-motion";
const Home = ({
  pickUp,
  setPickUp,
  dropOf,
  setDropOf,
  age,
  setAge,
  pickUpDay,
  setPickUpDay,
  dropOfDay,
  setDropOfDay,
  handleBook,
}) => {
  return (
    <main className="pt-36">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <BookCar
          pickUp={pickUp}
          setPickUp={setPickUp}
          dropOf={dropOf}
          setDropOf={setDropOf}
          age={age}
          setAge={setAge}
          pickUpDay={pickUpDay}
          setPickUpDay={setPickUpDay}
          dropOfDay={dropOfDay}
          setDropOfDay={setDropOfDay}
          handleBook={handleBook}
        />
      </motion.div>
      <PlanTrip />
      <InfoSection />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default Home;
