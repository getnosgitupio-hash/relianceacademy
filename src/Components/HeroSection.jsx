import React from "react";
import logo from "../assets/logo.webp";
import heroCurve from "../assets/hero-banner.png";

const HeroSection = ({ openPopup }) => {
  return (
    <section className="w-full sm:min-h-screen bg-black text-white overflow-hidden">

      {/* TOP NAV */}
      <div className="absolute top-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center sm:justify-start z-20">
        <img src={logo} alt="logo" className="w-28 sm:w-32" />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-28">

        {/* Badge */}
        <div className="mb-5 sm:mb-6">
          <span className="flex items-center gap-2 text-[13px] sm:text-base bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-full backdrop-blur-md">

            <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-violet-600"></span>
            </span>

            Admissions Open 2026 | Limited Studio Seats Available
          </span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-[33px] sm:text-5xl md:text-[90px] font-extrabold leading-tight max-w-7xl">
          WHAT IF YOUR
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            IMAGINATION
          </span>{" "}
          BECAME
          <br />
          YOUR CAREER?
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-gray-300 max-w-md sm:max-w-xl">
          Animation. Visual Effects. Game Design. Film Making.
        </p>

        <p className="text-[11px] sm:text-base text-gray-500 mt-2 max-w-md sm:max-w-xl">
          Everything the entertainment industry needs. One place to master it.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto sm:w-auto">
          <button onClick={openPopup} className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full text-sm sm:text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition">
            Book Your Free Career Orientation
          </button>

          <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full text-sm sm:text-xl font-semibold border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            ▶ Watch Showreel
          </button>
        </div>

        {/* IMAGE BELOW CONTENT */}
        <div className="mt-6 sm:mt-0 w-full">
          <img
            src={heroCurve}
            alt="showcase"
            className="w-full object-cover opacity-90"
          />
        </div>
      </div>

      {/* GRADIENT BLEND */}
      <div className="w-full h-24 sm:h-32 bg-gradient-to-t from-black to-transparent -mt-20 sm:-mt-28"></div>

    </section>
  );
};

export default HeroSection;