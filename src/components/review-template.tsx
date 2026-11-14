import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";

type Verdict = "legit" | "scam" | "mixed" | "inconclusive";

export interface ReviewData {
  title: string;
  productName: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  verdict: Verdict;
  overallScore: number;
  productImage?: string;
  scores: {
    ingredients: number;
    evidence: number;
    safety: number;
    value: number;
    transparency: number;
  };
  summary: string;
  sections: {
    introduction: string;
    companyClaims: string[];
    factOrFiction: Array<{ claim: string; verdict: "true" | "false" | "partially-true" | "unverified"; explanation: string }>;
    ingredients: Array<{ name: string; dosage: string; purpose: string; evidence: string; rating: "strong" | "moderate" | "weak" | "none" }>;
    clinicalEvidence: string;
    safety: string;
    customerReviews: string;
    pricing: string;
    pros: string[];
    cons: string[];
    finalVerdict: string;
  };
  affiliateLink?: string;
}

const evidenceLabels: Record<string, { label: string; color: string }> = {
  strong: { label: "Strong Evidence", color: "text-green-700 bg-green-50 border-green-200" },
  moderate: { label: "Moderate Evidence", color: "text-yellow-700 bg-yellow-50 border-yellow-200" },
  weak: { label: "Weak Evidence", color: "text-orange-700 bg-orange-50 border-orange-200" },
  none: { label: "No Evidence", color: "text-red-700 bg-red-50 border-red-200" },
};

const claimVerdictConfig = {
  "true": { label: "Supported", color: "text-green-700 bg-green-50 border-green-200" },
  "false": { label: "Not Supported", color: "text-red-700 bg-red-50 border-red-200" },
  "partially-true": { label: "Partially Supported", color: "text-yellow-700 bg-yellow-50 border-yellow-200" },
  "unverified": { label: "Unverified", color: "text-gray-600 bg-gray-50 border-gray-200" },
};

const serif = { fontFamily: "var(--font-playfair), Georgia, serif" };

function SectionHeader({ number, title, id }: { number: string; title: string; id: string }) {
  return (
    <div id={id} className="flex items-start gap-4 mb-4 scroll-mt-6">
      <span className="text-3xl font-black text-[var(--brand-gold)]/40 leading-none mt-1 font-mono">
        {number}
      </span>
      <h2
        className="text-xl font-bold text-[var(--brand-navy)] border-b-2 border-[var(--brand-gold)] pb-1 flex-1"
        style={serif}
      >
        {title}
      </h2>
    </div>
  );
}

function CtaButton({ href }: { href?: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer sponsored"
      className="inline-block bg-[var(--brand-gold)] text-[var(--brand-navy)] font-bold px-6 py-3 rounded hover:bg-[var(--brand-gold-light)] transition-colors"
    >
      Check Current Price
    </a>
  );
}

const scoreCards: Array<{ key: keyof ReviewData["scores"]; label: string }> = [
  { key: "ingredients", label: "Ingredients" },
  { key: "evidence", label: "Clinical Evidence" },
  { key: "safety", label: "Safety" },
  { key: "value", label: "Price & Value" },
];

export function ReviewTemplate({ review }: { review: ReviewData }) {
  const { sections } = review;
  return (
    <article>
      {/* Hero */}
      <section className="bg-[var(--brand-navy)] text-white pb-28 pt-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--brand-gold)]">
              Independent Investigation · {review.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight mt-3 mb-4" style={serif}>
              {review.title}
            </h1>
            <p className="text-white/70 leading-relaxed mb-5">{review.summary}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-[var(--brand-gold)]" style={serif}>
                {review.overallScore}
                <span className="text-lg text-white/50">/10</span>
              </span>
              <VerdictBadge verdict={review.verdict} />
            </div>
            <CtaButton href={review.affiliateLink} />
            <p className="text-xs text-white/40 mt-4">
              By {review.author} · {review.publishedAt}
            </p>
          </div>

          <div className="flex justify-center">
            {review.productImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={review.productImage} alt={review.productName} className="max-h-80 w-auto" />
            ) : (
              <div className="w-64 h-72 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-white/40 text-sm text-center px-4">
                Product image placeholder
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overlapping score cards */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {scoreCards.map((c) => (
            <div key={c.key} className="bg-white rounded-lg shadow-lg border-t-4 border-[var(--brand-gold)] p-5 text-center">
              <div className="text-3xl font-black text-[var(--brand-navy)]" style={serif}>
                {review.scores[c.key]}<span className="text-sm text-muted-foreground">/10</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <section className="mb-10">
          <SectionHeader id="introduction" number="01" title="Introduction" />
          <p className="text-sm leading-relaxed">{sections.introduction}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="claims" number="02" title="What Does the Company Claim?" />
          <ul className="space-y-2">
            {sections.companyClaims.map((claim, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-[var(--brand-gold)] font-bold">›</span>
                <span>{claim}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <SectionHeader id="fact-or-fiction" number="03" title="Fact or Fiction?" />
          <div className="space-y-3">
            {sections.factOrFiction.map((item, i) => (
              <div key={i} className="border rounded-lg p-4 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-semibold text-[var(--brand-navy)]">&ldquo;{item.claim}&rdquo;</span>
                  <span className={`text-[10px] font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm whitespace-nowrap ${claimVerdictConfig[item.verdict].color}`}>
                    {claimVerdictConfig[item.verdict].label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader id="ingredients" number="04" title="Ingredient Deep Dive" />
          <div className="space-y-4">
            {sections.ingredients.map((ing, i) => (
              <div key={i} className="border rounded-lg p-4 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <span className="font-bold text-[var(--brand-navy)]">{ing.name}</span>
                    <span className="text-xs text-muted-foreground ml-2">({ing.dosage})</span>
                  </div>
                  <span className={`text-[10px] font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm ${evidenceLabels[ing.rating].color}`}>
                    {evidenceLabels[ing.rating].label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1"><strong>Purpose:</strong> {ing.purpose}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{ing.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader id="clinical-evidence" number="05" title="Clinical Evidence" />
          <p className="text-sm leading-relaxed">{sections.clinicalEvidence}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="safety" number="06" title="Safety & Side Effects" />
          <p className="text-sm leading-relaxed">{sections.safety}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="customer-reviews" number="07" title="Customer Reviews & Complaints" />
          <p className="text-sm leading-relaxed">{sections.customerReviews}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="pricing" number="08" title="Pricing & Refund Policy" />
          <p className="text-sm leading-relaxed">{sections.pricing}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="pros-cons" number="09" title="Pros & Cons" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-4">
              <h3 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide">Pros</h3>
              <ul className="space-y-2">
                {sections.pros.map((p, i) => (
                  <li key={i} className="text-sm text-green-700">+ {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
              <h3 className="font-bold text-red-800 mb-3 text-sm uppercase tracking-wide">Cons</h3>
              <ul className="space-y-2">
                {sections.cons.map((c, i) => (
                  <li key={i} className="text-sm text-red-700">– {c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <SectionHeader id="final-verdict" number="10" title="Final Verdict" />
          <div className="bg-[var(--brand-navy)] text-white rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <VerdictBadge verdict={review.verdict} />
              <RatingStars score={review.overallScore} />
            </div>
            <p className="text-white/80 leading-relaxed text-sm mb-4">{sections.finalVerdict}</p>
            <CtaButton href={review.affiliateLink} />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            This review contains affiliate links. We may earn a commission at no extra cost to you.
            Our verdicts are not influenced by commissions.
          </p>
        </section>
      </div>
    </article>
  );
}
