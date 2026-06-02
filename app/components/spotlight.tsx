import Image from "next/image";
import Link from "next/link";

export default function Spotlight() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up   { animation: fadeUp 0.7s ease both; }
        .delay-1   { animation-delay: 0.15s; }
        .delay-2   { animation-delay: 0.30s; }
        .delay-3   { animation-delay: 0.45s; }

        .spotlight-section {
          width: 100%;
          background-color: #faf6f1;
          padding: 80px 0;
          overflow: hidden;
        }

        /* ── Two-column layout ── */
        .spotlight-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Image column ── */
        .image-col {
          position: relative;
          height: 680px;
          overflow: visible;
        }

        /* Back image */
        .img-back {
          position: absolute;
          top: 0;
          left: -40px;
          width: 68%;
          height: 88%;
          z-index: 1;
        }
        .img-back img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .img-back-dim {
          position: absolute;
          inset: 0;
          background: rgba(44, 31, 20, 0.35);
        }

        /* Front image */
        .img-front {
          position: absolute;
          bottom: 0;
          right: -20px;
          width: 56%;
          height: 68%;
          z-index: 2;
          box-shadow: 0 20px 60px rgba(44,31,20,0.18);
        }
        .img-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* Gold accent line */
        .img-accent-line {
          position: absolute;
          bottom: 36px;
          left: 8px;
          width: 3px;
          height: 120px;
          background: linear-gradient(to bottom, #c9a96e, transparent);
          z-index: 3;
        }

        /* ── Text column ── */
        .text-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 48px 56px;
        }

        .spotlight-eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 16px;
        }

        .spotlight-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: 3rem;
          color: #2c1f14;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .spotlight-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 20px 0 28px;
        }
        .divider-line {
          height: 1px;
          width: 48px;
          background: rgba(201,169,110,0.4);
        }
        .divider-star {
          color: #c9a96e;
          font-size: 0.65rem;
        }

        .spotlight-quote {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.92rem;
          line-height: 1.9;
          color: #7a5c46;
          max-width: 380px;
          margin-bottom: 28px;
          position: relative;
        }
        .quote-mark {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 5rem;
          line-height: 0;
          color: rgba(201,169,110,0.18);
          position: absolute;
          top: 28px;
          left: -24px;
        }

        .spotlight-name {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 6px;
        }

        .spotlight-date {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.78rem;
          color: #b09070;
        }

        /* ── CTA ── */
        .cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 64px;
          padding: 0 24px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #c9a96e, #a07840);
          color: #faf6f1;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 40px;
          border-radius: 999px;
          box-shadow: 0 4px 18px rgba(201,169,110,0.28);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .cta-btn:hover {
          box-shadow: 0 8px 32px rgba(201,169,110,0.45);
          transform: translateY(-1px);
        }
        .cta-btn:active { transform: translateY(0); }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .spotlight-section {
            padding: 56px 0 48px;
          }

          /* Stack vertically, text first */
          .spotlight-inner {
            grid-template-columns: 1fr;
          }

          /* On mobile: text column comes first */
          .text-col {
            order: 1;
            padding: 0 24px 40px;
          }
          .image-col {
            order: 2;
            height: 420px;
            width: 100%;
            overflow: hidden;
          }

          /* On mobile: simplified image layout — back fills left, front peeks right */
          .img-back {
            left: 0;
            width: 72%;
            height: 100%;
            top: 0;
          }
          .img-front {
            right: 0;
            bottom: 0;
            width: 46%;
            height: 72%;
          }
          .img-accent-line {
            display: none;
          }

          .spotlight-title {
            font-size: 2.2rem;
          }

          .cta-wrap {
            margin-top: 44px;
            padding: 0 24px;
          }
        }

        @media (max-width: 480px) {
          .spotlight-title {
            font-size: 1.9rem;
          }
          .image-col {
            height: 340px;
          }
          .text-col {
            padding: 0 20px 32px;
          }
          .spotlight-quote {
            font-size: 0.87rem;
          }
          .quote-mark {
            display: none;
          }
        }
      `}</style>

      <section className="spotlight-section">
        <div className="spotlight-inner">

          {/* ── Left / Bottom (mobile): Overlapping Images ── */}
          <div className="image-col fade-up delay-1">
            {/* Back image */}
            <div className="img-back">
              <img src="/ojono-pic.jpg" alt="Bridal makeup look" />
              <div className="img-back-dim" />
            </div>

            {/* Front image */}
            <div className="img-front">
              <img src="/ojono-pic.jpg" alt="Bridal makeup close-up" />
            </div>

            {/* Vertical gold accent */}
            <div className="img-accent-line" />
          </div>

          {/* ── Right / Top (mobile): Testimonial ── */}
          <div className="text-col fade-up">
            <p className="spotlight-eyebrow">Client Story</p>
            <h2 className="spotlight-title">
              Spotlight
            </h2>

            <div className="spotlight-divider">
              <div className="divider-line" />
              <span className="divider-star">✦</span>
              <div className="divider-line" />
            </div>

            <blockquote className="spotlight-quote">
              <span className="quote-mark">"</span>
              Precious was amazing!!! She truly outdid herself. I know I stressed
              her out, but she never complained and even went the extra mile to
              sort out my hair. And the makeup? it ate! She did a fantastic job. I
              absolutely loved my look, and it lasted the entire day. I would
              recommend Precious a thousand times over. Thank you so much girl,
              for making me feel beautiful!
            </blockquote>

            <p className="spotlight-name">Ojono</p>
            <p className="spotlight-date">Dec 13, 2025</p>
          </div>

        </div>

        {/* ── See More CTA ── */}
        <div className="cta-wrap fade-up delay-3">
          <Link href="/Spotlight" className="cta-btn">
            See More ✦
          </Link>
        </div>
      </section>
    </>
  );
}