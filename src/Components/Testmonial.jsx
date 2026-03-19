import quotes from "../assets/Group.png";
import starsImage from "../assets/Stars-2.png";
import arjunImage from "../assets/Arjun.png";
import priyaImage from "../assets/priya.png";
import rahulImage from "../assets/Rahul.png";
import ProgressDots from "../Components/ProgressLoad";

const testimonials = [
  {
    quote:
      "The faculty here really understand the animation industry. The projects helped me build a strong portfolio.",
    name: "Arjun Verma",
    image: arjunImage,
  },
  {
    quote:
      "Great place to learn VFX and animation with practical exposure.",
    name: "Priya Sharma",
    image: priyaImage,
  },
  {
    quote:
      "If you want to build a career in animation or VFX, this is a great place to start.",
    name: "Rahul Mehta",
    image: rahulImage,
  },
];



export default function Testmonial() {
  return (
    <section className="bg-white px-6 py-10 lg:py-0 text-[#111111] md:px-10 lg:px-14 lg:py-2 mb-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-px w-full max-w-6xl bg-[#D8D8D8]" />

        <div className="mx-auto mt-14 max-w-5xl text-center">
          <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-[-0.03em] text-black md:text-4xl lg:text-[40px]">
            WHAT STUDENTS SAY <span className="text-[#4D4D4D]">ABOUT THE ACADEMY</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="relative rounded-[18px] border border-[#DCDCDC] bg-white px-6 pb-5 pt-14 shadow-[0_8px_30px_rgba(17,17,17,0.03)]"
            >
              <div className="absolute right-8 top-0 -translate-y-1/2">
                <img src={quotes} alt="Quote icon" className="h-16 w-16 object-contain" />
              </div>

              <p className="min-h-[102px] text-base leading-9 text-[#8A8A8A] md:text-[18px]">
                “{item.quote}”
              </p>

              <div className="mt-2">
                <img
                  src={starsImage}
                  alt="5 star rating"
                  className="h-5 w-[120px] object-contain"
                />
              </div>

              <div className="mt-5 h-px w-full bg-[#E4E4E4]" />

              <div className="mt-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-lg font-semibold text-[#7A7A7A] md:text-[22px]">
                  {item.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center">
          <button className="min-w-[300px] rounded-full bg-[#5338FF] px-12 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(83,56,255,0.35)] transition hover:scale-[1.02] md:min-w-[340px] md:text-[18px]">
            Join Our Next Batch
          </button>
          <div className="mt-6">
            <ProgressDots />
          </div>
        </div>
      </div>
    </section>
  );
}
