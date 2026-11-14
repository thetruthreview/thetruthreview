import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white/70 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div className="max-w-sm">
            <div
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The Truth Review
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Independent investigations into dietary supplements. Ingredients, evidence and
              commercial claims, analyzed before you buy.
            </p>
          </div>
          <ul className="flex flex-wrap sm:flex-col gap-x-6 gap-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Medical Disclaimer</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <p className="text-xs text-white/40 mt-8 border-t border-white/10 pt-4">
          This site may earn a commission if you buy through links on it, at no extra cost to you.
          Content is informational and is not medical advice. Consult a healthcare professional
          before using any supplement.
        </p>
      </div>
    </footer>
  );
}
