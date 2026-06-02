'use client'
import { useState } from "react";

const sections = [
  {
    id: "booking-fee",
    title: "Booking Fee & Confirmation",
    icon: "✦",
    content: [
      "A non-refundable booking fee is required to secure the appointment date.",
      "No booking is confirmed until the booking fee has been received.",
      "The booking fee is deducted from the final balance.",
      "By paying the booking fee, the client confirms acceptance of these Terms & Conditions.",
    ],
  },
  {
    id: "payment",
    title: "Payment of Balance",
    icon: "✦",
    content: [
      "The remaining balance is payable by the date specified on the invoice.",
      "Failure to pay the balance by the due date may result in cancellation of the booking.",
      "All prices are agreed at the time of booking and are subject to any additional services requested.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation & Rescheduling",
    icon: "✦",
    content: [
      "In the event of cancellation by the client for any reason, the booking fee is non-refundable.",
      "If the booking date is rescheduled, Myxprecioussmua will endeavor to accommodate the new date, subject to availability. If the new date is unavailable, the booking will be treated as a cancellation and the booking fee will be retained.",
      "Any payments made beyond the booking fee are non-refundable within the final balance period.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Booking",
    icon: "✦",
    content: [
      "Should the number of make-up increase after the original booking, the client is responsible for advising Myxprecioussmua as soon as possible.",
      "Once the booking is confirmed, numbers cannot be reduced.",
    ],
  },
  {
    id: "preview",
    title: "Make-up Preview (Trial)",
    icon: "✦",
    content: [
      "Any changes requested following the preview must be communicated clearly prior to the wedding date.",
    ],
  },
  {
    id: "location",
    title: "Wedding Morning & Location Details",
    icon: "✦",
    content: [
      "Prices assume that wedding day make-up will be applied in one location (one set up).",
      "Some venues require the bridal party to move to another room, or some brides may choose to start getting ready at another location and then move to the venue for prep. If this is the case, please advise in advance so that additional time to pack away, re-set, and potentially travel can be included within timings.",
      "There will be an additional charge for multiple locations.",
    ],
  },
  {
    id: "travel",
    title: "Travel",
    icon: "✦",
    content: [
      "Additional mileage is chargeable along with parking costs and toll charges.",
    ],
  },
  {
    id: "allergies",
    title: "Allergies, Skin Conditions & Liability",
    icon: "✦",
    content: [
      "The client must inform Myxprecioussmua of any allergies, sensitivities, skin conditions, or medical concerns (for anyone in the bridal party who is having make-up applied) prior to the make-up preview and wedding day.",
      "All products are applied at the client's own risk.",
      "Myxprecioussmua cannot be held liable for any allergic reactions or adverse skin responses that may occur during or after application.",
    ],
  },
  {
    id: "lashes",
    title: "Lashes",
    icon: "✦",
    content: [
      "Good quality strip or individual lashes and glue are provided, suitable for the occasion.",
      "Client's own lashes cannot be applied unless agreed upon in advance.",
      "If you are planning to have a Lash Lift (LVL) prior to the event, it will not be possible to apply strip or individual lashes.",
    ],
  },
  {
    id: "tattoo",
    title: "Tattoo Cover",
    icon: "✦",
    content: ["Tattoo cover is not a service offered by Myxprecioussmua."],
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    icon: "✦",
    content: [
      "Myxprecioussmua shall not be liable for failure or delay in performance due to circumstances beyond reasonable control.",
      "In such cases, liability is limited to the return of money paid, excluding the booking fee.",
    ],
  },
  {
    id: "gdpr",
    title: "GDPR & Privacy",
    icon: "✦",
    content: [
      "Myxprecioussmua takes your privacy seriously. Personal information provided will only be used to administer your booking and deliver the services requested.",
      "From time to time, you may receive information regarding special offers or events; you may opt out of this at any time.",
      "Your details will never be shared or sold to third parties.",
    ],
    link: { label: "View the Privacy Policy", href: "/Privacy-policy" },
  },
];

function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: (typeof sections)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b transition-colors duration-300 ${
        isOpen ? "border-[#c9a96e]" : "border-[#e8ddd4]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-3">
          <span
            className={`text-xs transition-colors duration-300 ${
              isOpen ? "text-[#c9a96e]" : "text-[#c9a96e]/40"
            }`}
          >
            {section.icon}
          </span>
          <span
            className={`font-semibold tracking-wide text-sm uppercase transition-colors duration-300 ${
              isOpen ? "text-[#2c1f14]" : "text-[#6b5744] group-hover:text-[#2c1f14]"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "0.95rem", letterSpacing: "0.08em" }}
          >
            {section.title}
          </span>
        </span>
        <span
          className={`text-[#c9a96e] transition-transform duration-300 text-lg leading-none ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 mb-5" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-6 space-y-3 pr-1">
          {section.content.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a96e] flex-shrink-0" />
              <p
                className="text-[#5a4435] leading-relaxed text-sm"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {item}
              </p>
            </li>
          ))}
          {section.link && (
            <li className="pl-4">
              <a
                href={section.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#c9a96e] text-sm underline underline-offset-4 hover:text-[#a07840] transition-colors duration-200"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {section.link.label} →
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function TermsAndConditions() {
  const [openSection, setOpenSection] = useState<string | null>("booking-fee");

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap');

        .grain-overlay::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }
      `}</style>

      <div
        className="grain-overlay min-h-screen relative"
        style={{ backgroundColor: "#faf6f1" }}
      >
        {/* Decorative top border */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #c9a96e, #e8c99a, #c9a96e)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">

          {/* Header */}
          <header className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] text-[#c9a96e] uppercase mb-4"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            >
              Myxprecioussmua
            </p>
            <h1
              className="text-[2.8rem] leading-tight text-[#2c1f14] mb-3"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
            >
              Booking Terms
              <br />
              <em style={{ fontWeight: 400 }}>&amp; Conditions</em>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-12 bg-[#c9a96e]/40" />
              <span className="text-[#c9a96e] text-xs">✦</span>
              <div className="h-px w-12 bg-[#c9a96e]/40" />
            </div>
            <p
              className="mt-5 text-[#7a5c46] text-sm leading-relaxed max-w-sm mx-auto"
              style={{ fontFamily: "'Lora', Georgia, serif", fontStyle: "italic" }}
            >
              please read carefully before confirming your booking.
            </p>
          </header>

          {/* Accordion */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-[#e8ddd4] px-6 py-2 mb-10">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                section={section}
                isOpen={openSection === section.id}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>

          {/* Acceptance notice */}
          <div
            className="rounded-xl border border-[#c9a96e]/30 px-7 py-6 text-center"
            style={{ background: "linear-gradient(135deg, #fdf8f2, #faf3ea)" }}
          >
            <span className="text-[#c9a96e] text-lg block mb-2">✦</span>
            <p
              className="text-[#2c1f14] font-medium mb-1"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
            >
              Acceptance of Terms
            </p>
            <p
              className="text-[#7a5c46] text-sm leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Payment of the booking fee constitutes full acceptance of these Terms &amp; Conditions.
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center mt-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c9a96e]/30" />
              <span className="text-[#c9a96e]/50 text-xs">✦</span>
              <div className="h-px w-8 bg-[#c9a96e]/30" />
            </div>
            <p
              className="text-xs text-[#b09070]"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.1em" }}
            >
              © Myxprecioussmua — All rights reserved
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}