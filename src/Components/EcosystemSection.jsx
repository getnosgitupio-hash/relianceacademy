import React from "react";

import filmIcon from "../assets/film.png";
import animationIcon from "../assets/animation.png";
import gameIcon from "../assets/game.png";

import netflix from "../assets/singam.jpg";
import pogo from "../assets/simma.jpg";
import voot from "../assets/3-iddiots.jpg";
import ProgressLoad from "./ProgressLoad";  

export default function EcosystemSection({ scrollToForm }) {
  return (
    <section className="bg-black text-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[26px] sm:text-6xl font-bold leading-snug sm:leading-tight">
          PART OF THE RELIANCE <br className="hidden sm:block" />
          ENTERTAINMENT ECOSYSTEM
        </h2>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-gray-400 max-w-md sm:max-w-3xl mx-auto text-xs sm:text-lg leading-relaxed">
          When you join, you don’t just learn.
          <br className="hidden sm:block" />
        
          <span className="text-white font-medium">
          You become part of a larger creative network powered by Reliance.
          </span>
        </p>

        {/* Cards */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">

          {/* Card 1 */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-gray-500 via-gray-500/20 to-transparent">
            <div className="bg-[#0b0b0b] rounded-2xl p-6 sm:p-8 h-full text-left">

              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-red-500/10 mb-4 sm:mb-6">
                <img src={filmIcon} alt="" className="w-8 sm:w-10" />
              </div>

              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Reliance Entertainment
              </h3>

              <p className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">300+ films</p>

              <p className="text-gray-400 text-xs sm:text-sm">
                distributed globally and <br className="hidden sm:block" /> presence in 100+ countries.
              </p>

            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-gray-500 via-gray-500/20 to-transparent">
            <div className="bg-[#0b0b0b] rounded-2xl p-6 sm:p-8 h-full text-left">

              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 mb-4 sm:mb-6">
                <img src={animationIcon} alt="" className="w-8 sm:w-10" />
              </div>

              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4">
                Reliance Animation Studios
              </h3>

              <p className="text-gray-400 text-xs sm:text-md mb-3 sm:mb-4">
                Creators behind shows like:
              </p>

              <ul className="text-xs sm:text-sm space-y-1 mb-4 sm:mb-6">
                <li>• Little Singham</li>
                <li>• Golmaal Jr</li>
                <li>• Little Krishna</li>
                <li>• Smashing Simmba</li>
              </ul>

              <p className="text-gray-400 text-[11px] sm:text-md mb-2 sm:mb-3">
                Streaming platforms include:
              </p>

              

            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-gray-500 via-gray-500/20 to-transparent">
            <div className="bg-[#0b0b0b] rounded-2xl p-6 sm:p-8 h-full text-left">

              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-green-500/10 mb-4 sm:mb-6">
                <img src={gameIcon} alt="" className="w-8 sm:w-10" />
              </div>

              <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4">
                Reliance Games
              </h3>

              <p className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1200+ games</p>

              <p className="text-gray-400 text-xs sm:text-md">
                with millions of players worldwide.
              </p>

            </div>
          </div>
          

        </div>

        <div className="w-full flex items-center justify-center h-full mt-8">
  <div className="flex items-center gap-4 flex-wrap justify-center">
    <img src={netflix} alt="Little Singham" className="h-20 sm:h-full object-contain" />
    <img src={pogo} alt="Smashing Simmba" className="h-20  sm:h-full object-contain" />
    <img src={voot} alt="3 Idiots" className="h-20 sm:h-full object-contain" />
  </div>
</div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14">
          <button
            onClick={scrollToForm}
            className="w-auto sm:w-auto max-w-md sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base sm:text-2xl font-medium shadow-lg hover:opacity-90 transition"
          >
            Discover Industry Opportunities
          </button>
        </div>
        <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
         📍 Campus located in Thane, Mumbai.
        </p>
         <div className="w-full flex justify-center lg:justify-center mt-2 sm:mt-6">
                        <div className="inline-block">
                          <ProgressLoad />
                        </div>
                      </div>

      </div>
    </section>
  );
}
