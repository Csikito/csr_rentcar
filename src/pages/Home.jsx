import React from "react";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import InfoSection from "../components/InfoSection";
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
      <Hero />
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
      <PlanTrip />
      <InfoSection />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default Home;
