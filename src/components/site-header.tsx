import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "Supplement Reviews", href: "/reviews" },
  { label: "Ingredient Investigations", href: "/ingredients" },
  { label: "Scam or Legit?", href: "/scam-or-legit" },
  { label: "Our Methodology", href: "/methodology" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--brand-navy)] text-white shadow-lg">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <span className="text-xs text-white/50 tracking-widest uppercase">
            Independent · Evidence-Based · Consumer Investigations
          </span>
          <span className="text-xs text-[var(--brand-gold)] tracking-wide">
            Health · Supplements · Nutraceuticals
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-3">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center sm:items-start group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--brand-gold)] rounded-sm flex items-center justify-center">
              <span className="text-[var(--brand-navy)] font-black text-sm leading-none">T</span>
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                The Truth Review
              </div>
              <div className="text-[10px] text-[var(--brand-gold)] tracking-[0.2em] uppercase mt-0.5">
                Before You Buy, Know the Truth.
              </div>
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="sm:ml-auto flex items-center gap-1 flex-wrap justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Investigation Report bar */}
      <div className="bg-[var(--brand-gold)] px-4 py-1">
        <div className="max-w-6xl mx-auto flex items-center gap-4 text-[11px] text-[var(--brand-navy)] font-semibold tracking-wider uppercase">
          <span>⚑ Investigation Report</span>
          <Separator orientation="vertical" className="h-3 bg-[var(--brand-navy)]/30" />
          <span>Scientific Evidence</span>
          <Separator orientation="vertical" className="h-3 bg-[var(--brand-navy)]/30" />
          <span>Ingredient Analysis</span>
          <Separator orientation="vertical" className="h-3 bg-[var(--brand-navy)]/30" />
          <span>Consumer Feedback</span>
          <Separator orientation="vertical" className="h-3 bg-[var(--brand-navy)]/30" />
          <span>Final Verdict</span>
        </div>
      </div>
    </header>
  );
}
