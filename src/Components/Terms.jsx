import { useEffect, useState } from "react";

const CONTACT_EMAIL = "admissions@relianceacademythane.in";
const CONTACT_PHONE = "9136067060";

const PRIVACY_SECTIONS = [
  {
    heading: "1. Data Collection & Use",
    bullets: [
      "Name",
      "Phone number",
      "Email address",
      "City and course preferences",
      "Any additional information shared via messages",
    ],
    paragraphs: [
      "This data is collected to provide career consultation and course information, respond to your inquiries, share updates about programs, admissions, and services, and improve our services and user experience.",
    ],
  },
  {
    heading: "2. Data Sharing with Third Parties",
    bullets: [
      "CRM platforms",
      "Analytics tools",
      "Communication platforms (including WhatsApp API providers)",
    ],
    paragraphs: [
      "We may share your data with trusted third-party service providers solely to improve communication, service delivery, and user experience. We do not sell your personal data.",
    ],
  },
  {
    heading: "3. User Consent",
    bullets: ["Phone calls", "SMS", "Email", "WhatsApp messages"],
    paragraphs: [
      "By submitting your details on our website, you consent to being contacted by Reliance Animation Academy. This includes both transactional and promotional communication.",
    ],
  },
  {
    heading: "4. Opt-Out / Unsubscribe",
    bullets: ['Replying "STOP" on WhatsApp or SMS', "Contacting our support team"],
    paragraphs: [
      "Once opted out, you will no longer receive promotional messages.",
    ],
  },
  {
    heading: "5. Data Retention & Security",
    paragraphs: [
      "We retain your personal data only as long as necessary for business and legal purposes.",
      "We implement appropriate security measures to protect your data from unauthorized access, misuse, or disclosure.",
    ],
  },
  {
    heading: "6. Compliance with Legal Obligations",
    paragraphs: [
      "We comply with applicable data protection laws and Meta's policies regarding data handling and communication via WhatsApp.",
    ],
  },
  {
    heading: "7. Contact Us",
    paragraphs: [
      "If you have any questions regarding this policy, you may contact us at:",
    ],
  },
];

const TERMS_SECTIONS = [
  {
    heading: "1. Communication Consent",
    bullets: ["Transactional messages", "Promotional messages"],
    paragraphs: [
      "By providing your contact details, you agree to receive messages via WhatsApp, phone calls, SMS, and email from Reliance Animation Academy.",
    ],
  },
  {
    heading: "2. User Responsibilities",
    bullets: [
      "Provide accurate and complete information",
      "Use the website and communication channels responsibly",
      "Not misuse or engage in unlawful activity through our platforms",
    ],
  },
  {
    heading: "3. Opt-Out & Grievance Redressal",
    bullets: ['Replying "STOP" to messages', "Contacting our support team"],
    paragraphs: ["For complaints or concerns, you may reach out to our support contact details provided in this page."],
  },
  {
    heading: "4. Limitation of Liability",
    bullets: [
      "Delays or failures caused by third-party platforms (including WhatsApp or telecom providers)",
      "Unauthorized access due to user negligence",
      "External technical issues beyond our control",
    ],
    paragraphs: [
      "Reliance Animation Academy is not responsible for the items listed above.",
    ],
  },
  {
    heading: "5. Updates to Terms",
    paragraphs: [
      "We may update these Terms & Conditions from time to time. Any changes will be posted on this page, and continued use of our services implies acceptance of the updated terms.",
    ],
  },
  {
    heading: "6. Governing Law",
    paragraphs: ["These terms are governed by applicable laws in India."],
  },
];

export default function Terms({ open, initialTab = "privacy", onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (open) setActiveTab(initialTab);
  }, [open, initialTab]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isPrivacy = activeTab === "privacy";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Privacy policy and terms"
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f10] text-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[240px_1fr]">
          <aside className="border-b border-white/10 p-4 md:border-b-0 md:border-r">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Policies
            </p>

            <div className="mt-3 flex gap-2 md:flex-col">
              <button
                type="button"
                onClick={() => setActiveTab("privacy")}
                className={[
                  "rounded-xl px-3 py-2 text-left text-sm transition",
                  isPrivacy
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-white/70 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                Privacy Policy
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("terms")}
                className={[
                  "rounded-xl px-3 py-2 text-left text-sm transition",
                  !isPrivacy
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-white/70 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                Terms &amp; Conditions
              </button>
            </div>
          </aside>

          <main className="max-h-[72vh] overflow-auto p-5 md:p-6">
            <h3 className="text-xl font-semibold">
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
            </h3>

            {isPrivacy ? (
              <>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  <span className="font-medium text-white">
                    Privacy Policy – Reliance Animation Academy
                  </span>
                  <span className="text-white/70">
                    {" "}
                    Reliance Animation Academy ("we", "our", "us") is committed
                    to protecting your privacy and ensuring that your personal
                    information is handled in a safe and responsible manner.
                  </span>
                </p>

                <div className="mt-5 space-y-6 text-sm leading-relaxed text-white/80">
                  {PRIVACY_SECTIONS.map((section) => (
                    <section key={section.heading}>
                      <h4 className="text-sm font-semibold text-white">
                        {section.heading}
                      </h4>

                      {section.paragraphs?.length ? (
                        <div className="mt-2 space-y-2 text-white/80">
                          {section.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      ) : null}

                      {section.bullets?.length ? (
                        <ul className="mt-3 space-y-2">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.heading === "7. Contact Us" ? (
                        <div className="mt-3 space-y-1 text-white/80">
                          <p>
                            Mail ID:{" "}
                            <a
                              className="underline underline-offset-4 hover:text-white"
                              href={`mailto:${CONTACT_EMAIL}`}
                            >
                              {CONTACT_EMAIL}
                            </a>
                          </p>
                          <p>
                            Phone Number:{" "}
                            <a
                              className="underline underline-offset-4 hover:text-white"
                              href={`tel:${CONTACT_PHONE}`}
                            >
                              {CONTACT_PHONE}
                            </a>
                          </p>
                        </div>
                      ) : null}
                    </section>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  <span className="font-medium text-white">
                    Terms &amp; Conditions – Reliance Animation Academy
                  </span>
                  <span className="text-white/70">
                    {" "}
                    By using our website and submitting your information, you
                    agree to the following terms.
                  </span>
                </p>

                <div className="mt-5 space-y-6 text-sm leading-relaxed text-white/80">
                  {TERMS_SECTIONS.map((section) => (
                    <section key={section.heading}>
                      <h4 className="text-sm font-semibold text-white">
                        {section.heading}
                      </h4>

                      {section.paragraphs?.length ? (
                        <div className="mt-2 space-y-2 text-white/80">
                          {section.paragraphs.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>
                      ) : null}

                      {section.bullets?.length ? (
                        <ul className="mt-3 space-y-2">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.heading === "3. Opt-Out & Grievance Redressal" ? (
                        <div className="mt-3 space-y-1 text-white/80">
                          <p>
                            Support email:{" "}
                            <a
                              className="underline underline-offset-4 hover:text-white"
                              href={`mailto:${CONTACT_EMAIL}`}
                            >
                              {CONTACT_EMAIL}
                            </a>
                          </p>
                          <p>
                            Support phone:{" "}
                            <a
                              className="underline underline-offset-4 hover:text-white"
                              href={`tel:${CONTACT_PHONE}`}
                            >
                              {CONTACT_PHONE}
                            </a>
                          </p>
                        </div>
                      ) : null}
                    </section>
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
