import React from "react";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import ProgressLoad from "./ProgressLoad";

const programs = [
  {
    icon: icon1,
    title: "B.Sc in Animation & Media Graphics",
    desc: "A comprehensive degree covering the entire pipeline of animation and media creation.",
  },
  {
    icon: icon2,
    title: "Master Program in Animation",
    desc: "Advanced techniques in 3D and 2D animation for feature films and television.",
  },
  {
    icon: icon3,
    title: "Master Program in VFX Film Making",
    desc: "Master compositing, rotoscoping, and CGI integration for blockbuster visual effects.",
  },
  {
    icon: icon4,
    title: "Master Program in Game Design & Development",
    desc: "Build immersive worlds, character mechanics, and interactive experiences for AAA games.",
  },
];

const ProgramsSection = ({ scrollToForm }) => {
  return (
    <section className="w-full bg-[#f3f3f5] py-12 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-[26px] sm:text-6xl font-bold text-gray-800 leading-snug sm:leading-tight">
          LEARN THE SKILLS THAT POWER <br className="hidden sm:block" />
          TODAY’S ENTERTAINMENT INDUSTRY
        </h2>

        {/* SUBTEXT */}
        <p className="mt-3 sm:mt-4 text-gray-500 max-w-md sm:max-w-2xl mx-auto text-sm sm:text-base">
          Programs designed with real studio workflows. Every program focuses on
          portfolio building, production pipelines, and studio readiness.
        </p>

        {/* CARDS */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 text-left border border-gray-200 hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-50 rounded-lg mb-3 sm:mb-4">
                <img src={item.icon} alt="icon" className="w-16 sm:w-12" />
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 sm:mt-3 text-md sm:text-base text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12">
          <button
            onClick={scrollToForm}
            className="w-auto sm:w-auto max-w-md sm:max-w-none px-5 sm:px-14 py-3 rounded-full text-base sm:text-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:opacity-90 transition"
          >
            Explore Our Programs
          </button>
        </div>
         <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
         📍 Campus located in Thane, Mumbai.
        </p>

        {/* Progress */}
        <div className="mt-2 sm:mt-2 flex justify-center">
          <ProgressLoad />
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
