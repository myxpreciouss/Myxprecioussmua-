import Link from "next/link";

interface SpotlightItem {
  id: number;
  image: string;
  alt: string;
  quote: string;
  name: string;
  date: string;
  imageLeft: boolean;
}

const spotlightItems: SpotlightItem[] = [
  {
    id: 1,
    image: "/ojono-pic.jpg",
    alt: "Ojono bridal makeup look",
    quote:
      "Precious was amazing!!! She truly outdid herself. I know I stressed her out, but she never complained and even went the extra mile to sort out my hair. And the makeup? it ate! She did a fantastic job. I absolutely loved my look, and it lasted the entire day. I would recommend Precious a thousand times over. Thank you so much girl, for making me feel beautiful!",
    name: "Ojono",
    date: "Dec 13, 2025",
    imageLeft: true,
  },
  
];

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
        .sp-fade-up  { animation: fadeUp 0.7s ease both; }
        .sp-delay-1  { animation-delay: 0.1s; }
        .sp-delay-2  { animation-delay: 0.25s; }
        .sp-delay-3  { animation-delay: 0.4s; }

        /* ── Page wrapper ── */
        .sp-page {
          width: 100%;
          background-color: #faf6f1;
        }

        /* ── Banner ── */
        .sp-banner {
          width: 100%;
          background-color: #c4958a;
          padding: 52px 24px 56px;
          text-align: center;
        }
        .sp-banner-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 500;
          font-size: 2rem;
          color: #faf6f1;
          letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .sp-banner-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .sp-banner-divider-line {
          height: 1px;
          width: 40px;
          background: rgba(250,246,241,0.35);
        }
        .sp-banner-divider-star {
          color: rgba(250,246,241,0.6);
          font-size: 0.6rem;
        }
        .sp-banner-sub {
          font-family: 'Lora', Georgia, serif;
          font-size: 0.88rem;
          line-height: 1.85;
          color: rgba(250,246,241,0.88);
          max-width: 420px;
          margin: 0 auto 16px;
        }
        .sp-banner-note {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(250,246,241,0.6);
        }
        .sp-banner-note a {
          color: rgba(250,246,241,0.85);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* ── Items ── */
        .sp-items {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 40px 64px;
          display: flex;
          flex-direction: column;
        }

        /* ── Single item ── */
        .sp-item {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 72px;
          min-height: 300px;
        }
        .sp-item.img-left  { justify-content: flex-start; }
        .sp-item.img-right { justify-content: flex-end; }

        /* ── Image ── */
        .sp-img-wrap {
          position: relative;
          width: 44%;
          aspect-ratio: 3/4;
          flex-shrink: 0;
          z-index: 1;
        }
        .sp-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }

        /* Gold corner accent */
        .sp-img-accent {
          position: absolute;
          width: 36px;
          height: 36px;
          z-index: 3;
          pointer-events: none;
        }
        .sp-item.img-left .sp-img-accent {
          bottom: -8px;
          left: -8px;
          border-bottom: 2px solid #c9a96e;
          border-left: 2px solid #c9a96e;
        }
        .sp-item.img-right .sp-img-accent {
          bottom: -8px;
          right: -8px;
          border-bottom: 2px solid #c9a96e;
          border-right: 2px solid #c9a96e;
        }

        /* ── Quote card ── */
        .sp-card {
          position: absolute;
          background-color: #9a7b6e;
          padding: 36px 32px;
          width: 56%;
          z-index: 2;
          text-align: center;
        }
        .sp-item.img-left .sp-card {
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .sp-item.img-right .sp-card {
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .sp-card-quote {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.82rem;
          line-height: 1.9;
          color: rgba(250,246,241,0.88);
          margin-bottom: 20px;
          position: relative;
        }
        .sp-quote-mark {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 4rem;
          line-height: 0;
          color: rgba(250,246,241,0.12);
          position: absolute;
          top: 24px;
          left: -8px;
        }

        .sp-card-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .sp-card-divider-line {
          height: 1px;
          width: 32px;
          background: rgba(201,169,110,0.3);
        }
        .sp-card-divider-star {
          color: #c9a96e;
          font-size: 0.55rem;
        }

        .sp-card-name {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 4px;
        }
        .sp-card-date {
          font-family: 'Lora', Georgia, serif;
          font-style: italic;
          font-size: 0.72rem;
          color: rgba(250,246,241,0.5);
        }

        /* ── Bottom CTA ── */
        .sp-cta-wrap {
          display: flex;
          justify-content: center;
          padding: 0 24px 64px;
        }
        .sp-cta-btn {
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
        .sp-cta-btn:hover {
          box-shadow: 0 8px 32px rgba(201,169,110,0.45);
          transform: translateY(-1px);
        }
        .sp-cta-btn:active { transform: translateY(0); }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .sp-items { padding: 40px 20px 40px; }
          .sp-item {
            flex-direction: column;
            align-items: stretch;
            min-height: unset;
            margin-bottom: 48px;
          }
          .sp-item.img-left,
          .sp-item.img-right { justify-content: unset; }
          .sp-img-wrap {
            width: 72%;
            aspect-ratio: 3/4;
          }
          .sp-item.img-left  .sp-img-wrap { align-self: flex-start; }
          .sp-item.img-right .sp-img-wrap { align-self: flex-end; }
          .sp-card {
            position: relative;
            width: 82%;
            top: unset; left: unset; right: unset;
            transform: none;
            margin-top: -32px;
            padding: 24px 20px;
          }
          .sp-item.img-left  .sp-card { align-self: flex-end;  }
          .sp-item.img-right .sp-card { align-self: flex-start; }
          .sp-img-accent { display: none; }
          .sp-card-quote { font-size: 0.78rem; }
          .sp-quote-mark { display: none; }
        }
      `}</style>

      <div className="sp-page">

        {/* ── Banner ── */}
        <div className="sp-banner sp-fade-up">
          <h1 className="sp-banner-title">Spotlight</h1>
          <div className="sp-banner-divider">
            <div className="sp-banner-divider-line" />
            <span className="sp-banner-divider-star">✦</span>
            <div className="sp-banner-divider-line" />
          </div>
          <p className="sp-banner-sub">
            This is where my clients take the spotlight, browse their
            beautiful looks and read what they had to say about their experience.
          </p>
          <p className="sp-banner-note">
            <Link href="/Portfolio">Click Portfolio</Link> to see all my collaborations and work
          </p>
        </div>

        {/* ── Testimonial items ── */}
        <div className="sp-items">
          {spotlightItems.map((item: SpotlightItem, i: number) => (
            <div
              key={item.id}
              className={`sp-item sp-fade-up ${item.imageLeft ? "img-left" : "img-right"}`}
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}
            >
              {/* Image */}
              <div className="sp-img-wrap">
                <img src={item.image} alt={item.alt} />
                <div className="sp-img-accent" />
              </div>

              {/* Quote card */}
              <div className="sp-card">
                <p className="sp-card-quote">
                  <span className="sp-quote-mark">"</span>
                  {item.quote}
                </p>
                <div className="sp-card-divider">
                  <div className="sp-card-divider-line" />
                  <span className="sp-card-divider-star">✦</span>
                  <div className="sp-card-divider-line" />
                </div>
                <p className="sp-card-name">{item.name}</p>
                <p className="sp-card-date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Book CTA ── */}
        <div className="sp-cta-wrap sp-fade-up sp-delay-3">
          <Link href="/Request-Appointment" className="sp-cta-btn">
            Book Your Look ✦
          </Link>
        </div>

      </div>
    </>
  );
}