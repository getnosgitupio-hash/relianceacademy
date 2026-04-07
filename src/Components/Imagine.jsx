import bgImage from "../assets/bg-g.png";
import ProgressLoad from "../Components/ProgressLoad";

export default function HeroSection({ scrollToForm }) {
  return (
    <section className="relative flex sm:min-h-screen items-center justify-center overflow-hidden bg-black text-white py-10 lg:py-12">
      
      {/* 🔵 Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-80"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/0 mt-6" />

      {/* ✨ Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-[22px] sm:text-[28px] lg:text-[56px] font-extrabold leading-[1.3] lg:leading-[1.2] font-make">
          IMAGINE YOUR WORK
          <br className="hidden sm:block" />
          ON SCREEN
        </h1>

        {/* Paragraph */}
        <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-3xl leading-relaxed text-white font-semibold">
          Think about this for a second. <br className="hidden sm:block" />
          The animated characters you watch. <br className="hidden sm:block" />
          The visual effects in blockbuster movies. <br className="hidden sm:block" />
          The worlds inside video games.
        </p>

        {/* Middle Text */}
        <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-3xl leading-relaxed text-white font-semibold">
          Someone designed them. <br className="hidden sm:block" />
          Someone animated them. <br className="hidden sm:block" />
          Someone built those worlds.
        </p>

        {/* Highlight */}
        <p className="mt-6 sm:mt-8 lg:mt-10 text-lg sm:text-xl lg:text-4xl font-semibold">
          That someone could be you.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={scrollToForm}
          className="mt-6 sm:mt-8 lg:mt-10 h-[48px] sm:h-[52px] lg:h-[66px] rounded-full bg-[#5338FF] px-10 sm:px-16 text-sm sm:text-2xl lg:text-2xl font-semibold text-white shadow-[0_0_30px_rgba(83,56,255,0.5)] transition hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(83,56,255,0.65)]"
        >
          Take The First Step
        </button>
<p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl">
         📍 Campus located in Thane, Mumbai.
        </p>
        {/* Loader */}
        <div className="mt-4 sm:mt-6">
          <ProgressLoad />
        </div>

      </div>
    </section>
  );
}
