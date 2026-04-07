import React from "react";
import bgImage from "../assets/right-grid.svg";
import mobileImage from "../assets/mobile-image.png";
import ProgressLoad from "./ProgressLoad";

const CreatorSection = ({ scrollToForm }) => {
  return (
    <section
      className="
        w-full
        text-white
        py-12 sm:py-8
        px-2 sm:px-6
        bg-black
        bg-no-repeat
        bg-center
        bg-cover
      "
    >
      {/* ✅ Background ONLY on desktop */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            typeof window !== "undefined" && window.innerWidth >= 1024
              ? `url(${bgImage})`
              : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

       <h2 className="text-[26px] sm:text-5xl md:text-6xl font-extrabold leading-tight">
  THE WORLD IS <br className="hidden sm:block" />
  CONSUMING MORE <br className="hidden sm:block" />
  ENTERTAINMENT <br className="hidden sm:block" />
  THAN EVER AND IT <br className="hidden sm:block" />
  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
    NEEDS MORE <br className="hidden sm:block" /> CREATORS
  </span>
</h2>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-300 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              From animated films to Netflix series to AAA games, the world is
              hungry for visual storytellers.
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-200 font-medium">
              But studios don’t hire people with theory.
            </p>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-400 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              They hire people who can create, animate, design, and deliver
              production-ready work. That’s exactly what you learn here.
            </p>

            {/* CTA */}
            <button
  onClick={scrollToForm}
  className="mt-6 sm:mt-8 w-auto px-4 sm:px-12 py-2.5 rounded-full text-sm sm:text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition"
>
  Start Your Animation Career
</button>
            <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md ">
         📍 Campus located in Thane, Mumbai.
        </p>

            {/* Progress */}
            <div className="w-full flex justify-center lg:justify-start mt-2 sm:mt-6">
              <div className="inline-block">
                <ProgressLoad />
              </div>
            </div>

          </div>

          {/* RIGHT EMPTY (desktop only) */}
          <div className="hidden lg:block"></div>

          {/* ✅ MOBILE IMAGE */}
          <div className="w-full mt-0 lg:hidden">
            <img
              src={mobileImage}
              alt="mobile visual"
              className="w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
