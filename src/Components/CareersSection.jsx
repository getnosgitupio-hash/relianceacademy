import React, { useState } from "react";
import ProgressLoad from "./ProgressLoad";

const roles = [
  "3D ANIMATOR",
  "VFX ARTIST",
  "COMPOSITOR",
  "GAME DESIGNER",
  "LIGHTING ARTIST",
  "FX ARTIST",
  "VIDEO EDITOR",
  "CHARACTER DESIGNER",
];

export default function CareersSection({ scrollToForm }) {
  const [active, setActive] = useState("VFX ARTIST");

  return (
    <section className="bg-black text-white py-14 sm:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-40 sm:h-64 bg-gradient-to-br from-[#5338FF] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-[26px] md:text-6xl font-semibold tracking-wide text-gray-300 leading-snug sm:leading-normal">
          WORK TOWARDS REAL CAREERS IN THE CREATIVE INDUSTRY
        </h2>

        <p className="mt-2 sm:mt-3 text-gray-500 text-xs sm:text-xl">
          Graduates from animation programs go on to roles like:
        </p>

        {/* Roles */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-x-3 sm:gap-x-6 gap-y-3 sm:gap-y-4 max-w-5xl mx-auto">

          {roles.map((role) => {
            const isActive = active === role;

            return (
              <span
                key={role}
                onMouseEnter={() => setActive(role)}   // desktop hover
                onClick={() => setActive(role)}        // mobile tap ✅
                className={`
                  text-lg sm:text-3xl md:text-7xl font-bold cursor-pointer transition-all duration-300

                  ${isActive
                    ? "bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text"
                    : "text-gray-700 hover:text-gray-400"
                  }
                `}
              >
                {role}
              </span>
            );
          })}

        </div>

        {/* Bottom Text */}
        <p className="mt-8 sm:mt-12 text-gray-500 text-xs sm:text-xl max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Studios look for people who can create{" "}
          <span className="text-white font-medium">
            production-ready work.
          </span>
          <br className="hidden sm:block" />
          That’s exactly what the training prepares you for.
        </p>

        {/* CTA */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={scrollToForm}
            className="w-auto sm:w-auto max-w-md sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base sm:text-2xl font-medium shadow-lg hover:opacity-90 transition"
          >
            Start Building Your Portfolio
          </button>
        </div>


      </div>
      <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
        📍 Campus located in Thane, Mumbai.
      </p>
      <div className="w-full flex justify-center lg:justify-center mt-2 sm:mt-6">
        <div className="inline-block">
          <ProgressLoad />
        </div>
      </div>
    </section>
  );
}
