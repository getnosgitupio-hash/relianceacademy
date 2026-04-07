import logoStrip from "../assets/logo-1.png";
import { motion } from "framer-motion";
import ProgressLoad from "./ProgressLoad";

export default function Demo({ scrollToForm }) {
  return (
    <section className="bg-white px-6 py-4 lg:py-20 text-[#111111] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center lg:mx-0 lg:text-left mt-10">
          <h2 className="text-2xl lg:text-4xl font-extrabold uppercase lg:leading-[60px] tracking-[-0.03em] md:text-[50px]">
            <span className="block">
              TRUSTED BY STUDENTS <span className="text-[#4B4B4B]">WHO ARE NOW</span>
            </span>
            <span className="block">WORKING IN THE INDUSTRY</span>
          </h2>

          <p className="mt-6 text-lg text-[#575757] md:text-[22px]">
            Graduates have worked with studios like:
          </p>
        </div>

        {/* 🔥 Moving logo strip */}
        <div className="mt-16 overflow-hidden">
  <motion.div
    className="flex gap-8"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
  >
    <img
      src={logoStrip}
      alt="Studio logos"
      className="w-full max-w-[1120px] object-contain"
    />
    <img
      src={logoStrip}
      alt="Studio logos duplicate"
      className="w-full max-w-[1120px] object-contain"
    />
  </motion.div>
</div>

        {/* Bottom Text */}
       <div className="mt-16 flex flex-col items-center text-center">
  <p className="max-w-3xl text-lg leading-8 text-[#4D4D4D] md:text-[22px]">
    These studios hire artists who understand:
  </p>

  <div className="mt-4 border border-gray-300 rounded-xl px-6 py-3 flex flex-wrap justify-center gap-6 text-[#4D4D4D] text-lg md:text-[18px] font-bold">
  <span>• Production pipelines</span>
  <span>• Industry tools</span>
  <span>• Creative storytelling</span>
</div>

  <div className="mt-10">
    <button
      onClick={scrollToForm}
      className="px-6 sm:px-14 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base sm:text-2xl font-medium shadow-lg hover:opacity-90 transition"
    >
      Begin Your Journey
    </button>
  </div>
  <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
          📍 Campus located in Thane, Mumbai.
        </p>
        <div className="w-full flex justify-center lg:justify-center mt-2 sm:mt-2">
          <div className="inline-block">
            <ProgressLoad />
          </div>
        </div>
</div>

      </div>
    </section>
  );
}