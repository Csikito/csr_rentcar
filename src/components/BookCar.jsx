import React from "react";

const BookCar = ({
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
    <section className="mb-28 sm:mb-48">
      <div className="max-w-[1240px] m-auto px-5 ">
        <div className="w-full  book__img  form__shadow rounded-md pt-5 pb-10 px-10 text-text scroll__scale">
          <h3 className="text-[24px] font-bold text-center md:text-left">
            Book a car
          </h3>
          <form
            className="flex flex-wrap justify-center md:justify-between"
            onSubmit={(e) => handleBook(e)}
          >
            <div className="form__box w-full ">
              <label htmlFor="pick-up" className="required">
                Pick Up
              </label>
              <select
                name="pick-up"
                id="pick-up"
                placeholder="Pick up place"
                value={pickUp}
                onChange={(e) => setPickUp(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option value="BP. Liszt Ferenc Repülőtér">
                  BP. Liszt Ferenc Repülőtér
                </option>
                <option value="Népliget">Népliget</option>
                <option value="Városliget">Városliget</option>
              </select>
            </div>
            <div className="form__box w-full ">
              <label htmlFor="pick-up" className="required">
                Drop Of
              </label>
              <select
                name="pick-up"
                id="pick-up"
                placeholder="Pick up place"
                value={dropOf}
                onChange={(e) => setDropOf(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option value="BP. Liszt Ferenc Repülőtér">
                  BP. Liszt Ferenc Repülőtér
                </option>
                <option value="Népliget">Népliget</option>
                <option value="Városliget">Városliget</option>
              </select>
            </div>
            <div className="form__box w-full">
              <label htmlFor="driver-age" className="required">
                Driver's age
              </label>
              <select
                name="driver-age"
                id="driver-age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              >
                <option value="">Select an Option</option>
                <option value="18-24">18-24</option>
                <option value="25-74">25-74</option>
                <option value="75+">75+</option>
              </select>
            </div>
            <div className="form__box w-full">
              <label htmlFor="pick-up-day" className="required">
                Pick Up Day
              </label>

              <input
                type="date"
                value={pickUpDay}
                onChange={(e) => setPickUpDay(e.target.value)}
                required
              />
            </div>
            <div className="form__box w-full">
              <label htmlFor="drop-of-day" className="required">
                Drop Of Day
              </label>
              <input
                type="date"
                value={dropOfDay}
                onChange={(e) => setDropOfDay(e.target.value)}
                required
              />
            </div>
            <div className="form__box w-full flex justify-center items-end ">
              <button type="submit" className="btn__2 w-full">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookCar;
