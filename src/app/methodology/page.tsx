import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Review Methodology",
  description:
    "How The Truth Review investigates dietary supplements — our 10-section framework, evidence standards, and editorial commitments.",
};

const sections = [
  { number: "01", title: "Introduction", desc: "What the product is, who makes it, and why we're investigating it." },
  { number: "02", title: "What Does the Company Claim?", desc: "A systematic inventory of every promise made in the VSL, sales page, and marketing materials." },
  { number: "03", title: "Fact or Fiction?", desc: "Each claim is evaluated individually against available scientific evidence." },
  { number: "04", title: "Ingredient Deep Dive", desc: "Every ingredient analyzed: purpose, dosage, bioavailability, and evidence quality." },
  { number: "05", title: "Clinical Evidence", desc: "Only studies in human subjects are considered primary evidence. We note quality, sample sizes, and limitations." },
  { number: "06", title: "Safety & Side Effects", desc: "Known contraindications, drug interactions, and adverse event reports." },
  { number: "07", title: "Customer Reviews & Complaints", desc: "Independent consumer sentiment — patterns in complaints and praise, BBB, Trustpilot, Reddit." },
  { number: "08", title: "Pricing & Refund Policy", desc: "Per-serving cost, subscription traps, refund difficulty, and value-for-money assessment." },
  { number: "09", title: "Pros & Cons", desc: "A concise, balanced summary of the product's genuine strengths and weaknesses." },
  { number: "10", title: "Final Verdict", desc: "Our evidence-based conclusion and recommendation." },
];

export default function MethodologyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)]">
          Editorial Policy
        </span>
        <h1
          className="text-3xl font-black text-[var(--brand-navy)] mt-1 mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Our Review Methodology
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Every investigation published on The Truth Review follows a consistent 10-section
          framework. Our goal is not to sell supplements — it&apos;s to give you the information
          needed to make an informed decision.
        </p>
      </div>

      {/* Core principle */}
      <div className="bg-[var(--brand-navy)] text-white rounded-lg p-6 mb-10">
        <h2
          className="text-xl font-bold text-[var(--brand-gold)] mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Our Core Scientific Standard
        </h2>
        <p className="text-white/80 leading-relaxed text-sm mb-4">
          We never use studies on isolated ingredients as proof that a commercial product works.
          We always distinguish between:
        </p>
        <ul className="space-y-2 text-sm">
          {[
            "Evidence about a specific ingredient in isolation",
            "Evidence at the dosage actually used in the product",
            "Evidence about the specific combination of ingredients",
            "Clinical evidence for the commercial product itself",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-white/70">
              <span className="text-[var(--brand-gold)] font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-white/50 text-xs mt-4">
          When no sufficient evidence exists at any of these levels, we say so explicitly.
        </p>
      </div>

      {/* 10 sections */}
      <h2
        className="text-xl font-bold text-[var(--brand-navy)] mb-5"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        The 10-Section Investigation Framework
      </h2>
      <div className="space-y-4">
        {sections.map((s) => (
          <div key={s.number} className="flex items-start gap-4 border rounded-lg p-4">
            <span className="text-2xl font-black text-[var(--brand-gold)]/40 font-mono leading-none mt-0.5">
              {s.number}
            </span>
            <div>
              <h3 className="font-bold text-[var(--brand-navy)] mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Commitments */}
      <div className="mt-10 border-t pt-8">
        <h2
          className="text-xl font-bold text-[var(--brand-navy)] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Editorial Commitments
        </h2>
        <ul className="space-y-3 text-sm">
          {[
            "We disclose all affiliate relationships clearly and upfront.",
            "We never accept payment to influence review conclusions.",
            "We never fabricate consumer testimonials or clinical results.",
            "We never make unqualified medical claims.",
            "We update reviews when new evidence or company changes emerge.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[var(--brand-green)] font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
