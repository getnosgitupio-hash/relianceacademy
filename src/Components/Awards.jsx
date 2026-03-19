import Logo from "../assets/Awards.png"

function Laurel({ side }) {
  const isLeft = side === "left";

  return (
    <svg
      viewBox="0 0 120 190"
      className={`h-[150px] w-[90px] md:h-[190px] md:w-[120px] ${
        isLeft ? "" : "scale-x-[-1]"
      }`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`laurel-${side}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1f1f1b" />
          <stop offset="55%" stopColor="#E4BE58" />
          <stop offset="100%" stopColor="#9D6B13" />
        </linearGradient>
      </defs>
      <g fill={`url(#laurel-${side})`}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ellipse
            key={index}
            cx={28 + index * 4}
            cy={160 - index * 13}
            rx="9"
            ry="18"
            transform={`rotate(${-45 + index * 3} ${28 + index * 4} ${160 - index * 13})`}
          />
        ))}
        <path
          d="M18 174C30 132 52 88 88 40"
          fill="none"
          stroke={`url(#laurel-${side})`}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

const awards = [
  {
    id: "diff",
    mark: (
      <div className="text-[54px] font-black uppercase tracking-[-0.05em] text-[#F0B42A] md:text-[66px]">
        DIFF
      </div>
    ),
  },
  {
    id: "ficci",
    mark: (
      <div className="text-[36px] font-black uppercase italic tracking-[-0.03em] text-white md:text-[44px]">
        FICCI
      </div>
    ),
  },
  {
    id: "asian-academy",
    mark: (
      <div className="text-center text-[#D0BC8B]">
        <div className="text-[15px] font-medium uppercase leading-tight md:text-[17px]">
          Asian
          <br />
          Academy
          <br />
          Creative
          <br />
          Awards
        </div>
      </div>
    ),
  },
  {
    id: "television-awards",
    mark: (
      <div className="text-center text-[#D48B93]">
        <div className="text-[18px] font-black uppercase italic leading-none md:text-[20px]">
          asian
        </div>
        <div className="text-[26px] font-black uppercase italic leading-none md:text-[34px]">
          television
        </div>
        <div className="text-[24px] font-black uppercase italic leading-none md:text-[32px]">
          awards
        </div>
      </div>
    ),
  },
  {
    id: "telly",
    mark: (
      <div className="text-center text-[#D6A63C]">
        <div className="text-[16px] font-medium italic md:text-[18px]">
          The Indian
        </div>
        <div className="text-[22px] font-black italic md:text-[30px]">
          Telly
        </div>
        <div className="text-[20px] font-black italic md:text-[28px]">
          Awards
        </div>
      </div>
    ),
  },
];

export default function Awards() {
  return (
    <section className="bg-black px-6 pt-6 pb-12 text-white md:px-10 lg:px-16 lg:pt-6 lg:pb-18">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 text-center lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:text-left">
          <div className="flex justify-center lg:block">
           <h2 className="text-[28px] font-extrabold uppercase lg:leading-[0.98] tracking-[-0.05em] md:text-[72px] lg:text-[82px]">
  Industry
  <br className="hidden md:block" />
  Recognition
  <br className="hidden md:block" />
  &amp; Awards
</h2>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <p className="max-w-[640px] text-lg leading-relaxed text-[#D8D8D8] md:text-[22px]">
              The Reliance animation ecosystem has been recognized at major industry events including:
            </p>

            <div className="mt-10 w-full rounded-[32px] border border-white/14 bg-[#050505] px-8 py-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.38)] md:px-10 md:py-10 lg:text-left">
              <p className="max-w-[640px] text-xl leading-relaxed text-[#E5E5E5] md:text-[22px]">
                Projects like{" "}
                <span className="bg-gradient-to-r from-[#5338FF] to-[#CD77FF] bg-clip-text font-semibold text-transparent">
                  Little Singham, Smashing Simmba and Little Krishna
                </span>{" "}
                have won multiple industry accolades.
              </p>

            
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <img
            src={Logo}
            alt="Awards logos"
            className="h-auto w-full max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
