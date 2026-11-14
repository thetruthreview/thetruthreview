import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white/70 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              The Truth Review
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-sm">
              Independent investigations into dietary supplements and nutraceuticals.
              We analyze ingredients, clinical evidence, and commercial claims — so you can decide.
            </p>
            <p className="text-xs mt-4 text-white/40">
              © 2025 The Truth Review. All rights reserved.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide uppercase text-xs">Investigations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews" className="hover:text-white transition-colors">Supplement Reviews</Link></li>
              <li><Link href="/ingredients" className="hover:text-white transition-colors">Ingredient Deep Dives</Link></li>
              <li><Link href="/scam-or-legit" className="hover:text-white transition-colors">Scam or Legit?</Link></li>
            </ul>
          </div>

          {/* Editorial */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide uppercase text-xs">Editorial</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Our Methodology</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            This site participates in affiliate programs. Reviews are independent. See our{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-white/60">Affiliate Disclosure</Link>.
          </p>
          <p>Not medical advice. Consult a healthcare professional before using any supplement.</p>
        </div>
      </div>
    </footer>
  );
}
