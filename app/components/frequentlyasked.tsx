export default function FAQ() {
    const faqs = [
      {
        q: "Do I need to bring my own products?",
        a: "No need to bring anything with you for the appointment — however you can if you wish. I have a full and diverse collection of premium products; makeup and skin care.",
      },
      {
        q: "Can I bring inspiration photos?",
        a: "Of course you can. After booking I reach out to see if you have an idea of the look you desire or want to draw inspiration from, so we are both on the same page. It's ok to change your mind, just let me know. I will be checking in as we progress to ensure you are happy with everything.",
      },
      {
        q: "How should I prepare for my appointment?",
        a: "Arrive with a clean, makeup-free face, lightly moisturised skin. Contact lenses — if you wear them — put them in before the makeup starts.",
      },
      {
        q: "How long does the appointment take?",
        a: "Appointments can be one and a half or two hours long depending on the look. Give yourself enough time to arrive calm and relaxed.",
      },
      {
        q: "What should I avoid before my makeup appointment?",
        a: "Please do not arrive wearing makeup, as it can take time to remove and may leave residue. Avoid greasy sunscreen which can affect how the makeup sits on the skin. Lastly avoid trying new skin products, facials, or chemical peels at least 48hrs before to avoid irritation.",
      },
      {
        q: "How do I make my makeup last after the appointment?",
        a: "No need to worry — I make sure the makeup lasts with good skin prep, long-wearing and reliable products, and techniques that improve longevity. A mini touch-up kit is included with the service. I've got you covered.",
      },
    ];
  
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400&display=swap');
  
          * { box-sizing: border-box; }
  
          .faq-section {
            width: 100%;
            background-color: #faf6f1;
            padding: 80px 24px;
          }
  
          .faq-container {
            max-width: 860px;
            margin: 0 auto;
          }
  
          /* ── Header ── */
          .faq-header {
            text-align: center;
            margin-bottom: 56px;
          }
          .faq-eyebrow {
            font-family: 'Jost', sans-serif;
            font-weight: 300;
            font-size: 0.68rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #c9a96e;
            margin-bottom: 14px;
          }
          .faq-title {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-weight: 500;
            font-size: clamp(2rem, 5vw, 2.9rem);
            color: #2c1f14;
            line-height: 1.1;
            margin-bottom: 0;
          }
          .faq-title em {
            font-weight: 400;
            color: #c9a96e;
          }
          .faq-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 20px 0 0;
          }
          .faq-divider-line {
            height: 1px;
            width: 48px;
            background: rgba(201,169,110,0.4);
          }
          .faq-divider-star {
            color: #c9a96e;
            font-size: 0.65rem;
          }
  
          /* ── FAQ list ── */
          .faq-list {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
  
          .faq-item {
            border-bottom: 1px solid #e8ddd4;
            overflow: hidden;
          }
          .faq-item:first-child {
            border-top: 1px solid #e8ddd4;
          }
  
          /* Hidden checkbox for accordion toggle */
          .faq-toggle {
            display: none;
          }
  
          .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 22px 4px;
            cursor: pointer;
            user-select: none;
            list-style: none;
          }
          .faq-question::-webkit-details-marker { display: none; }
  
          .faq-q-left {
            display: flex;
            align-items: center;
            gap: 14px;
          }
  
          .faq-number {
            font-family: 'Jost', sans-serif;
            font-weight: 300;
            font-size: 0.65rem;
            letter-spacing: 0.15em;
            color: #c9a96e;
            min-width: 20px;
          }
  
          .faq-q-text {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-weight: 500;
            font-size: 1.15rem;
            color: #2c1f14;
            line-height: 1.3;
            transition: color 0.2s ease;
          }
  
          .faq-icon {
            flex-shrink: 0;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 1px solid rgba(201,169,110,0.35);
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #c9a96e;
            font-size: 0.75rem;
            transition: background 0.25s ease, border-color 0.25s ease, transform 0.3s ease;
          }
  
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, padding 0.3s ease;
            padding: 0 4px;
          }
  
          .faq-a-text {
            font-family: 'Lora', Georgia, serif;
            font-style: italic;
            font-size: 0.88rem;
            line-height: 1.85;
            color: #7a5c46;
            padding-bottom: 22px;
            padding-left: 34px;
          }
  
          /* Open state */
          details[open] .faq-question .faq-q-text {
            color: #c9a96e;
          }
          details[open] .faq-icon {
            background: rgba(201,169,110,0.1);
            border-color: #c9a96e;
            transform: rotate(45deg);
          }
          details[open] .faq-answer {
            max-height: 300px;
            padding: 0 4px;
          }
  
          /* Hover */
          .faq-question:hover .faq-q-text {
            color: #a07840;
          }
          .faq-question:hover .faq-icon {
            border-color: rgba(201,169,110,0.7);
            background: rgba(201,169,110,0.06);
          }
  
          /* ── Animations ── */
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .fade-up  { animation: fadeUp 0.7s ease both; }
          .delay-1  { animation-delay: 0.1s; }
          .delay-2  { animation-delay: 0.2s; }
  
          /* ── Mobile ── */
          @media (max-width: 600px) {
            .faq-section {
              padding: 56px 16px;
            }
            .faq-q-text {
              font-size: 1rem;
            }
            .faq-a-text {
              font-size: 0.84rem;
              padding-left: 0;
            }
            .faq-question {
              padding: 18px 4px;
            }
          }
        `}</style>
  
        <section className="faq-section">
          <div className="faq-container">
  
            {/* Header */}
            <header className="faq-header fade-up">
              <p className="faq-eyebrow">Need to know</p>
              <h2 className="faq-title">
                Frequently Asked
                <br />
                <em>Questions</em>
              </h2>
              <div className="faq-divider">
                <div className="faq-divider-line" />
                <span className="faq-divider-star">✦</span>
                <div className="faq-divider-line" />
              </div>
            </header>
  
            {/* FAQ accordion */}
            <div className="faq-list fade-up delay-2">
              {faqs.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <div className="faq-q-left">
                      <span className="faq-number">0{i + 1}</span>
                      <span className="faq-q-text">{item.q}</span>
                    </div>
                    <div className="faq-icon">✦</div>
                  </summary>
                  <div className="faq-answer">
                    <p className="faq-a-text">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
  
          </div>
        </section>
      </>
    );
  }