import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { APP_URL, MENU } from "../../config";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-fit sticky top-0 border-b-2 bg-white z-50 border-[#F2F4D0] flex justify-between items-center xl:px-32 lg:px-20 md:px-12 sm:px-6 px-4 lg:py-3 py-2">
      <section className="cursor-pointer">
        <Link to={APP_URL.HOME} className="flex items-center gap-x-3">
          <div className="w-5 h-12 overflow-hidden -mb-1">
            <img
              className="w-full h-full object-contain"
              src={logo}
              alt="r-k"
            />
          </div>
          <h1 className="font-bold text-2xl">
            <span className="text-[#164760]">Register</span>
            <span className="text-[#FFA229]">Karo</span>
          </h1>
        </Link>
      </section>

      {/* Desktop Menu */}
      <section className="gap-x-6 items-center lg:flex hidden xl:ml-84 lg:ml-6">
        {MENU.map((ele, ind) => (
          <Link
            className={`text-lg font-semibold hover:text-[#164760] ${
              ele.url === location?.pathname
                ? "text-[#164760]"
                : "text-[#575757]"
            }`}
            key={`${ele.name}-${ind}`}
            to={ele.url}
          >
            {ele.name}
          </Link>
        ))}
        <button className="px-4 py-2 bg-[#ffa229] flex items-center gap-x-2 rounded-full cursor-pointer">
          <BsFillTelephoneFill />
          <span className="text-white text-lg">+918447746183</span>
        </button>
      </section>

      {/* Hamburger Menu */}
      <section className="lg:hidden block absolute md:right-10 right-6 ">
        <div onClick={toggleMenu}>
          <GiHamburgerMenu className="md:text-xl text-lg" size={25} />
        </div>
      </section>

      {/* Mobile Overlay & Menu */}
      <div className="relative z-40">
        {/* Backdrop */}
        <div
          className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Menu */}
        <div
          className={`fixed top-16 right-0 h-[calc(100vh-4rem)] md:w-1/2 w-[90%] bg-white z-50 shadow-lg transform transition-transform duration-500 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-y-6 px-4 pt-6">
            {MENU.map((ele, ind) => (
              <Link
                className={`text-2xl py-2 font-semibold hover:text-[#164760] ${
                  ele.url === location?.pathname
                    ? "text-[#164760]"
                    : "text-[#575757]"
                }`}
                key={`${ele.name}-${ind}`}
                to={ele.url}
                onClick={() => setIsMenuOpen(false)}
              >
                {ele.name}
              </Link>
            ))}
            <button className="px-4 py-2 bg-[#ffa229] flex items-center justify-center gap-x-2 rounded-2xl cursor-pointer">
              <BsFillTelephoneFill />
              <span className="text-white text-lg">+918447746183</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
