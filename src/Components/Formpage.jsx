import React from "react";
import leftBg from "../assets/bg-image.png";
import checkCircle from "../assets/check-circle.svg";

const discoveryPoints = [
    "Which animation career path suits you",
    "How the industry actually works",
    "The skills studios look for",
    "The right course for your goals",
];

const Formpage = () => {
    return (
        <section className="relative overflow-hidden bg-[#171717] px-6 py-20 lg:py-12 text-white sm:py-24 lg:min-h-[730px] lg:px-10">
            <div className="absolute inset-0">
                <img
                    src={leftBg}
                    alt=""
                    className="h-full w-full object-cover object-left-top opacity-100"
                />
                <div className="absolute inset-0" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[470px_536px] lg:justify-between lg:items-start lg:gap-10 lg:pt-[72px]">
                <div className="mx-auto max-w-[470px] text-center lg:mx-0 lg:pt-[60px] lg:text-left">
                    <h2 className="text-[28px] font-extrabold uppercase leading-[1.06] sm:text-[34px] lg:text-[34px] lg:leading-snug">
                        Your Journey Into The
                        <span className="block bg-gradient-to-r from-[#f2f2f2] via-[#a8a8a8] to-[#595959] bg-clip-text text-transparent">
                            Animation Industry
                        </span>
                        Starts Here
                    </h2>

                    <div className="relative mt-16 max-w-[492px] text-left overflow-hidden rounded-[1.9rem] bg-black/10 px-8 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-[2px]">
  {/* Main border */}
  <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] border border-white/10" />
  
  {/* Bottom glow line */}
  <div className="pointer-events-none absolute bottom-0 left-[26px] right-[26px] h-px bg-gradient-to-r from-white/10 via-white/24 to-white/10" />
  
  {/* Left accent line */}
  <div className="pointer-events-none absolute bottom-8 left-0 top-8 w-[2px] bg-gradient-to-b from-white/6 via-white/14 to-white/28" />
  
  <p className="text-[20px] font-semibold leading-relaxed text-white">
    In your orientation session you will discover:
  </p>

  <ul className="mt-8 space-y-3 text-[0.98rem] text-zinc-200">
    {discoveryPoints.map((item) => (
      <li key={item} className="flex items-start gap-3 font-AlbertSans-Light">
        <img
          src={checkCircle}
          alt=""
          className="mt-0.5 h-[18px] w-[18px] shrink-0"
        />
        <span className="min text-[16px]">{item}</span>
      </li>
    ))}
  </ul>

  <div className="mt-8 border-t border-white/10 pt-6">
    <p className="text-[1.05rem] font-semibold text-white lg:text-left text-center">
      No pressure. Just clarity.
    </p>
  </div>
</div>
                </div>

                <div className="mx-auto w-full max-w-[606px] rounded-[1.7rem] border border-white/50 bg-black px-7 py-10 shadow-[0_30px_110px_rgba(0,0,0,0.62)] sm:px-11 lg:ml-auto lg:mt-[2px]">
                    <p className="text-[1.5rem] font-semibold leading-tight text-white ">
                        Book Your Free Career Orientation
                    </p>

                    <p className="mt-2 text-[1.02rem] text-zinc-400">
                        Seats are limited for the upcoming intake.
                    </p>

                    <form className="mt-8 space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name *"
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            className="h-[52px] w-full rounded-full border  border-white/20 bg-transparent px-9 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-500"
                        />
                        <select className="h-[52px] w-full appearance-none rounded-full border  border-white/20 bg-transparent px-9 text-base text-zinc-500 outline-none transition focus:border-indigo-500">
                            <option value="">Select programme</option>
                            <option value="animation">Animation</option>
                            <option value="vfx">VFX</option>
                            <option value="game-design">Game Design</option>
                            <option value="filmmaking">Film Making</option>
                        </select>

                        <button
                            type="submit"
                            className="mt-7 h-[56px] w-full rounded-full bg-[#5338FF] px-6 text-base lg:text-lg font-semibold text-white shadow-[0_0_30px_rgba(83,56,255,0.5)] transition hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(83,56,255,0.65)]"
                        >
                            Schedule My Orientation Session
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Formpage;
