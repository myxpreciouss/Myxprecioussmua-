import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap');

        * { box-sizing: border-box; }

        .hero-section {
          position: relative;
          width: 100%;
          height: calc(100vh - 72px);
          min-height: 580px;
          overflow: hidden;
        }

        /* Subtle gradient — bottom only, light, so image stays the star */
        .hero-gradient-bottom {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(20, 10, 5, 0.72) 0%,
            rgba(20, 10, 5, 0.18) 38%,
            transparent 60%
          );
          z-index: 1;
        }

        /* Very faint left vignette to ground the text */
        .hero-gradient-left {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(20, 10, 5, 0.28) 0%,
            transparent 55%
          );
          z-index: 1;
        }

        /* Content sits at the bottom-left */
        .hero-content {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          padding: 0 56px 56px;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          max-width: 520px;
        }

        /* Eyebrow */
        .hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.68rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #e8c99a;
          margin-bottom: 14px;
        }

        /* Gold divider before headline */
        .hero-rule {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }
        .hero-rule-line {
          height: 1px;
          width: 36px;
          background: rgba(201,169,110,0.6);
        }
        .hero-rule-star {
          color: #c9a96e;
          font-size: 0.6rem;
        }

        /* Headline */
        .hero-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          line-height: 1.08;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: 0.01em;
        }
        .hero-headline em {
          font-weight: 400;
          color: #e8c99a;
        }

        /* Sub */
        .hero-sub {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.88rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.8);
          max-width: 320px;
          margin-bottom: 8px;
        }

        /* Location */
        .hero-location {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.68rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(232,201,154,0.75);
          margin-bottom: 28px;
        }

        /* CTA */
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #c9a96e, #a07840);
          color: #faf6f1;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 36px;
          border-radius: 999px;
          box-shadow: 0 4px 24px rgba(201,169,110,0.35);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          width: fit-content;
        }
        .hero-cta:hover {
          box-shadow: 0 8px 36px rgba(201,169,110,0.55);
          transform: translateY(-1px);
        }
        .hero-cta:active { transform: translateY(0); }

        /* Scroll hint */
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          right: 40px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hero-scroll-text {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(232,201,154,0.55);
          writing-mode: vertical-rl;
        }
        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(201,169,110,0.5), transparent);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up  { animation: fadeUp 0.8s ease both; }
        .delay-1  { animation-delay: 0.1s; }
        .delay-2  { animation-delay: 0.25s; }
        .delay-3  { animation-delay: 0.4s; }
        .delay-4  { animation-delay: 0.55s; }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .hero-section {
            min-height: 100svh;
            height: 100svh;
          }

          .hero-content {
            padding: 0 24px 44px;
            align-items: flex-end;
          }

          .hero-headline {
            font-size: clamp(2rem, 8vw, 2.6rem);
          }

          .hero-sub {
            font-size: 0.84rem;
            max-width: 100%;
          }

          .hero-scroll {
            display: none;
          }

          .hero-cta {
            padding: 13px 28px;
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section className="hero-section">

        {/* Full-bleed background image — the focus */}
        <Image
          src="/ojono.png"
          alt="Soft glam makeup look"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Gradient overlays — minimal, preserve image */}
        <div className="hero-gradient-bottom" />
        <div className="hero-gradient-left" />

        {/* Content — anchored bottom-left */}
        <div className="hero-content">
          <div className="hero-inner">

            <p className="hero-eyebrow fade-up delay-1">Myxprecioussmua</p>

            <div className="hero-rule fade-up delay-1">
              <div className="hero-rule-line" />
              <span className="hero-rule-star">✦</span>
            </div>

            <h1 className="hero-headline fade-up delay-2">
              Creating stunning
              <br />
              <em>soft glam</em> looks
            </h1>

            <p className="hero-sub fade-up delay-3">
              Enhancing natural beauty and helping you feel confident for every occasion.
            </p>

            <p className="hero-location fade-up delay-3">
              Based in Milton Keynes · Available to travel
            </p>

            <Link href="/Booking" className="hero-cta fade-up delay-4">
              Book Now ✦
            </Link>

          </div>
        </div>

        {/* Scroll hint — desktop only */}
        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>

      </section>
    </>
  );
}