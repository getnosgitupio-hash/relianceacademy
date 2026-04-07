export default function Footer({ onOpenTerms }) {
  return (
    <footer className=" bg-black px-6 py-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-[#6E6E6E] md:text-base">
          @Copyright Sansach Technologies. All rights reserved.
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <button
            type="button"
            onClick={() => onOpenTerms?.("privacy")}
            className="text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onOpenTerms?.("terms")}
            className="text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}
