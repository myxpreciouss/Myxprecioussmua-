import Link from "next/link";

interface PortfolioItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  imageLeft: boolean;
}

const portfolioItems: PortfolioItem[] = [
  
  {
    id: 2,
    image: "/Ophelia2.jpg",
    alt: "Soft glam makeup look",
    title: "Soft Glam",
    description: "Whatever the occasion, let's get you looking polished, feeling confident and camera-ready.",
    cta: "Book Now",
    href: "/Request-Appointment",
    imageLeft: false,
  },
  
];

export default function Gallery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap');

        * { box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .g-fade-up { animation: fadeUp 0.7s ease both; }
        .g-delay-1 { animation-delay: 0.1s; }
        .g-delay-2 { animation-delay: 0.25s; }
        .g-delay-3 { animation-delay: 0.4s; }

        /* ── Wrapper ── */
        .gallery-section {
          width: 100%;
          background-color: #faf6f1;
        }

        /* ── Banner ── */
        .gallery-banner {
          width: 100%;
          background-color: #c4958a;
          padding: 48px 24px 52px;
          text-align: center;
        }
        .gallery-banner-title {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #faf6f1;
          margin-bottom: 18px;
        }
        .gallery-banner-sub {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.88rem;
          line-height: 1.85;
          color: rgba(250,246,241,0.92);
          max-width: 400px;
          margin: 0 auto;
        }

        /* ── Items ── */
        .gallery-items {
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 40px 64px;
        }

        /* ── Single item ── */
        .gallery-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 56px;
          min-height: 280px;
        }
        .gallery-item.img-left  { justify-content: flex-start; }
        .gallery-item.img-right { justify-content: flex-end; }

        /* ── Image ── */
        .gallery-img-wrap {
          position: relative;
          width: 48%;
          aspect-ratio: 4/3;
          flex-shrink: 0;
          z-index: 1;
        }
        .gallery-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* ── Card ── */
        .gallery-card {
          position: absolute;
          background-color: #9a7b6e;
          padding: 32px 28px;
          width: 52%;
          z-index: 2;
          text-align: center;
        }
        .gallery-item.img-left .gallery-card {
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .gallery-item.img-right .gallery-card {
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .gallery-card-eyebrow {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(250,246,241,0.65);
          margin-bottom: 8px;
        }
        .gallery-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: 1.4rem;
          color: #faf6f1;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .gallery-card-text {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.8rem;
          line-height: 1.8;
          color: rgba(250,246,241,0.85);
          margin-bottom: 20px;
        }
        .gallery-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid rgba(250,246,241,0.55);
          color: #faf6f1;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 24px;
          border-radius: 999px;
          transition: background 0.22s ease, border-color 0.22s ease;
        }
        .gallery-card-btn:hover {
          background: rgba(250,246,241,0.12);
          border-color: rgba(250,246,241,0.85);
        }

        /* Gold corner accent */
        .gallery-img-accent {
          position: absolute;
          width: 40px;
          height: 40px;
          z-index: 3;
          pointer-events: none;
        }
        .gallery-item.img-left .gallery-img-accent {
          bottom: -8px;
          left: -8px;
          border-bottom: 2px solid #c9a96e;
          border-left: 2px solid #c9a96e;
        }
        .gallery-item.img-right .gallery-img-accent {
          bottom: -8px;
          right: -8px;
          border-bottom: 2px solid #c9a96e;
          border-right: 2px solid #c9a96e;
        }

        /* ── Bottom CTA ── */
        .gallery-cta-wrap {
          display: flex;
          justify-content: center;
          padding: 0 24px 64px;
        }
        .gallery-cta-btn {
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
        .gallery-cta-btn:hover {
          box-shadow: 0 8px 32px rgba(201,169,110,0.45);
          transform: translateY(-1px);
        }
        .gallery-cta-btn:active { transform: translateY(0); }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .gallery-items { padding: 40px 20px 40px; }
          .gallery-item {
            flex-direction: column;
            align-items: stretch;
            min-height: unset;
            margin-bottom: 40px;
          }
          .gallery-item.img-left,
          .gallery-item.img-right { justify-content: unset; }
          .gallery-img-wrap { width: 75%; }
          .gallery-item.img-left  .gallery-img-wrap { align-self: flex-start; }
          .gallery-item.img-right .gallery-img-wrap { align-self: flex-end; }
          .gallery-card {
            position: relative;
            width: 80%;
            top: unset; left: unset; right: unset;
            transform: none;
            margin-top: -32px;
          }
          .gallery-item.img-left  .gallery-card { align-self: flex-end;  transform: none; }
          .gallery-item.img-right .gallery-card { align-self: flex-start; transform: none; }
          .gallery-img-accent { display: none; }
        }
      `}</style>

      <div style={{ backgroundColor: '#faf6f1' }}>
      {/* Banner sits outside section so it's truly full-width with no padding */}
      <div className="gallery-banner g-fade-up">
        <p className="gallery-banner-title">OCCASION</p>
        <p className="gallery-banner-sub">
          I take pride in creating flawless, bespoke looks that enhance
          your natural beauty and makes you feel your most confident
          <br /><br />
          Every look is designed to photograph beautifully and
          last throughout the day
        </p>
      </div>

      <section className="gallery-section">

        <div className="gallery-items">
          {portfolioItems.map((item: PortfolioItem, i: number) => (
            <div
              key={item.id}
              className={`gallery-item g-fade-up ${item.imageLeft ? "img-left" : "img-right"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="gallery-img-wrap">
                <img src={item.image} alt={item.alt} />
                <div className="gallery-img-accent" />
              </div>

              <div className="gallery-card">
                <p className="gallery-card-eyebrow">Myxprecioussmua</p>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-text">{item.description}</p>
                <Link href={item.href} className="gallery-card-btn">
                  {item.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}