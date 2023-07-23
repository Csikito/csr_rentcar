import React, { useState } from "react";
import logo from "../images/logo/rent_car_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("hidden");

  const isOpenMenu = () => {
    if (menu === "hidden" && window.innerWidth < 640) {
      setMenu("");
    } else {
      setMenu("hidden");
    }
  };

  return (
    <nav className=" container m-auto relative px-0 sm:px-2 ">
      <div className="absolute w-full flex justify-between items-center py-5 pr-4  z-30 ">
        <div className="max-w-[70px]">
          <img src={logo} alt="rent_car_logo" />
        </div>
        <button
          type="button"
          className="absolute right-5 inline-flex items-center p-2 justify-center text-2xl sm:hidden z-50"
          onClick={() => isOpenMenu()}
        >
          <span className="sr-only">Open main menu</span>
          {menu === "hidden" ? (
            <i className="ri-menu-5-line"></i>
          ) : (
            <i className="ri-close-line"></i>
          )}
        </button>
        <div className={`sm:block ${menu}`}>
          <div className=" absolute sm:relative w-full top-0 left-0   bg-black bg-opacity-90 sm:bg-transparent font-bold">
            <ul className="flex flex-col py-36 sm:py-0 sm:flex-row gap-4 sm:gap-5 text-center">
              <li className="relative group ">
                <Link
                  to="/"
                  className="nav__link__hover nav__color"
                  onClick={() => isOpenMenu()}
                >
                  Home
                </Link>
                <span className="sm:nav__span"></span>
              </li>
              <li className="relative group ">
                <Link
                  to="/about"
                  className="nav__link__hover nav__color "
                  onClick={() => isOpenMenu()}
                >
                  About
                </Link>
                <span className="sm:nav__span"></span>
              </li>
              <li className="relative group ">
                <Link
                  to="/fleet"
                  className="nav__link__hover nav__color "
                  onClick={() => isOpenMenu()}
                >
                  Fleet
                </Link>
                <span className="sm:nav__span"></span>
              </li>
              <li className="relative group ">
                <Link
                  to="/contact"
                  className="nav__link__hover nav__color "
                  onClick={() => isOpenMenu()}
                >
                  Contact
                </Link>
                <span className="sm:nav__span"></span>
              </li>
              <li className="">
                <Link
                  to="/"
                  className="btn__1 whitespace-nowrap "
                  onClick={() => isOpenMenu()}
                >
                  Sign In
                </Link>
              </li>
              <li className="my-4 sm:my-0">
                <Link to="/" className="btn__2" onClick={() => isOpenMenu()}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
