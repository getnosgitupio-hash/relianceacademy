import React from "react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import icon1 from "../assets/icon-11.png";
import icon2 from "../assets/icon-12.png";
import icon3 from "../assets/icon-13.png";
import icon4 from "../assets/icon-14.png";
import ProgressLoad from "./ProgressLoad";

const features = [
  {
    icon: icon1,
    title: "Industry Mentors",
    desc: "Learn directly from professionals with real animation and VFX studio experience.",
  },
  {
    icon: icon2,
    title: "Production-Focused Curriculum",
    desc: "Courses designed around real workflows used in top-tier animation studios.",
  },
  {
    icon: icon3,
    title: "Studio Exposure",
    desc: "Get insights and mentorship from experts working with Reliance Animation Studios.",
  },
  {
    icon: icon4,
    title: "Career-Focused Learning",
    desc: "Every project you build contributes to a portfolio that studios want to see.",
  },
];

export default function WhyChooseSection({ scrollToForm }) {
  return (
    <section className="bg-[#f5f6f8] py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* LEFT GRID */}
        <div className="flex justify-center lg:justify-start items-center h-full">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 w-full max-w-sm sm:max-w-none">

            {/* BOX 1 */}
            <div className="relative h-[160px] sm:h-[280px] rounded-2xl overflow-hidden shadow-md">
              <img src={img1} alt="" className="w-full h-full object-cover" />
            </div>

            {/* BOX 2 */}
            <div className="relative h-[160px] sm:h-[280px] rounded-2xl overflow-hidden shadow-md sm:-top-20">
              <img src={img2} alt="" className="w-full h-full object-cover" />
            </div>

            {/* BOX 3 */}
            <div className="relative h-[160px] sm:h-[280px] rounded-2xl overflow-hidden shadow-md">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>

            {/* BOX 4 */}
            <div className="relative h-[160px] sm:h-[280px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-center px-4 sm:px-6 shadow-lg sm:-top-20">
              <p className="text-white text-sm sm:text-lg font-semibold leading-snug">
                Build a portfolio <br className="hidden sm:block" />
                that studios <br className="hidden sm:block" />
                want to see.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between h-full max-w-2xl text-center lg:text-left">

          {/* TOP CONTENT */}
          <div>
            <h2 className="text-[26px] sm:text-5xl font-bold text-gray-800 leading-snug sm:leading-tight mb-6 sm:mb-10">
              WHY STUDENTS CHOOSE <br className="hidden sm:block" />
              RELIANCE ANIMATION <br className="hidden sm:block" />
              ACADEMY
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 text-left">

                  {/* ICON */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-100 shrink-0">
                    <img src={item.icon} alt="" className="w-8 sm:w-12" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-sm sm:text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
  onClick={scrollToForm}
  className="mt-8 sm:mt-10 w-fit mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-14 py-3.5 rounded-full text-sm sm:text-xl font-semibold shadow-lg hover:scale-105 transition"
>
  Start Your Animation Career
</button>
          <p className="mt-5 sm:mt-6 text-xs sm:text-2xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
            📍 Campus located in Thane, Mumbai.
          </p>
          <div className="w-full flex justify-center lg:justify-center mt-2 sm:mt-3">
            <div className="inline-block">
              <ProgressLoad />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
