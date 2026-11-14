import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Truth Review is an independent consumer publication dedicated to evidence-based investigations of dietary supplements and nutraceuticals.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          About This Publication
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          About The Truth Review
        </h1>
      </div>

      <div className="prose text-sm leading-relaxed space-y-4 text-foreground">
        <p>
          The Truth Review is an independent consumer publication focused exclusively on the
          dietary supplement and nutraceutical industry in the United States and beyond.
        </p>
        <p>
          We were founded with a simple premise: the supplement industry spends billions on
          marketing and very little on transparent, verifiable science communication. Consumers
          searching for honest information are frequently met with biased reviews, undisclosed
          sponsorships, and claims that don&apos;t withstand scientific scrutiny.
        </p>
        <p>
          Our team combines backgrounds in nutritional science, investigative journalism, and
          consumer advocacy. Every review we publish follows the same 10-section methodology —
          from ingredient analysis to final verdict — with explicit standards for evidence quality.
        </p>
        <p>
          We generate revenue through affiliate partnerships. When you purchase a product through
          a link on this site, we may earn a commission at no additional cost to you. This
          never influences our conclusions — we{" "}
          <Link href="/affiliate-disclosure" className="underline text-[var(--brand-gold)]">
            disclose all affiliate relationships
          </Link>{" "}
          clearly on every review page.
        </p>
        <p>
          If you have questions, corrections, or product suggestions, you can reach our editorial
          team at <a href="mailto:editorial@thetruthrview.com" className="underline text-[var(--brand-gold)]">editorial@thetruthrview.com</a>.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "🔬", label: "Science-First", desc: "Every claim checked against human clinical research." },
          { icon: "🚫", label: "No Paid Reviews", desc: "Affiliate links disclosed. Conclusions never for sale." },
          { icon: "📋", label: "Consistent Method", desc: "Same 10-section framework on every investigation." },
        ].map((item) => (
          <div key={item.label} className="border rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-semibold text-[var(--brand-navy)] mb-1">{item.label}</div>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
