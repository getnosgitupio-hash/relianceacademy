import React, { useState } from "react";
import leftBg from "../assets/bg-image.png";
import checkCircle from "../assets/check-circle.svg";

const discoveryPoints = [
    "Which animation career path suits you",
    "How the industry actually works",
    "The skills studios look for",
    "The right course for your goals",
];

const initialFormData = {
    fullName: "",
    email: "",
    phone: "",
    city: "",
    thanePreference: "",
    courseInterested: "",
};

const Formpage = ({ formRef, onOpenTerms }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [hasConsented, setHasConsented] = useState(false);
    const thankYouPageUrl =
        "https://relianceacademythane.in/animation-career/thank-you.html";

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitMessage("");
        setSubmitError("");

        if (!hasConsented) {
            setSubmitError(
                "Please accept the Privacy Policy and Terms & Conditions to continue."
            );
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://getnos.io/skyskill/main.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(result?.message || "Unable to submit the form right now.");
            }

            // 🔥 DIRECT REDIRECT
            window.location.href = "https://relianceacademythane.in/thank-you.html";

        } catch (error) {
            setSubmitError(
                error.message || "Something went wrong while sending your request."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={formRef}
            id="career-orientation-form"
            className="relative overflow-hidden bg-[#171717] px-6 py-20 lg:py-12 text-white sm:py-24 lg:min-h-[730px] lg:px-10"
        >
            <div className="absolute inset-0">
                <img
                    src={leftBg}
                    alt=""
                    className="h-full w-full object-cover object-left-top opacity-100"
                />
                <div className="absolute inset-0" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[470px_536px] lg:justify-center items-center lg:items-start lg:gap-10 lg:pt-[72px]">
                <div className="mx-auto max-w-[470px] text-center lg:mx-0 lg:pt-[10rem]">
                    <h2 className="text-[24px] font-extrabold uppercase leading-[1.06] sm:text-[34px] lg:text-[34px] lg:leading-snug">
                        Your Journey Into The
                        <span className="block bg-gradient-to-r from-[#f2f2f2] via-[#a8a8a8] to-[#595959] bg-clip-text text-transparent">
                            Animation Industry
                        </span>
                        Starts Here
                    </h2>

                    <div className="relative mt-6 max-w-[492px] text-center overflow-hidden rounded-[1.9rem] bg-black/10 px-3 lg:px-0 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-[2px]">
                        {/* Main border */}
                        <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] border border-white/10" />

                        {/* Bottom glow line */}
                        <div className="pointer-events-none absolute bottom-0 left-[26px] right-[26px] h-px bg-gradient-to-r from-white/10 via-white/24 to-white/10" />

                        {/* Left accent line */}
                        <div className="pointer-events-none absolute bottom-8 left-0 top-8 w-[2px] bg-gradient-to-b from-white/6 via-white/14 to-white/28" />

                        <p className="text-[20px] font-semibold leading-relaxed text-white lg:px-0 text-align: justify;">
                            In your orientation session you will discover:
                        </p>

                        <ul className="mt-8 space-y-3 text-[0.98rem] text-zinc-200 mx-auto max-w-[420px]">
                            {discoveryPoints.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start justify-start gap-3 font-AlbertSans-Light"
                                >
                                    <img
                                        src={checkCircle}
                                        alt=""
                                        className="mt-0.5 h-[18px] w-[18px] shrink-0"
                                    />
                                    <span className="flex-1 text-[16px] text-left">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="text-[1.05rem] font-semibold text-white text-center ">
                                No pressure. Just clarity.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-[606px] rounded-[1.7rem] border border-white/50 bg-black px-7 py-10 shadow-[0_30px_110px_rgba(0,0,0,0.62)] sm:px-11 lg:mt-[2px]">
                    <p className="text-[1.5rem] font-semibold leading-tight text-white ">
                        Book Your Free Career Orientation
                    </p>

                    <p className="mt-2 text-[1.02rem] text-zinc-400">
                        Seats are limited for the upcoming intake.
                    </p>

                    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>

                        <label className="block text-sm text-white px-2">Full Name *</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition focus:border-indigo-500"
                        />

                        <label className="block text-sm text-white px-2">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition focus:border-indigo-500"
                        />

                        <label className="block text-sm text-white px-2">Phone Number *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition focus:border-indigo-500"
                        />

                        <label className="block text-sm text-white px-2">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition focus:border-indigo-500"
                        />

                        <label className="block text-sm text-white px-2">
                            This program is conducted at our Thane (Mumbai) campus. Are you comfortable with this location?
                        </label>

                        <div className="relative">
                            <select
                                name="thanePreference"
                                value={formData.thanePreference}
                                onChange={handleChange}
                                required
                                className="h-[52px] w-full appearance-none rounded-full border border-white/20 bg-transparent px-9 pr-12 text-base text-zinc-500 outline-none transition focus:border-indigo-500"
                            >
                                <option value="travel">Yes, I can travel to Thane</option>
                                <option value="relocate">Yes, I am open to relocating to Thane</option>
                                <option value="not_sure">Not sure, need guidance</option>
                                <option value="no">No</option>
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <svg
                                    className="h-4 w-4 text-white/70"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        <label className="block text-sm text-white px-2">Course Interested In *</label>
                        <input
                            type="text"
                            name="courseInterested"
                            value={formData.courseInterested}
                            onChange={handleChange}
                            required
                            className="h-[52px] w-full rounded-full border border-white/20 bg-transparent px-9 text-base text-white outline-none transition focus:border-indigo-500"
                        />

                        {submitMessage ? (
                            <p className="px-4 text-sm text-green-400">{submitMessage}</p>
                        ) : null}

                        {submitError ? (
                            <p className="px-4 text-sm text-red-400">{submitError}</p>
                        ) : null}

                        <div className="mt-4 flex items-start gap-3 px-4">
                            <input
                                id="consent"
                                name="consent"
                                type="checkbox"
                                checked={hasConsented}
                                onChange={(e) => setHasConsented(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-white/30 bg-transparent text-indigo-500 focus:ring-indigo-500"
                                required
                            />

                            <label
                                htmlFor="consent"
                                className="text-xs leading-relaxed text-white/70"
                            >
                                By submitting this form, you agree to our{" "}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onOpenTerms?.("privacy");
                                    }}
                                    className="underline underline-offset-4 hover:text-white"
                                >
                                    Privacy Policy
                                </button>{" "}
                                and{" "}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onOpenTerms?.("terms");
                                    }}
                                    className="underline underline-offset-4 hover:text-white"
                                >
                                    Terms &amp; Conditions
                                </button>
                                .
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-7 h-[56px] w-full rounded-full bg-[#5338FF] px-6 text-base lg:text-lg font-semibold text-white shadow-[0_0_30px_rgba(83,56,255,0.5)] transition hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(83,56,255,0.65)]"
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Schedule My Orientation Session"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Formpage;
