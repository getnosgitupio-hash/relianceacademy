import logoStrip from "../assets/logo.png";

export default function Demo() {
  return (
    <section className="bg-white px-6 py-4 lg:py-20 text-[#111111] md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center lg:mx-0 lg:text-left mt-10">
          <h2 className="text-2xl lg:text-4xl font-extrabold uppercase lg:leading-[40px] tracking-[-0.03em] md:text-[50px] lg:text-[50px] ">
            <span className="block">
              TRUSTED BY STUDENTS <span className="text-[#4B4B4B]">WHO ARE NOW</span>
            </span>
            <span className="block">WORKING IN THE INDUSTRY</span>
          </h2>

          <p className="mt-6 text-lg text-[#575757] md:text-[22px]">
            Graduates have worked with studios like:
          </p>
        </div>

        {/* 🔥 Marquee with fade edges */}
        <div className="mt-16 flex justify-center">
          <img
            src={logoStrip}
            alt="Studio logos"
            className="h-auto w-full max-w-[1120px] object-contain"
          />
        </div>

        {/* Bottom Text */}
        <p className="mx-auto mt-16 max-w-6xl text-center text-lg leading-8 text-[#4D4D4D] md:text-[22px]">
          These studios hire artists who understand production pipelines,
          software tools, and creative storytelling.
        </p>

      </div>
    </section>
  );
}
