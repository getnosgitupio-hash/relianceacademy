import quotes from "../assets/quotes.png";
import starsImage from "../assets/Stars-2.png";

import img1 from "../assets/sc-1.png";
import img2 from "../assets/sc-2.png";
import img3 from "../assets/sc-3.png";
import img4 from "../assets/sc-4.png";
import img5 from "../assets/sc-5.png";
import img6 from "../assets/sc-6.png";
import img7 from "../assets/sc-7.png";
import img8 from "../assets/sc-8.png";

import ProgressDots from "../Components/ProgressLoad";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Student 1", image: img1 },
  { name: "Student 2", image: img2 },
  { name: "Student 3", image: img3 },
  { name: "Student 4", image: img4 },
  { name: "Student 5", image: img5 },
  { name: "Student 6", image: img6 },
  { name: "Student 7", image: img7 },
  { name: "Student 8", image: img8 },
];

export default function Testmonial({ scrollToForm }) {
  return (
    <section className="bg-white px-6 py-10 md:px-10 lg:px-14 mb-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Top Line */}
        <div className="mx-auto h-px w-full max-w-6xl " />

        {/* Heading */}
        <div className="mx-auto mt-14 max-w-5xl text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-[-0.03em] text-black md:text-4xl lg:text-[40px]">
            WHAT STUDENTS SAY{" "}
            <span className="text-[#4D4D4D]">ABOUT THE ACADEMY</span>
          </h2>
        </div>

        {/* Slider */}
       <div className="relative mt-16 overflow-hidden">
  <motion.div
    className="flex pointer-events-auto"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 25,
      ease: "linear",
    }}
  >
    {[...testimonials, ...testimonials].map((item, index) => (
      <article
        key={index}
        className="w-1/1  md:w-1/2 lg:w-1/1 px-3 flex-shrink-0"
      >
        <div className="relative rounded-[18px] border border-[#DCDCDC] bg-white p-4 shadow-[0_8px_30px_rgba(17,17,17,0.03)] hover:shadow-lg transition">

          {/* Quote icon */}
          <div className="absolute right-3 top-3">
            <img src={quotes} alt="quote" className="h-8 w-8" />
          </div>

          {/* Image */}
          <div className="w-full h-[100px] lg:h-[250px] rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-full object-contain hover:scale-105 transition duration-300"
            />
          </div>

        </div>
      </article>
    ))}
  </motion.div>
</div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center">
          <button
            onClick={scrollToForm}
            className="min-w-[280px] rounded-full bg-[#5338FF] px-10 py-3 text-white font-semibold shadow-lg hover:scale-105 transition text-2xl"
          >
            Join Our Next Batch
          </button>

          <p className="mt-5 text-sm sm:text-lg text-red-600 text-center">
            📍 Campus located in Thane, Mumbai.
          </p>

          <div className="mt-2">
            <ProgressDots />
          </div>
        </div>

      </div>
    </section>
  );
}