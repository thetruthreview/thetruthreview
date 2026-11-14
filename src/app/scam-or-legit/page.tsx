import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scam or Legit?",
  description:
    "Independent legitimacy investigations into dietary supplement brands — examining commercial claims, transparency, and consumer protection red flags.",
};

export default function ScamOrLegitPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8 border-b pb-6">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Legitimacy Investigations
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Scam or Legit?
        </h1>
        <p className="text-muted-foreground max-w-xl">
          Not every investigation is a product review. Sometimes we look deeper — examining
          marketing claims, return policies, company transparency, and consumer protection flags.
          This section is about legitimacy.
        </p>
      </div>

      {/* What we look for */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: "🏭", title: "Company Transparency", desc: "Who is behind the product? Are they registered, verifiable, and accountable?" },
          { icon: "⚠️", title: "Marketing Red Flags", desc: "Fabricated urgency, fake scarcity, unverifiable testimonials, miracle claims." },
          { icon: "💰", title: "Refund & Billing Practices", desc: "Hidden subscriptions, difficult cancellations, deceptive pricing structures." },
        ].map((item) => (
          <div key={item.title} className="bg-[var(--brand-navy)] text-white rounded-lg p-5">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold mb-1 text-[var(--brand-gold)]">{item.title}</h3>
            <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center py-16 text-muted-foreground">
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-lg font-semibold mb-2">First legitimacy investigations coming soon</h2>
        <p className="text-sm">We investigate one product at a time, following our full methodology.</p>
      </div>
    </div>
  );
}
