import React from "react";

const FleetFilter = ({
  filteredData,
  setFilteredTags,
  clickFilter,
  setClickFilter,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputCheckBox = Object.values(e.target);
    let data = inputCheckBox.filter((item) => item.checked === true);
    setFilteredTags(data);
    setClickFilter(!clickFilter);
  };

  return (
    <>
      <div
        className={`${
          clickFilter ? "left-5" : "-left-96"
        } absolute lg:sticky top-0 sm:top-8 h-[500px] md:h-auto flex flex-col gap-3 border-2 bg-body z-30 border-lightGreen p-5 rounded-sm duration-500 overflow-y-scroll md:overflow-y-auto`}
      >
        <form
          className="flex flex-col gap-3 checkbox-rect"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="  border-b-2 border-lightBlue pb-3">
            <h4>
              Vehicle {""}
              <span
                className={`${
                  filteredData.length === 0
                    ? "animate-pulse text-purple"
                    : "text-lightBlue"
                }`}
              >
                ( {filteredData.length} )
              </span>
            </h4>
            <span></span>
            <div>
              <input type="checkbox" id="car" value="car" />
              <label htmlFor="car"> Car</label>
            </div>
            <div>
              <input type="checkbox" id="motor" value="motor" />
              <label htmlFor="motor"> Motor</label>
            </div>
          </div>
          <div className=" border-b-2 border-lightBlue pb-3">
            <h4>Price / day</h4>

            <div>
              <input type="checkbox" id="price__20k" value="price__20k" />
              <label htmlFor="price__20k"> HUF 0 - HUF 20,000 </label>
            </div>
            <div>
              <input type="checkbox" id="price__30k" value="price__30k" />
              <label htmlFor="price__30k"> HUF 20,000 - HUF 30,000</label>
            </div>
            <div>
              <input type="checkbox" id="price__40k" value="price__40k" />
              <label htmlFor="price__40k"> HUF 30,000 - HUF 40,000</label>
            </div>
            <div>
              <input type="checkbox" id="price__40k+" value="price__40k+" />
              <label htmlFor="price__40k+"> HUF 40,000 + </label>
            </div>
          </div>
          <div className=" border-b-2 border-lightBlue pb-3">
            <h4>Transmission</h4>

            <div>
              <input type="checkbox" id="automatic" value="automatic" />
              <label htmlFor="automatic"> Automatic </label>
            </div>
            <div>
              <input type="checkbox" id="manual" value="manual" />
              <label htmlFor="manual"> Manual</label>
            </div>
          </div>
          <div className=" border-b-2 border-lightBlue pb-3">
            <h4>Power</h4>
            <div>
              <input type="checkbox" id="power_90" value="power_90" />
              <label htmlFor="power_90"> 0 - 90 Hp</label>
            </div>
            <div>
              <input type="checkbox" id="power_110" value="power_110" />
              <label htmlFor="power_110"> 91 - 110 Hp</label>
            </div>
            <div>
              <input type="checkbox" id="power_130" value="power_130" />
              <label htmlFor="power_130"> 111 - 130 Hp</label>
            </div>
            <div>
              <input type="checkbox" id="power_150" value="power_150" />
              <label htmlFor="power_150"> 131 - 150 Hp</label>
            </div>
            <div>
              <input type="checkbox" id="power_150+" value="power_150+" />
              <label htmlFor="power_150+"> 151+ Hp</label>
            </div>
          </div>
          <div>
            <h4>Fuel</h4>

            <div>
              <input type="checkbox" id="petrol" value="petrol" />
              <label htmlFor="petrol"> Petrol</label>
            </div>
            <div>
              <input type="checkbox" id="diesel" value="diesel" />
              <label htmlFor="diesel"> Diesel</label>
            </div>
            <div>
              <input type="checkbox" id="electric" value="electric" />
              <label htmlFor="electric"> Electric</label>
            </div>
          </div>
          <button type="submit" className="btn__1">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default FleetFilter;
