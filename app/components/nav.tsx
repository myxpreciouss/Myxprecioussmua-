"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/Bridal", label: "Bridal" },
  { href: "/Occasion", label: "Occasion" },
  { href: "/Collab", label: "Collab" },
  { href: "/Spotlight", label: "Spotlight" },
  { href: "/Booking", label: "Booking" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Jost:wght@300;400&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a96e;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #2c1f14;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #c9a96e;
        }
        .nav-link.active::after {
          width: 100%;
        }

        .mobile-link {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.9rem;
          font-weight: 400;
          color: #2c1f14;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
          font-style: italic;
        }
        .mobile-link:hover,
        .mobile-link.active {
          color: #c9a96e;
        }

        .hamburger-bar {
          display: block;
          width: 22px;
          height: 1px;
          background: #7a5c46;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: #faf6f1;
          z-index: 40;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .mobile-overlay.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }
        .mobile-overlay.closed {
          opacity: 0;
          transform: translateY(-12px);
          pointer-events: none;
        }

        @keyframes menuLinkIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .menu-link-item {
          animation: menuLinkIn 0.4s ease both;
        }
      `}</style>

      {/* Top gold bar */}
      <div
        className="h-[3px] w-full fixed top-0 left-0 z-50"
        style={{ background: "linear-gradient(to right, #c9a96e, #e8c99a, #c9a96e)" }}
      />

      <nav
        className="fixed top-[3px] left-0 w-full z-50"
        style={{
          backgroundColor: "rgba(137,107,102,0.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(232,221,212,0.8)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-50">
            <Image
              src="/logov2.png"
              alt="Myxprecioussmua Logo"
              width={90}
              height={72}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/Booking"
              className="text-xs uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-250"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #c9a96e, #a07840)",
                color: "#faf6f1",
                boxShadow: "0 2px 12px rgba(201,169,110,0.3)",
                textDecoration: "none",
              }}
              onMouseOver={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,169,110,0.5)")}
              onMouseOut={e => (e.currentTarget.style.boxShadow = "0 2px 12px rgba(201,169,110,0.3)")}
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden relative z-50 flex flex-col justify-center items-center gap-[6px] w-8 h-8 focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="hamburger-bar"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                background: menuOpen ? "#ffffff" : "#ffffff",
              }}
            />
            <span
              className="hamburger-bar"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
                color: "#ffffff"
              }}
            />
            <span
              className="hamburger-bar"
              style={{
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                background: menuOpen ? "#ffffff" : "#ffffff",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : "closed"}`}>
        {/* Grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Brand */}
        <p
          className="text-xs tracking-[0.35em] text-[#c9a96e] uppercase mb-10"
          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
        >
          Myxprecioussmua
        </p>

        {/* Links */}
        <ul className="flex flex-col items-center gap-5">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="menu-link-item"
              style={{ animationDelay: menuOpen ? `${i * 0.07}s` : "0s" }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-10 mb-6">
          <div className="h-px w-10 bg-[#c9a96e]/30" />
          <span className="text-[#c9a96e]/50 text-xs">✦</span>
          <div className="h-px w-10 bg-[#c9a96e]/30" />
        </div>

        {/* Mobile CTA */}
        <Link
          href="/Booking"
          onClick={() => setMenuOpen(false)}
          className="text-xs uppercase tracking-widest px-8 py-3 rounded-full"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            background: "linear-gradient(135deg, #c9a96e, #a07840)",
            color: "#faf6f1",
            boxShadow: "0 4px 18px rgba(201,169,110,0.28)",
            textDecoration: "none",
          }}
        >
          Book Now ✦
        </Link>
      </div>
    </>
  );
}