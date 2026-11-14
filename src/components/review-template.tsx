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
  verdictHeadline?: string;
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
        className="text-2xl font-bold text-[var(--brand-navy)] border-b-2 border-[var(--brand-gold)] pb-1 flex-1"
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
      className="inline-block bg-[var(--brand-gold)] text-white font-bold px-6 py-3 rounded hover:bg-[var(--brand-gold-light)] transition-colors"
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
  const stars5 = (review.overallScore / 2).toFixed(1);
  const colonIndex = review.title.indexOf(":");
  const titleParts =
    colonIndex === -1
      ? { lead: review.title, highlight: "" }
      : {
          lead: review.title.slice(0, colonIndex + 1),
          highlight: review.title.slice(colonIndex + 1).trim(),
        };
  return (
    <article>
      {/* Hero */}
      <section className="bg-white border-b pt-10 pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-stretch">
          {/* Product image */}
          <div className="md:col-span-2 flex items-center justify-center">
            {review.productImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={review.productImage} alt={review.productName} className="w-full h-auto object-contain" />
            ) : (
              <div className="text-muted-foreground text-sm text-center px-4">
                {review.productName}
                <br />product image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase text-[var(--brand-gold)] bg-[var(--brand-gold)]/10 px-3 py-1 rounded-full mb-3">
              Review &amp; Analysis
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-[var(--brand-navy)] mb-4" style={serif}>
              {titleParts.lead}
              {titleParts.highlight && (
                <>
                  {" "}
                  <span className="text-[var(--brand-gold)]">{titleParts.highlight}</span>
                </>
              )}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <RatingStars score={review.overallScore} hideValue />
              <span className="text-2xl font-black text-[var(--brand-navy)]" style={serif}>
                {stars5} <span className="text-base font-semibold text-muted-foreground">of 5</span>
              </span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-4">{review.summary}</p>

            {/* Verdict box */}
            <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-5">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shrink-0">✓</span>
              <div>
                <div className="font-bold text-green-800 mb-0.5">Verdict</div>
                <p className="text-sm text-green-800/90 leading-relaxed">
                  {review.verdictHeadline ?? review.summary}
                </p>
              </div>
            </div>

            <CtaButton href={review.affiliateLink} />
            <p className="text-xs text-muted-foreground mt-3">
              Editorial rating by {review.author} · {review.publishedAt}
            </p>
          </div>
        </div>
      </section>

      {/* Score cards */}
      <section className="max-w-5xl mx-auto px-4 mt-8 relative z-10">
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
          <p className="text-lg leading-relaxed">{sections.introduction}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="claims" number="02" title="What Does the Company Claim?" />
          <ul className="space-y-2">
            {sections.companyClaims.map((claim, i) => (
              <li key={i} className="flex items-start gap-2 text-lg leading-relaxed">
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
                  <span className="text-lg font-semibold text-[var(--brand-navy)]">&ldquo;{item.claim}&rdquo;</span>
                  <span className={`text-xs font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm whitespace-nowrap ${claimVerdictConfig[item.verdict].color}`}>
                    {claimVerdictConfig[item.verdict].label}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{item.explanation}</p>
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
                    <span className="text-lg font-bold text-[var(--brand-navy)]">{ing.name}</span>
                    <span className="text-base text-muted-foreground ml-2">({ing.dosage})</span>
                  </div>
                  <span className={`text-xs font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm ${evidenceLabels[ing.rating].color}`}>
                    {evidenceLabels[ing.rating].label}
                  </span>
                </div>
                <p className="text-base text-muted-foreground mb-1"><strong>Purpose:</strong> {ing.purpose}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{ing.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <SectionHeader id="clinical-evidence" number="05" title="Clinical Evidence" />
          <p className="text-lg leading-relaxed">{sections.clinicalEvidence}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="safety" number="06" title="Safety & Side Effects" />
          <p className="text-lg leading-relaxed">{sections.safety}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="customer-reviews" number="07" title="Customer Reviews & Complaints" />
          <p className="text-lg leading-relaxed">{sections.customerReviews}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="pricing" number="08" title="Pricing & Refund Policy" />
          <p className="text-lg leading-relaxed">{sections.pricing}</p>
        </section>

        <section className="mb-10">
          <SectionHeader id="pros-cons" number="09" title="Pros & Cons" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-base uppercase tracking-wide">Pros</h3>
              <ul className="space-y-2">
                {sections.pros.map((p, i) => (
                  <li key={i} className="text-lg text-green-700 leading-relaxed">+ {p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-3 text-base uppercase tracking-wide">Cons</h3>
              <ul className="space-y-2">
                {sections.cons.map((c, i) => (
                  <li key={i} className="text-lg text-red-700 leading-relaxed">– {c}</li>
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
            <p className="text-lg text-white/80 leading-relaxed mb-4">{sections.finalVerdict}</p>
            <CtaButton href={review.affiliateLink} />
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            This review contains affiliate links. We may earn a commission at no extra cost to you.
            Our verdicts are not influenced by commissions.
          </p>
        </section>
      </div>
    </article>
  );
}
