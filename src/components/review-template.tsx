import { VerdictBadge } from "@/components/verdict-badge";
import { RatingStars } from "@/components/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
  "true": { label: "✓ Supported", color: "text-green-700 bg-green-50 border-green-200" },
  "false": { label: "✗ Not Supported", color: "text-red-700 bg-red-50 border-red-200" },
  "partially-true": { label: "~ Partially Supported", color: "text-yellow-700 bg-yellow-50 border-yellow-200" },
  "unverified": { label: "? Unverified", color: "text-gray-600 bg-gray-50 border-gray-200" },
};

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-start gap-4 mb-4">
      <span className="text-3xl font-black text-[var(--brand-gold)]/30 leading-none mt-1 font-mono">
        {number}
      </span>
      <h2
        className="text-xl font-bold text-[var(--brand-navy)] border-b-2 border-[var(--brand-gold)] pb-1 flex-1"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
    </div>
  );
}

export function ReviewTemplate({ review }: { review: ReviewData }) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--brand-gold)] border border-[var(--brand-gold)]/40 px-2 py-0.5">
            Independent Product Investigation
          </span>
          <Badge variant="secondary" className="text-xs">{review.category}</Badge>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-black text-[var(--brand-navy)] leading-tight mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {review.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
          <span>By {review.author}</span>
          <span>·</span>
          <span>Published {review.publishedAt}</span>
          {review.updatedAt && (
            <>
              <span>·</span>
              <span>Updated {review.updatedAt}</span>
            </>
          )}
        </div>

        {/* Score card */}
        <div className="bg-[var(--brand-navy)] text-white rounded-lg p-5 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Overall Verdict</div>
              <div className="flex items-center gap-3">
                <span
                  className="text-5xl font-black text-[var(--brand-gold)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {review.overallScore}
                </span>
                <div>
                  <div className="text-white/50 text-xs">/10</div>
                  <VerdictBadge verdict={review.verdict} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {Object.entries(review.scores).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between gap-3">
                  <span className="text-white/60 capitalize text-xs">{key}</span>
                  <span className="font-semibold text-[var(--brand-gold)]">{val}/10</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TL;DR */}
        <div className="border-l-4 border-[var(--brand-gold)] pl-4 py-1 bg-yellow-50/50 rounded-r">
          <div className="text-xs font-bold tracking-widest uppercase text-[var(--brand-gold)] mb-1">Summary</div>
          <p className="text-sm leading-relaxed text-[var(--brand-navy)]">{review.summary}</p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Section 01 — Introduction */}
      <section className="mb-10">
        <SectionHeader number="01" title="Introduction" />
        <div className="prose-sm text-foreground leading-relaxed review-prose">
          <p>{review.sections.introduction}</p>
        </div>
      </section>

      {/* Section 02 — What Does the Company Claim? */}
      <section className="mb-10">
        <SectionHeader number="02" title="What Does the Company Claim?" />
        <ul className="space-y-2">
          {review.sections.companyClaims.map((claim, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-[var(--brand-gold)] font-bold mt-0.5">›</span>
              <span>{claim}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 03 — Fact or Fiction? */}
      <section className="mb-10">
        <SectionHeader number="03" title="Fact or Fiction?" />
        <div className="space-y-3">
          {review.sections.factOrFiction.map((item, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-sm font-semibold text-[var(--brand-navy)]">"{item.claim}"</span>
                <span className={`text-[10px] font-bold tracking-wide uppercase border px-2 py-0.5 rounded-sm whitespace-nowrap ${claimVerdictConfig[item.verdict].color}`}>
                  {claimVerdictConfig[item.verdict].label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04 — Ingredient Deep Dive */}
      <section className="mb-10">
        <SectionHeader number="04" title="Ingredient Deep Dive" />
        <div className="space-y-4">
          {review.sections.ingredients.map((ing, i) => (
            <div key={i} className="border rounded-lg p-4">
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

      {/* Section 05 — Clinical Evidence */}
      <section className="mb-10">
        <SectionHeader number="05" title="Clinical Evidence" />
        <div className="text-sm leading-relaxed text-foreground review-prose">
          <p>{review.sections.clinicalEvidence}</p>
        </div>
      </section>

      {/* Section 06 — Safety & Side Effects */}
      <section className="mb-10">
        <SectionHeader number="06" title="Safety & Side Effects" />
        <div className="text-sm leading-relaxed text-foreground review-prose">
          <p>{review.sections.safety}</p>
        </div>
      </section>

      {/* Section 07 — Customer Reviews */}
      <section className="mb-10">
        <SectionHeader number="07" title="Customer Reviews & Complaints" />
        <div className="text-sm leading-relaxed text-foreground review-prose">
          <p>{review.sections.customerReviews}</p>
        </div>
      </section>

      {/* Section 08 — Pricing */}
      <section className="mb-10">
        <SectionHeader number="08" title="Pricing & Refund Policy" />
        <div className="text-sm leading-relaxed text-foreground review-prose">
          <p>{review.sections.pricing}</p>
        </div>
      </section>

      {/* Section 09 — Pros & Cons */}
      <section className="mb-10">
        <SectionHeader number="09" title="Pros & Cons" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <h3 className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide">✓ Pros</h3>
            <ul className="space-y-2">
              {review.sections.pros.map((p, i) => (
                <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                  <span className="mt-0.5">+</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-lg p-4">
            <h3 className="font-bold text-red-800 mb-3 text-sm uppercase tracking-wide">✗ Cons</h3>
            <ul className="space-y-2">
              {review.sections.cons.map((c, i) => (
                <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                  <span className="mt-0.5">–</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 10 — Final Verdict */}
      <section className="mb-10">
        <SectionHeader number="10" title="Final Verdict" />
        <div className="bg-[var(--brand-navy)] text-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <VerdictBadge verdict={review.verdict} />
            <RatingStars score={review.overallScore} />
          </div>
          <p className="text-white/80 leading-relaxed text-sm">{review.sections.finalVerdict}</p>
          {review.affiliateLink && (
            <a
              href={review.affiliateLink}
              target="_blank"
              rel="nofollow noopener noreferrer sponsored"
              className="inline-block mt-4 bg-[var(--brand-gold)] text-[var(--brand-navy)] font-bold px-5 py-2.5 rounded text-sm hover:bg-[var(--brand-gold-light)] transition-colors"
            >
              Check Current Price →
            </a>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          * This review contains affiliate links. See our{" "}
          <a href="/affiliate-disclosure" className="underline">Affiliate Disclosure</a>.
        </p>
      </section>
    </article>
  );
}
