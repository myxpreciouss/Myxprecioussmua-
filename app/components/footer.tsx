import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t" style={{ borderColor: "#e8ddd4" }}>
      <div style={{ maxWidth: "672px", margin: "0 auto" }} className="px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p
            className="text-sm tracking-[0.2em] text-[#ce9261] uppercase"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500 }}
          >
            Myxprecioussmua
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-6">
            <Link href="/Spotlight" className="text-xs tracking-[0.15em] uppercase text-[#a3836c] hover:text-[#d3cac2] transition-colors duration-200" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>Spotlight</Link>
            <Link href="/Bridal" className="text-xs tracking-[0.15em] uppercase text-[#a3836c] hover:text-[#d3cac2] transition-colors duration-200" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>Bridal</Link>
            <Link href="/Collab" className="text-xs tracking-[0.15em] uppercase text-[#a3836c] hover:text-[#d3cac2] transition-colors duration-200" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>Collab</Link>
            <Link href="/Contact" className="text-xs tracking-[0.15em] uppercase text-[#a3836c] hover:text-[#d3cac2] transition-colors duration-200" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-3 mt-7 mb-4">
          <div className="h-px w-8 bg-[#c9a96e]/30" />
          <span className="text-[#c9a96e]/50 text-xs">✦</span>
          <div className="h-px w-8 bg-[#c9a96e]/30" />
        </div>
        <p
          className="text-center text-xs text-[#b09070]"
          style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, letterSpacing: "0.1em" }}
        >
          © Myxprecioussmua — All rights reserved
        </p>
      </div>
    </footer>
  );
}