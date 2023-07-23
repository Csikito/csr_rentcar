import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 contact__shadow">
      <div className="container m-auto flex flex-wrap justify-center  gap-10 px-5 scroll__bottom">
        <div className=" w-[250px]">
          <h2 className="mb-3 text-[24px] text-purple">CAR Rental</h2>
          <p className="mb-3">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <p>
            <i className="ri-phone-line text-xl mr-2"></i>+36/30-741-6974
          </p>
          <p>
            <i className="ri-mail-line text-xl mr-2"></i>csrcarrental@gmail.com
          </p>
        </div>
        <div className=" w-[250px]">
          <h2 className="mb-3 text-[24px] text-purple">COMPANY</h2>
          <ul>
            <li className="mb-1">Budapest</li>
            <li className="mb-1">Careers</li>
            <li className="mb-1">Mobile</li>
            <li className="mb-1">Blog</li>
            <li className="mb-1">How we work</li>
          </ul>
        </div>
        <div className=" w-[250px]">
          <h2 className="mb-3 text-[24px] text-purple">WORKING HOURS</h2>
          <ul>
            <li className="mb-1">
              Monday-Friday: <br /> 9:00AM - 9:00PM
            </li>
            <li className="mb-1">Saturday: 9:00AM - 7:00PM</li>
            <li className="mb-1">Sunday: Closed</li>
          </ul>
        </div>
        <div className=" w-[250px]">
          <h2 className="mb-3 text-[24px] text-purple">SUBSCRIPTION</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <form>
            <input
              type="text"
              placeholder="Enter Email Address"
              className=" bg-transparent border-2 border-lightGreen p-2 my-3 text-purple outline-none"
            />
            <button className="btn__2">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
