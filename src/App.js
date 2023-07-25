import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");
  const [age, setAge] = useState("");
  const [pickUpDay, setPickUpDay] = useState("");
  const [dropOfDay, setDropOfDay] = useState("");

  const navigate = useNavigate();

  const handleBook = (e) => {
    e.preventDefault();
    navigate("/fleet");
  };

  useEffect(() => {}, [pickUp, dropOf, age]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/csr_rentcar"
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
        <Route path="/csr_rentcar/about" element={<About />} />
        <Route
          path="/csr_rentcar/fleet"
          element={
            <Fleet
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
        <Route path="/csr_rentcar/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
