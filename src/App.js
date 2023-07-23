import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "scrollreveal";

function App() {
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");
  const [age, setAge] = useState("");
  const [pickUpDay, setPickUpDay] = useState("");
  const [dropOfDay, setDropOfDay] = useState("");

  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    console.log([pickUp, dropOf, age, pickUpDay, dropOfDay]);
    navigate("/fleet");
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2400,
      delay: 400,
    });
    sr.reveal(".scroll__top");
    sr.reveal(".scroll__right", { origin: "right" });
    sr.reveal(".scroll__left", { origin: "left" });
    sr.reveal(".scroll__bottom", { origin: "bottom" });
    sr.reveal(".scroll__scale", { scale: "0.8" });
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
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
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/fleet"
          element={
            <Fleet
              pickUp={pickUp}
              dropOf={dropOf}
              age={age}
              pickUpDay={pickUpDay}
              dropOfDay={dropOfDay}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
