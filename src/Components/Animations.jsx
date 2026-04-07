import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../assets/games-1.png";
import img2 from "../assets/games-2.png";
import img3 from "../assets/games-3.png";
import img4 from "../assets/games-4.png";
import ProgressLoad from "./ProgressLoad";

export default function AnimatedHeroSection({ scrollToForm }) {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[#020617] text-white overflow-hidden">
      
      {/* 🔥 Dynamic Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />

      {/* Overlay glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl font-bold leading-tight"
          >
            FROM IDEAS TO LIVE PRODUCTS
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-blue-400 text-2xl sm:text-3xl font-semibold"
          >
            Games played by millions globally.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl"
          >
            Learn how they’re built. 
          </motion.p>
<motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl"
          >
           Create at that level.
          </motion.p>
          <motion.button
            onClick={scrollToForm}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gradient-to-r from-indigo-500 px-5 sm:px-14 py-3 to-purple-600 hover:bg-blue-400 px-8 py-4 rounded-3xl text-lg font-semibold shadow-xl"
          >
            ▶ Start Your Animation Career
          </motion.button>
          <p className="mt-5 sm:mt-6 text-xs sm:text-2xl text-red-600 text-center lg:text-left sm:max-w-xl">
                   📍 Campus located in Thane, Mumbai.
                  </p>
          
                      {/* Progress */}
                      <div className="w-full flex justify-center lg:justify-start mt-2 sm:mt-6">
                        <div className="inline-block">
                          <ProgressLoad />
                        </div>
                      </div>
        </div>

        {/* RIGHT */}

        {/* 💻 Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl border border-blue-500/20 shadow-xl"
            >
              <img
                src={img}
                alt="game"
                className="w-full h-full object-contain bg-[#020617]"
              />
            </motion.div>
          ))}
        </div>

        {/* 📱 Mobile Slider (One by one) */}
        <div className="sm:hidden flex justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-64 h-64 overflow-hidden rounded-2xl border border-blue-500/20 shadow-xl"
          >
            <img
              src={images[currentIndex]}
              alt="game"
              className="w-full h-full object-contain bg-[#020617]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}