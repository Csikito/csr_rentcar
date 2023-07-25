import React from "react";
import no_vehicle from "../images/fleet/no_vehicle.png";
import SectionTitle from "../components/layout/SectionTitle";
import FleetFilter from "../components/FleetFilter";
import BookCar from "../components/BookCar";
import { VEHICLE_DATA } from "../components/VehicleData";
import FleetCard from "../components/FleetCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Fleet = ({
  pickUp,
  dropOf,
  age,
  pickUpDay,
  dropOfDay,
  setPickUp,
  setDropOf,
  setAge,
  setPickUpDay,
  setDropOfDay,
  handleBook,
}) => {
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredData, setFilteredData] = useState(VEHICLE_DATA);
  const [clickFilter, setClickFilter] = useState(false);

  useEffect(() => {
    if (filteredTags.length > 0) {
      const checkboxValue = new Set(filteredTags.map((item) => item.value));
      let newData = VEHICLE_DATA;

      /************************* Vehicle *******************************/
      if (checkboxValue.has("car") || checkboxValue.has("motor")) {
        newData = newData.filter((data) => {
          return checkboxValue.has(data.vehicle.toLocaleLowerCase());
        });
      }

      /************************* Transmission *******************************/
      if (checkboxValue.has("manual") || checkboxValue.has("automatic")) {
        newData = newData.filter((data) => {
          return checkboxValue.has(data.transmission.toLocaleLowerCase());
        });
      }

      /************************* Fuel *******************************/
      if (
        checkboxValue.has("petrol") ||
        checkboxValue.has("diesel") ||
        checkboxValue.has("electric")
      ) {
        newData = newData.filter((data) => {
          return checkboxValue.has(data.fuel.toLocaleLowerCase());
        });
      }

      /************************* Price/day *******************************/

      if (
        checkboxValue.has("price__20k") ||
        checkboxValue.has("price__30k") ||
        checkboxValue.has("price__40k") ||
        checkboxValue.has("price__40k+")
      ) {
        newData = newData.filter((data) => {
          let powerData;
          if (checkboxValue.has("price__20k")) {
            powerData += data.price <= 20000 ? data : null;
          }

          if (checkboxValue.has("price__30k")) {
            powerData +=
              data.price >= 20000 && data.price <= 30000 ? data.price : null;
          }

          if (checkboxValue.has("price__40k")) {
            powerData +=
              data.price >= 30000 && data.price <= 40000 ? data.price : null;
          }
          if (checkboxValue.has("price__40k+")) {
            powerData += data.price >= 40001 ? data.price : null;
          }

          return powerData;
        });
      }
      /************************* Power *******************************/

      if (
        checkboxValue.has("power_90") ||
        checkboxValue.has("power_110") ||
        checkboxValue.has("power_130") ||
        checkboxValue.has("power_150") ||
        checkboxValue.has("power_150+")
      ) {
        newData = newData.filter((data) => {
          let powerData;
          if (checkboxValue.has("power_90")) {
            powerData += data.power <= 90 ? data : null;
          }

          if (checkboxValue.has("power_110")) {
            powerData +=
              data.power >= 90 && data.power <= 110 ? data.power : null;
          }

          if (checkboxValue.has("power_130")) {
            powerData +=
              data.power >= 110 && data.power <= 130 ? data.power : null;
          }
          if (checkboxValue.has("power_150")) {
            powerData +=
              data.power >= 133 && data.power <= 150 ? data.power : null;
          }
          if (checkboxValue.has("power_150+")) {
            powerData += data.power >= 151 ? data : null;
          }

          return powerData;
        });
      }

      /**************************************************************/
      window.scroll({
        top: 400,
        left: 0,
        behavior: "smooth",
      });
      setFilteredData(newData);
    } else {
      setFilteredData(VEHICLE_DATA);
    }
  }, [filteredTags]);

  return (
    <main className="py-24 sm:py-36">
      <div className="lg:container m-auto px-5 ">
        <SectionTitle title="Fleet" subtitle="Car Park" />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
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
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,

            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          <section className="flex flex-col lg:flex-row relative ">
            <div className="sticky top-0  z-30">
              <button
                className=" absolute top-0  -left-10 hover:-left-8 lg:hidden  sm:my-8 text-body  bg-lightGreen hover:bg-purple  cursor-pointer duration-300 ease-in-out text-2xl pl-8 pr-2 py-2 rounded-lg  "
                onClick={() => setClickFilter(!clickFilter)}
              >
                <i className="ri-filter-line"></i>
              </button>
            </div>

            <div className=" sticky top-0 left-5 z-30 lg:left-0 lg:relative sm:min-w-[310px] lg:pr-10 lg:py-8 duration-500 ">
              <FleetFilter
                filteredData={filteredData}
                setFilteredTags={setFilteredTags}
                clickFilter={clickFilter}
                setClickFilter={setClickFilter}
              />
            </div>
            <div className="fleet w-full">
              {filteredData.length > 0 ? (
                filteredData.map((data) => (
                  <FleetCard
                    data={data}
                    key={data.id}
                    pickUp={pickUp}
                    dropOf={dropOf}
                    age={age}
                    pickUpDay={pickUpDay}
                    dropOfDay={dropOfDay}
                  />
                ))
              ) : (
                <div className=" text-center relative">
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5">
                    <img src={no_vehicle} alt="no_vehicle" />
                  </div>
                  <p className="animate-pulse text-purple text-2xl py-48 ">
                    <span className="text-4xl text-lightGreen">Sorry</span>{" "}
                    <br /> There is no such vehicle in our fleet
                  </p>
                </div>
              )}
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default Fleet;
